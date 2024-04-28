import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick} >{value}</button>;
}

export default function Board() {
  

  const [states, setStates] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquare = states.slice();
    nextSquare[i] = 'X';
    setStates(nextSquare);
  }
  return (
    <>
      <div className="board-row">
        <Square value={states[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={states[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={states[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      
      <div className="board-row">
        <Square value={states[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={states[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={states[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      
      <div className="board-row">
        <Square value={states[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={states[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={states[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}