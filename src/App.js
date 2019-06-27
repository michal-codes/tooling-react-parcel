import React from "react";
import { render } from "react-dom";
import IncrementBtn from "./IncrementBtn.js";

const App = () => {
  const name = "Michał";
  const dd = "lol";
  const arr = [1, 3, 4, 5];
  return (
    <div>
      <h1>Witaj {`${name} ${dd}`}</h1>
      <IncrementBtn />
    </div>
  );
};

render(<App />, document.getElementById("root"));
