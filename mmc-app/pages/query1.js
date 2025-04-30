import {Navbar} from "./index.js";

export default function query1(){

    return(
        <>
        <Navbar />

        <div className="flex flex-col items-center justify-center w-full mt-16">
        <h1 className="text-lg text-slate-600 font-bold text-center m-4">Chose date to find the salespeople who bought cars that had retail prices larger than entered number.</h1>
        <input className="m-20" type="date"></input>
        </div>

        </>
    )
}
