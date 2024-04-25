import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null)  //the value of variable value is preset to null, as it's passed to useState at first
  function handleClick(){
    setValue('X')
    console.log("clicked!")
  }
  return <button className="square" onClick={handleClick} >{value}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}