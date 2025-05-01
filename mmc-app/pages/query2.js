import { useState } from "react";
import { Navbar } from "./index.js";

export default function query2() {
   // const [type, setType] = useState("max");
    const [date, SetDate] = useState("");
    const [type, SetType] = useState("");


    const handleSubmit = async () =>{
        
    }
    
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full mt-16">
        <h1 className="text-lg text-slate-600 font-bold text-center m-4">
          Find the most expensive car or least expensive car bought on any given
          date and the salesperson who bought it.
        </h1>
        <input
          className="mt-20 text-slate-600 font-bold"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>

        <div className="flex items-center justify-center w-full">
        <button
          onClick={()=>{setType("most"); handleSubmit();}}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4 cursor-pointer"
        >
          Most
        </button>
        <button
          nClick={()=>{setType("least"); handleSubmit();}}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4 cursor-pointer"
        >
          Least
        </button>
        </div>
      </div>
    </>
  );
}
