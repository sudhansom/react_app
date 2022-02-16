import { createStore } from "react-redux";
import storeRedux from "./reducer";

const store = createStore(storeRedux);

export default store;
