import React, { useState } from 'react';
import { useCount } from './Context';

function Cell() {
  const { count, setCount } = useCount();
  const [isOn, setClicked] = useState(false);

  // Function to switch cell state and count
  const switchCell = () => {
    setClicked(!isOn);
    setCount(prevCount => prevCount + (isOn ? -1 : 1));
  };

  return (
    <div
      className={`cell ${isOn ? 'on' : ''}`}
      onClick={switchCell}
    ></div>
  );
}

export default Cell;