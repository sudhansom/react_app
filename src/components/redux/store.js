import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import storeRedux from "./reducer";

const store = createStore(storeRedux, composeWithDevTools());

export default store;
