import { combineReducers, createStore } from "redux";
import { nameReducer } from "../reducers/nameReducer";

const initialState = {
  name: "Change Name",
};

const allReducers = combineReducers({ name: nameReducer });
const store = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
