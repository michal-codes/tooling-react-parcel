import React, { useState } from "react";

const IncrementBtn = () => {
  const [counter, setCounter] = useState(0);
  const onIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={onIncrement}>Click</button>
      <p>Counter state: {counter ? counter : "zero"}</p>
    </div>
  );
};

export default IncrementBtn;
