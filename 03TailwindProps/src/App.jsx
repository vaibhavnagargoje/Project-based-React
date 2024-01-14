import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  

  let myObj ={
    username:"Vaibhav",
    age:23,
    city:'pune',
    School:'Fergusson'
  }

  let newArr=[1,2,4,5,6]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-5'> Tailwaind test </h1>

     <Card Name ="React Series" obj = {myObj} newArr={newArr}></Card>

    </>
  )
}

export default App
