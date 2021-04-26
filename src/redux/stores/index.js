import { combineReducers, createStore } from "redux";
import gameReducer from "../reducers/gameReducer";
import nameReducer from "../reducers/personReducer";

const initialState = {
  game: { name: "Cricket" },
  name: { name: "Mohiuddin" },
};

const allReducers = combineReducers({ name: nameReducer, game: gameReducer });
const store = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
