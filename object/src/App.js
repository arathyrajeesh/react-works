import React from 'react';

function ChildComponent(props) {
  const { user } = props;
  const { name, age, city } = user;

  return (
    <div>
      <h2>User Information:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default ChildComponent;