import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  const [count,setCount]=useState(0);
  function increment() {
    setCount(count + 1);
  };
  function decrement() {
    setCount(count - 1);
  };
  function resetCounter() {
    setCount(0); 
  };
  return(
    <div class="container">
    <h1>Count: {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={resetCounter}>Reset</button>

    <button onClick={decrement}>-</button>
  </div>
  );
}
export default App;