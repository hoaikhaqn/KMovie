import React, { createContext, useContext, useReducer } from "react";
import { initialState, mainReducer } from "./reducers";
const StateContext = createContext();
export const StateProvider = props => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const getDocumentById = (collection,id) => {
    firebase.getDocument(collection,id).then(rs => {
      dispatch({ type: "GET_MOVIE_ITEM", data: {item:{...rs.data(),id:rs.id} }});
    });
  };
  const getCollection = (collection,params,key) => {
    var aData = [];var obj = {}
    firebase.getData(collection,params).then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        aData.push({ ...doc.data(), id: doc.id })
      });
      obj[key||collection] = aData;
      dispatch({ type: "GET_LISTDATA", data: {...obj} });
    });
  };
  const setDocument = (collection,id,data) => {
    firebase.setDocument(collection,id,data);
  };
  const value = {
    state,
    dispatch,
    firebase,
    getDocumentById,
    getCollection,
    setDocument
  };
  // const getListByField = (key,params) => {
  //   var aData = [];var objData = {}
  //   firebase.getData("movie",params).then(function (querySnapshot) {
  //     querySnapshot.forEach(function (doc) {
  //       if(Array.isArray(doc.data()[key])){
  //         doc.data()[key].forEach(function(item){
  //           if(aData.findIndex(i => i.id === item.id)===-1)
  //           aData.push(item);
  //         })
  //       }
  //       else{
  //         if(aData.findIndex(i => i.id === doc.data()[key].id)===-1)
  //         aData.push(doc.data()[key])
  //       }
  //     });
  //     objData[key] = aData;
  //     dispatch({ type: "GET_MOVIES", data: {...objData} });
  //   });
  // };
  return <StateContext.Provider value={value}>{props.children}</StateContext.Provider>;
};
export const useReduceState = () => useContext(StateContext);

export const firebase = require("./firebase").default;
