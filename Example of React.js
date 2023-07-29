//Here is an example implementation of the Counter application using React:


import React, { useState } from 'react';

const Counter = ({ min, max }) => {
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue) && inputValue >= min && inputValue <= max) {
      setValue(inputValue);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={value} onChange={handleInputChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;


//You can then use the `Counter` component in your main application and pass the `min` and `max` values as props:


import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Advanced Counter</h1>
      <Counter min={0} max={10} />
    </div>
  );
};

export default App;
