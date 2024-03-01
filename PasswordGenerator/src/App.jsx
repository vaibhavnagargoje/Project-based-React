import { useState, useCallback,useEffect ,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [Password, setPassword] = useState("");
 // useRef hook
 const passwordRef= useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "1234567890";
    }
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, charAllowed, setPassword]);


  const copyPasswordToClipbord= useCallback(()=>{
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=> {
    passwordGenerator()
  },[length,numberallowed,charAllowed,passwordGenerator])

  return (
    <>
      <h1 className="text-4xl text-center my-3 text-white">
        {" "}
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password "
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipbord} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy{" "}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex itmes-center gap-x-1">
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length {length} </label>
          </div>
          <div className="flex items-center gap-x-1">

              <input 
              type="checkbox"
              defaultChecked={numberallowed}
              id='numberInput'
              onChange={()=>{setCharAllowed((prev)=> !prev);
              }}
              


              />  
              <label htmlFor="numberInput">Numbers </label>
              
          </div>

              <div className="flex items-center gap-x-1">
                <input
                 type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={()=>{
                    setCharAllowed((prev)=> !prev);
                  }}
                
                />
                <label htmlFor="charachterInput">Characters </label>
              </div>

        </div>
      </div>
    </>
  );
}

export default App;
