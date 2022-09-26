// import  {createStore} from "redux";
// import {configureStore} from "@reduxjs/toolkit";
import { legacy_createStore as createStore} from 'redux'
import reducer from "./reducers/index";

export default function configureState(initialState) {
    const store= createStore(reducer,initialState);
    return store;
}