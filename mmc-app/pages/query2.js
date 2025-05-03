import { useState } from "react";
import { Navbar } from "./index.js";

/* Find the most expensive car or least expensive car bought on any given date and the salesperson who bought it. */

export default function query2() {
   // const [type, setType] = useState("max");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [error, setError] = useState(""); //self explanatory
    const [submitted, setSubmitted] = useState(false);
    const [results, setResults] = useState([]); //stores results from API


    const handleSubmit = async (sortType) =>{ //passed in the type directly since handlesubmit is asynchronus meaning it runs before i can update type
        if (!date) {
            //make sure user inputs date
            setError("Missing date!");
            return;
          }

          const formatDate = `${date} 00:00:00`;
          setError("");
          try {
              setSubmitted(true); // say that the user submitted
            //this line builds a url with query parameters
            // need to handle if user wants to sort by most or least
            const res = await fetch( 
              `/api/sales/most-least?type=${sortType}&date=${encodeURIComponent(formatDate)}` //need to use encodeURI becuz url bars can have spaces
            );
            const data = await res.json(); //wait for response
            setResults(data);
            
          } catch (err) {
            setError("Something messed up!");
            
          }
        };   
    
    
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

        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex">
        <button                 //DESC allows me to get only highest price car
          onClick={()=>{handleSubmit("DESC");}}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4 cursor-pointer"
        >
          Most
        </button>
        <button
          onClick={()=>{handleSubmit("ASC");}}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4 cursor-pointer"
        >
          Least
        </button>
        </div>
        {/* you know the deal, gotta display that error */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {submitted && results.length === 0 && !error && (
            <p className="text-slate-500 font-bold mt-2">No Results.</p>
        )}
        {results.length > 0 && (
          <div className="mt-8 w-full overflow-hidden rounded-lg max-w-3xl">
            <table className="w-full border">
              <thead className="bg-slate-500">
                <tr>
                  <th className="border text-white px-2 py-1">Salesperson</th>
                  <th className="border text-white px-2 py-1">Car</th>
                  <th className="border text-white px-2 py-1">Retail</th>
                  <th className="border text-white px-2 py-1">Buy Date</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{r.fname} {r.lname}</td>
                    <td className="border px-2 py-1">{r.make} {r.model}</td>
                    <td className="border px-2 py-1">${r.retail.toLocaleString()}</td>
                    <td className="border px-2 py-1">{new Date(r.buy_date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
