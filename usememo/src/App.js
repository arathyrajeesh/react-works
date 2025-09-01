import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation (just simulating with a loop)
  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // useMemo will only re-run the calculation when `count` changes
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <p>Expensive Calculation Result: {calculation}</p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ marginTop: "10px", padding: "5px" }}
      />
    </div>
  );
}

export default App;
