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
function Board({states, currentMove, onPlay}) {

  function handleClick(i) {
    if (states[i] || calcWinner(states)){
      return;
    }
    const nextSquare = states.slice();
    if (currentMove % 2 === 0) {
      nextSquare[i] = 'X';
    } else {
      nextSquare[i] = 'O';
    }
    onPlay(nextSquare);
  }
  const winner = calcWinner(states)
  let log = null;
  if (winner) {
    log = "The Winner Is " + winner + "!";
  } else {
    let player = null;
    if (currentMove % 2 ===0) {
      player = "X";
    } else {
      player = "O";
    }
    log = "The Next Player Is " + player;
  }


  return (
    <>
      <div>
        {log}
      </div>

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
};

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentStates = history[currentMove];

  function handlePlay(newStates) {
    const nextHistory = [...history.slice(0, currentMove+1), newStates];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);

  }

  const moves = history.map((sqaures, move) => {
    let description;
    if (move > 0) {
      description = "go to move #" + move;
    } else {
      description = "go to start of the game";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  })

  return (
    <div>
      <div className='game-board'>
        <Board currentMove={currentMove} states={currentStates} onPlay={handlePlay}/>
      </div>

      <div className='game-info'>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
};