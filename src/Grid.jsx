import React from 'react';
import Cell from './Cell';

function Grid() {
  return (
    <div className="grid">
      {/* Single cell */}
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}

export default Grid;