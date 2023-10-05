import { useState } from "react";
import "./App.css";

function App() {
  const[color, setColor] = useState("#000")
  
  return (
    <div className="w-full h-screen flex justify-center items-end" style={{backgroundColor:color}}>
      <div className="w-1/2 h-16 rounded-full flex mb-28 justify-center items-center gap-2 bg-white">
      <button className="bg-red-500 px-4 py-1 rounded-full" onClick={()=> setColor("red")}>Red</button>
      <button onClick={()=> setColor("green")}>Green</button>
      <button onClick={()=> setColor("blue")}>Blue</button>
      <button onClick={()=> setColor("olive")}>Olive</button>
      <button onClick={()=> setColor("Gray")}>Gray</button>
      <button onClick={()=> setColor("yellow")}>Yellow</button>
      <button onClick={()=> setColor("pink")}>Pink</button>
      <button onClick={()=> setColor("purple")}>Purple</button>
      <button onClick={()=> setColor("lavender")}>Lavender</button>
      <button onClick={()=> setColor("orange")}>Orange</button>
      <button onClick={()=> setColor("black")}>Black</button>
      </div>
    </div>
  );
}

export default App;
