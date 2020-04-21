import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  console.log(storage);
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

const storeStateInLocalStorage = (state, updateDocumentTitle) => {
  localStorage.setItem('counterState', JSON.stringify(state));
  updateDocumentTitle();
  console.log(localStorage);
};

const Counter = ({ max, step }) => {
  const [count, setCount] = React.useState(0);
  const increment = () =>
    setCount((c) => {
      if (c >= max) return c;
      return c + step;
    });
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
