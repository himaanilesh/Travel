import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initial value is 0

  const increment = () => {
    setCount(prevCount => prevCount + 1); // Correct way to increment
  };
  const decrement = () => {
    setCount(prevCount => prevCount - 1); // Correct way to dereent
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement }>Decrement</button>
    </div>
  );
};

export default Counter;
