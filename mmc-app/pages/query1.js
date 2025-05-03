import { useState } from "react";
import { Navbar } from "./index.js";

/* Find the salespeople who bought cars that had retail prices over an amount on a specific date. (example, 40,000 on the 4th of April 2023) */

export default function query1() {
  const [date, setDate] = useState(""); //get date from user
  const [price, setPrice] = useState(500); // get price (default five hunned)
  const [results, setResults] = useState([]); //stors results from API
  const [error, setError] = useState(""); //self explanatory
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!date || !price) {
      //make sure user inputs both
      setError("Missing input!");
      return;
    }
    // the dates in our database all have this time
    const formatDate = `${date} 00:00:00`;
    setError("");
    try {
        setSubmitted(true); // say that the user submitted
      //this line builds a url with query parameters
      // it will look like GET /api/sales/by-price?price=40000&date=2023-04-04
      const res = await fetch( 
        `/api/sales/by-price?price=${price}&date=${encodeURIComponent(formatDate)}` //need to use encodeURI becuz url bars can have spaces
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
          Chose date to find the salespeople who bought cars that had retail
          prices larger than entered number.
        </h1>
        {/* when user picks date update date:  */}
        <input
          className="m-20 text-slate-600 font-bold"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <input
          className="text-slate-600 font-bold border-2 border-slate-600 border-solid text-center"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}

        ></input>
        <button
          onClick={handleSubmit}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4 cursor-pointer"
        >
          Run
        </button>
        {/* fetch from error and display*/}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {submitted && results.length === 0 && !error && (
            <p className="text-slate-500 font-bold mt-2">No Results.</p>
        )}
        {results.length > 0 && (
          <div className="mt-8 w-full max-w-3xl overflow-hidden rounded-lg">
            <table className="w-full">
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
    </>
  );
}
