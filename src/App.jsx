import './App.css';
import { useState } from 'react';
const App = () => {
const[counter,setCounter]=useState(0)

  const increment=()=>{
    setCounter(counter+1)
  }
  const decrement=()=>{
    setCounter(counter-1)
  }
  return (
    <>
    <div className="App">counter</div>
    <div className="counter">{counter}</div>
    <div className="buttons">
   <button onClick={increment}>+</button> 
   <button onClick={decrement}>_</button>
 
   </div>
    
   </>
    
    
  )
}

export default App