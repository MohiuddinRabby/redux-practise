import React from "react";
import { update_game } from "./redux/actions/gameActions";
import { update_name } from "./redux/actions/personActions";
import store from "./redux/stores";

const App = () => {
  const updateName = () => {
    store.dispatch(update_name);
  };
  const updateGame = () => {
    store.dispatch(update_game);
  };
  return (
    <div>
      <h1>Redux Practise</h1>
      <h2>Person Name: {store.getState().name.name}</h2>
      <button onClick={updateName}>Update Name</button>
      <h2>Person Name: {store.getState().game.name}</h2>
      <button onClick={updateGame}>Update Name</button>
    </div>
  );
};

export default App;
