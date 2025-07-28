import React from 'react';

function Child(props) {
    return (
    <div>
        <h3>{props.name}</h3>
        <p>Age: {props.age}</p>
    </div>
);
}

export default Child;