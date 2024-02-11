import { useState, useCallback } from 'react'

import './App.css'

function App() {
  
  const [length , setLength]=useState(8);
  const [numberallowed, setNumberallowed]=useState(false)
  const [charAllowed, setCharAllowed]= useState(false)

  const [Password,setPassword]= useState("")
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed){
      str+="1234567890";
    }
    if(charAllowed) str+="!@#$%^&*()_+";

    for(let i=1;i<length;i++)
      {
        let char = Math.floor( Math.random()*str.length +1)
        pass= str.charAt(char)
      }
      setPassword(pass)
  },[length, numberallowed, charAllowed, setPassword])





  return (
    <>
     <h1 className='text-4xl text-center text-white'> Password Generator</h1>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500"> test </div>
    </>
  )
}

export default App
