import { useRouter } from "next/router";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <h1 className="text-lg text-slate-600 font-bold text-center mb-8">
        Select Query
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <button
          onClick={() => router.push("/query1")}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4"
        >
          Find sales by price and date
        </button>
        <button
          onClick={() => router.push("/query2")}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4"
        >
          Most or least expensive sale on a date
        </button>
        <button
          onClick={() => router.push("/query3")}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full m-4"
        >
          VIN Search
        </button>
      </div>
    </div>
  );
}
export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">
          <Link href="/">CarsDB</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
