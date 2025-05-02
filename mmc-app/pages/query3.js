import { useState } from "react";
import { Navbar } from "./index.js";

/* Given a VIN number, find the salesperson, the wholesale price, and the sellers name.  Include the date of the transaction */

export default function query2() {
  // const [type, setType] = useState("max");
  const [vin, setVin] = useState("");
  const [error, setError] = useState(""); //self explanatory
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]); //stores results from API

  const handleSubmit = async (sortType) => {
    //passed in the type directly since handlesubmit is asynchronus meaning it runs before i can update type
    if (!vin) {
      //make sure user inputs date
      setError("Missing date!");
      return;
    }
    setError("");
    try {
      setSubmitted(true); // say that the user submitted
      //this line builds a url with query parameters
      // need to handle if user wants to sort by most or least
      const res = await fetch(`/api/sales/by-vin?vin=${vin}`);
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
        

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex">
            <input
              className="text-slate-600 font-bold border-2 border-slate-600 border-solid text-center"
              type="text"
              maxLength={17} //no vins should be more or less that this
              value={vin}
              onChange={(e) => setVin(e.target.value)}
            ></input>
            <button
              onClick={handleSubmit}
              className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4 cursor-pointer"
            >
              Run
            </button>
          </div>
          {/* you know the deal, gotta display that error */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {submitted && results.length === 0 && !error && (
            <p className="text-slate-500 font-bold mt-2">No Results.</p>
          )}
          {results.length > 0 && (
            <div className="mt-8 w-full max-w-3xl">
              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">Salesperson</th>
                    <th className="border px-2 py-1">Seller</th>
                    <th className="border px-2 py-1">Buy Price</th>
                    <th className="border px-2 py-1">Buy Date</th>
                    <th className="border px-2 py-1">VIN</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={i}>
                      <td className="border px-2 py-1">
                        {r.fname} {r.lname}
                      </td>
                      <td className="border px-2 py-1">
                        {r["p.fname"]} {r["p.lname"]}
                      </td>
                      <td className="border px-2 py-1">
                        ${r.buy_price.toLocaleString()}
                      </td>
                      <td className="border px-2 py-1">
                        {new Date(r.buy_date).toLocaleDateString()}
                      </td>
                      <td className="border px-2 py-1">{r.vin}</td>
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
