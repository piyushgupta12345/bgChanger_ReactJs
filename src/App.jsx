import { useState } from "react";
import "./App.css";

function App() {
  const[color, setColor] = useState("#000")
  
  return (
    <div className="w-full h-screen flex justify-center items-end" style={{backgroundColor:color}}>
      <div className="w-1/2 h-16 rounded-full flex mb-28 justify-center items-center gap-2 bg-white">
      <button className="bg-red-500 px-4 py-1 rounded-full" onClick={()=> setColor("red")}>Red</button>
      <button className="bg-green-500 px-4 py-1 rounded-full" onClick={()=> setColor("green")}>Green</button>
      <button className="bg-blue-500 px-4 py-1 rounded-full" onClick={()=> setColor("blue")}>Blue</button>
      <button className="bg-gray-500 px-4 py-1 rounded-full" onClick={()=> setColor("gray")}>Gray</button>
      <button className="bg-yellow-500 px-4 py-1 rounded-full" onClick={()=> setColor("yellow")}>Yellow</button>
      <button className="bg-pink-500 px-4 py-1 rounded-full" onClick={()=> setColor("pink")}>Pink</button>
      <button className="bg-purple-500 px-4 py-1 rounded-full" onClick={()=> setColor("purple")}>Purple</button>
      <button className="bg-lavender-500 px-4 py-1 rounded-full" onClick={()=> setColor("lavender")}>Lavender</button>
      <button className="bg-orange-500 px-4 py-1 rounded-full" onClick={()=> setColor("orange")}>Orange</button>
      </div>
    </div>
  );
}

export default App;
