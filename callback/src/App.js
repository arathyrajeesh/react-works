import React, { useState, useCallback } from "react";

// A child component that only re-renders when its props change
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered!");
  return (
    <button onClick={onClick} style={{ padding: "10px", marginTop: "10px" }}>
      Click Me
    </button>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // useCallback ensures this function isn't recreated
  // unless `count` changes
  const handleClick = useCallback(() => {
    alert(`Button clicked! Count is ${count}`);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        style={{ marginTop: "10px", padding: "5px" }}
      />

      {/* Passing memoized function to child */}
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
