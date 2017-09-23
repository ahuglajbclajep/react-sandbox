import React from 'react';
import './index.css';

function Square(props) {
  return (
    <button
      className="square"
      style={{color: props.value === 'X' ? 'blue' : 'red'}}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default function Board(props) {
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  return (
    <div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
