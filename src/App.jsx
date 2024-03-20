import React from 'react';
import Grid from './Grid';
import './App.css';
import { ManageCount } from './Context';
import { Counter } from './Counter';

function App() {
  return (
    <ManageCount>
      <>
        <h1>Count: <Counter /></h1>
        <div className="card">
          <Grid />
        </div>
      </>
    </ManageCount>
  );
}

export default App;