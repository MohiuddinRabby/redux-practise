import React from "react";
import store from "./redux/stores";

const App = () => {
  console.log(store.getState().name);
  return (
    <div>
      <h1>Name: {store.getState().name}</h1>
      <br />
    </div>
  );
};

export default App;
