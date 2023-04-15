import {React, useEffect, useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

export default function App() {
  const onHandleChange = (event) => {
      setNum(event.target.value);
  }
  const onHandleChange1 = (event) => {
    setNumber(event.target.value);
  }
  const [num, setNum] = useState(1);
  const [number, setNumber] = useState(1);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [power, setPower] = useState();
  useEffect(() => {
    async function getData(){
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(response.data.name);
      console.log(response);
      console.log(response.data.moves[number].move.name);
      setName(response.data.name);
      setMoves(response.data.moves.length);
      setPower(response.data.moves[number].move.name);
    }

    getData();
  })
  return (
    <div className="main">
      <h1>You Choose <span style={{color:'red'}}>{num}</span> Value</h1>
      <h1>The Pokemon Name is <span style={{color:'red'}}>{name}</span></h1>
      <h1>And its moves is <span style={{color:'red'}}>{moves}</span></h1>
      <h1>And its Attack is <span style={{color:'red'}}>{power}</span></h1>
      <h1>And its Attack Number is <span style={{color:'red'}}>{number}</span></h1>
      <select 
      value={num} 
      className=" me-3"
      onChange={onHandleChange}>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <select 
      value={number} 
      onChange={onHandleChange1}>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  )
}
