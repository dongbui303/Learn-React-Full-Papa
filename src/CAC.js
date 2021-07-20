import React, { useState } from "react";

function CAC() {
  const [count, setCount] = useState(10);

  const increment = () => {
    // count += 1; //Wrong

    setCount(count + 1);
  };

  const decrement = () => {
    // count -= 1; // Wrong

    setCount(count - 1);
  };
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p>The count is : {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CAC;
