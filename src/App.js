import React, { useState } from "react";
import { UPDATE_NAME } from "./redux/actions/nameAction";
import store from "./redux/stores";

const App = () => {
  console.log(store.getState());
  const [updatedName, setUpdatedName] = useState();
  console.log(updatedName);
  const [text, setText] = useState("");
  const handleSubmit = () => {
    setUpdatedName(text);
    setText("");
  };
  const getUpdatedName = () => {
    store.dispatch({ type: UPDATE_NAME, payload: updatedName });
  };
  return (
    <div>
      <button onClick={getUpdatedName}>Get Updated Name</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Name Updated</button>
      <h1>Name: {store.getState().name.name}</h1>
    </div>
  );
};

export default App;
