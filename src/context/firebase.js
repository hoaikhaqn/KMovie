/*eslint-disable no-eval */
import {
  FireSQL
} from 'firesql';
import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
// import { toast } from "react-toastify";
import Config from "../config";
class Firebase {
  constructor() {
    app.initializeApp(Config._env.firebase);
    this.auth = app.auth();
    this.db = app.firestore();
    this.fireSQL = new FireSQL(this.db);
    this.authGoogle = new app.auth.GoogleAuthProvider();
    this.authGoogle.setCustomParameters({
      prompt: "select_account"
    });
    this.authFacebook = new app.auth.FacebookAuthProvider();
    this.authFacebook.setCustomParameters({
      prompt: "select_account"
    });
  }
  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
  getCurrentUsername() {
    return this.auth.currentUser;
  }
  getUserLogIn() {
    return this.db.doc("account/" + this.getUid()).get();
  }
  getUid = user => {
    !user && (user = this.auth.currentUser);
    return user && (user.email || (user.providerData[0] && user.providerData[0].uid) || user.uid);
  };
  checkSession = user => {
    !user && (user = this.auth.currentUser);
    // console.log("user.metadata.b", user && user.metadata.b);
    return user && new Date().getTime() - user.metadata.b < 86400000; //1 hour
  };

  logout() {
    return this.auth.signOut();
  }
  //------------------------------------------------------------------------//
  getData(collection,params) {
    return params ?
      this.db
      .collection(collection)
      .orderBy(params.order ? params.order[0] : "createdAt", params.order ? params.order[1] : "desc")
      .limit(params.limit ? params.limit : 1000)
      .get(params.get && params.get) :
      this.db.collection(collection).get();
  }
  getDocument(collection, id) {
    return this.db
      .collection(collection)
      .doc(id)
      .get();
  }
  setDocument(collection, id, data, cb) {
    this.db
      .collection(collection)
      .doc(id)
      .set(data)
      .then(function () {
        cb && cb(true);
      })
      .catch(function (error) {
        cb && cb(false);
      });
   
  }

  // ----------
  getDocWithCondition = (collection, params, callback) => {
    try {
      var api = this.db.collection(collection)
        .where(params.where[0] + (
            typeof params.where[1] === "object" ? "." + params.where[1].id : ""), "==",
          typeof params.where[1] === "object" ? params.where[1].name : params.where[1]);

      api.onSnapshot(function (snapshot) {
        const data = [];
        snapshot.docs.forEach(doc => {
          data.push({
            ...doc.data(),
            id: doc.id
          });
        });
        // console.log("data", data);
        callback && callback(data);
      });
      // return api.get();
    } catch (error) {
      console.error(error);
    }
  };
  getDocWithMultiCondition = (collection, params, callback) => {
    try {
      var api;
      var where = "";
      params.where && params.where.forEach(item => {
        if (typeof item[1] === "object") {
          where += ".where('" + item[0] + "." + item[1].id + "','==','" + item[1].name + "')";
        } else {
          where += ".where('" + item[0] + "','==','" + item[1] + "')";
        }
      })
      let query = `this.db.collection('${collection}')${where}`;
      // console.log(query);
      api = eval(query);
      api.onSnapshot(function (snapshot) {
        const data = [];
        snapshot.docs.forEach(doc => {
          data.push({
            ...doc.data(),
            id: doc.id
          });
        });
        if (params.orderBy) {
          data.sort(function (a, b) {
            return (params.orderBy[1] === "asc" ? 1 : -1) * (a[params.orderBy[0]] - b[params.orderBy[0]])
          })
        } else {
          data.sort(function (a, b) {
            return b.createdAt - a.createdAt;
          })
        }
        // console.log("data", data);
        callback && callback(data);
      });
      // return api.get();
    } catch (error) {
      console.error(error);
    }
  };
  // getDocWithMultiConditionSQL = (collection, params,callback) => {
  //   try {
  //     var where = "";
  //     if (params.where) {
  //       where = " WHERE ";
  //       params.where.map(function (item, idx) {
  //         if (typeof item[1] === "object") {
  //           where += (idx === 0 ? "" : " AND ") + "`" + item[0] + "` IN '" + item[1].id + "'";
  //         } else {
  //           where += (idx === 0 ? "" : " AND ") + "`" + item[0] + "` = '" + item[1] + "'";
  //         }
  //       })
  //     }

  //     let query = 'SELECT * FROM ' + collection +
  //       where +
  //       ' ORDER BY createdAt DESC' +
  //       ' LIMIT 2';
  //     console.log("QUERY", query);
  //     const api = this.fireSQL.query(query);
  //     api.then(data => {
  //       console.log("data", data);
  //       callback && callback(data);
  //     });
  //     // return api.get();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  getDocWithKeyword = (collection, params, callback) => {
    try {
      let query = `SELECT * FROM ${collection} WHERE ${params.where[0]} OR ${params.where[1]}`;
      // console.log("QUERY", query);
      const api = this.fireSQL.query(query);
      api.then(data => {
        if (params.orderBy) {
          data.sort(function (a, b) {
            return (params.orderBy[1] === "asc" ? 1 : -1) * (a[params.orderBy[0]] - b[params.orderBy[0]])
          })
        } else {
          data.sort(function (a, b) {
            return b.createdAt - a.createdAt;
          })
        }
        // console.log("data", data);
        callback && callback(data);
      });
      // return api.get();
    } catch (error) {
      console.error(error);
    }
  };
}

export default new Firebase();