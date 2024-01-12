import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {


   let [counter,setCounter]=useState(0)

  
  const addValue= ()=>{
    console.log("value Added",Math.floor(Math.random()*10));
    if(counter<20){
      
      counter+=1
      setCounter(counter)
    }
  }
  const removeValue=()=>{
    console.log("value Removed");
    if(counter>=1){
      counter-=1

      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Hellow, React Hooks </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Vallue {counter}</button>
      <br />
      <button onClick={removeValue}> Remove Value {counter}</button>
      <footer>Footer : {counter}</footer>
    </>
  )
}

export default App
