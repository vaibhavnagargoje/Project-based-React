import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            className=" outline-none px-4 py-1 rounded-full text-white shadow-0"
            style={{ backgroundColor: "red" }} onClick={()=>setColor("red")}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-0 "
            style={{ backgroundColor: "green" }} onClick={()=>setColor("green")}
          >
            Green
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-dark shadow-0 "
            style={{ backgroundColor: "yellow" }} onClick={()=> setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-0 "
            style={{ backgroundColor: "pink" }} onClick={()=> setColor("pink")}
          >
            pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-0 "
            style={{ backgroundColor: "black" }} onClick={()=>setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-0 "
            style={{ backgroundColor: "blue" }} onClick={()=>{return setColor("blue")}}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
