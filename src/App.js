import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick} >{value}</button>;
}


function calcWinner(currentStates) {
  const winRoute = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]];
        
  for (let i=0; i<winRoute.length; i++) {
    const [a,b,c] = winRoute[i];
    if (currentStates[a] && currentStates[a] === currentStates[b] && currentStates[a] === currentStates[c]) {
      return currentStates[a];
    }
  }
  return null
}
export default function Board() {
  

  const [states, setStates] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true)
  function handleClick(i) {
    if (states[i] || calcWinner(states)){
      return;
    }
    const nextSquare = states.slice();
    if (isX) {
      nextSquare[i] = 'X';
    } else {
      nextSquare[i] = 'O';
    }
    setStates(nextSquare);
    setIsX(!isX);
  }
  const winner = calcWinner(states)
  let currentPlayer = null
  let msg = null
  if (winner) {
    msg = "Winner is: " + winner
  } else {
    if (isX) {
      currentPlayer = "X"
    } else {
      currentPlayer = "O"
    }
    msg = "Current player is: " + currentPlayer
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
      <div>{msg}</div>
    </>
  );
}