import React from 'react';
import Child from './user';

function App() {
  return (
    <div>
      <h1>Details</h1>
      <Child name="job" age={25} />
    </div>
  );
}

export default App;