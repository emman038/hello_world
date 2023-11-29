import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);             // useState is a function that returns an Array. A value and a function

  const incrementCounter = ()=>{
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>HELLO WORLD!</h1>
      <p>Welcome to my amazing React app!</p>
      <hr />
      <p>The current value of the counter is {counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </>
  );
}

export default App;
