import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import { toast } from "react-toastify";
import Config from "../config";
class Firebase {
  constructor() {
    app.initializeApp(Config._env.firebase);
    this.auth = app.auth();
    this.db = app.firestore();
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
  getQuery(collection, param, handleChange) {
    // console.log(collection, ":", param);
    const api = (
      param ?
        this.db
          .collection(collection)
          .orderBy(param.orderBy[0], param.orderBy[1])
          // .startAfter(param.startAfter||{})
          .limit(param.limit) :
        this.db
          .collection(collection)
    );
    api.onSnapshot(function (doc) { handleChange && handleChange(doc) });
    return api.get()
  }
  getDataInfo(id, handleChange) {
    const api = this.db.doc("dataInfo/" + id)
    api.onSnapshot(function (doc) { handleChange && handleChange(doc) });
    return api.get()
  }
  async setDocument(collection, doc) {
    try {
      var currentDoc = (doc.id && await this.db.doc(`${collection}/${doc.id}`).get()) || null
      if (currentDoc && currentDoc.exists) {
        console.error("currentDoc: ", currentDoc && currentDoc.data())
        toast.error(`Document with this id has already exists!`)
      } else {
        !doc.id && (doc.id = new Date().getTime().toString())
        this.db.collection(collection).doc(doc.id).set({ editor: this.getUid(), updated_at: new Date(), ...doc })
          .then(function (docRef) {
            toast.success(`Create ${collection} successfully!`)
          })
          .catch(function (error) {
            console.error(error);
            toast.error(`Cannot Create ${collection}!`)
          });
      }
    } catch (error) {
      console.error(error);
      toast.error(`Cannot Create ${collection}!`)
    }
  }
  async updateDocument(collection, doc) {
    try {
      var currentDoc = await this.db.doc(`${collection}/${doc.id}`).get();
      if (currentDoc && currentDoc.exists) {
        this.db.collection(collection).doc(doc.id).update({ editor: this.getUid(), updated_at: new Date(), ...doc })
          .then(function (docRef) {
            toast.success(`Update ${collection} successfully!`)
          })
          .catch(function (error) {
            console.error(error);
            toast.error(`Cannot Update ${collection}!`)
          });
      } else {
        console.error("currentDoc: ", currentDoc && currentDoc.data())
        toast.error(`Document with this id doesn't exists!`)
      }
    } catch (error) {
      console.error(error);
      toast.error(`Cannot Update ${collection}!`)
    }
  }
  getDocument(collection, id) {
    return this.db.doc(`${collection}/${id}`).get();
  }
  deleteDocument(collection, id) {
    this.db.collection(collection).doc(id).delete()
      .then(function () {
        toast.success("Document successfully deleted!");
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      });
  }
  logout() {
    return this.auth.signOut();
  }
  addUser(user) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db.doc(`account/${user.gmail}`).set({
      editor: user.editor || "",
      email: user.gmail,
      group: user.role,
      updated_at: new Date()
    });
  }
}

export default new Firebase();
