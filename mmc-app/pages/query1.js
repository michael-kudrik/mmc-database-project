import {useState} from "react";
import {Navbar} from "./index.js";

export default function query1(){
    const [date, setDate] = useState(""); //get date from user
    const [price, setPrice] = useState(500); // get price (default five hunned)
    const [results, setResults] = useState([]); //stors results from API
    const [error, setError] = useState(""); //self explanatory




    return(
        <>
        <Navbar />

        <div className="flex flex-col items-center justify-center w-full mt-16">
        <h1 className="text-lg text-slate-600 font-bold text-center m-4">Chose date to find the salespeople who bought cars that had retail prices larger than entered number.</h1>
        <input className="m-20 text-slate-600 font-bold" type="date"></input>
        <input className="text-slate-600 font-bold border-2 border-slate-600 border-solid text-center" type="number" value="500"></input>
        <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4 cursor-pointer">
        Run
        </button>
        </div>

        </>
    )
}
