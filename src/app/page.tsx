"use client"
import React from 'react';
import { useState } from "react";
import bilal, { Test } from "../../component/Test"
import Test2 from "../../component/Test2";
import Props from "../../component/Props";
import Image from "next/image";
import GlobalVer from "../app/config"


  //export let scor1: number = 0; // global variable
//   const setGlobalVariable = (value:number) => {
//   //scor1 = value;
//   return(value)
// };

export default function Home() {

  const [show,setshow]= useState(true)
  const [luck, setluck]= useState("Color")
  const [clickcount, setclickcount]= useState(5)
  const [pl1, setpl1]=useState(0)
  const [sc1, setscor1]=useState(0)

  const changeCounter=()=>{
    setclickcount(clickcount-1)
    setpl1(pl1)
     }

  return (
    <div className="p-4b">
       <h1 className="text-[18px] sm:text-[22px] mb-2 bg-slate-400 pl-2">Game: View your luck! on click.</h1>

       { 
          show ? <div id="text-2"> <Test2/> </div> : <div id="text-1"><Test/></div>
       }

       <button 
         onClick={() => { setshow(!show); setclickcount(5); setscor1(0); { GlobalVer.scor = 0 } }} 
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-e-full ml-2">
         On-Off
       </button>

       <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
         <button onClick={() => { setluck("Blue"); changeCounter(); }} 
           className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Blue
         </button>

         <button onClick={() => { setluck("Green"); changeCounter(); }} 
           className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Green
         </button>

         <button onClick={() => { setluck("Cyan"); changeCounter(); }} 
           className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Cyan
         </button>

         <button onClick={() => setluck("Teal")} 
           className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Teal
         </button>

         <button onClick={() => setluck("Lime")} 
           className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Lime
         </button>

         <button onClick={() => setluck("Red")} 
           className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Red
         </button>

         <button onClick={() => setluck("Pink")} 
           className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Pink
         </button>

         <button onClick={() => setluck("Purple")} 
           className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Purple
         </button>

         <button onClick={() => setluck("Brown")} 
           className="text-white bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-brown-300 dark:focus:ring-brown-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Brown
         </button>

         <button onClick={() => setluck("Yellow")} 
           className="text-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           Yellow
         </button>

         <button onClick={() => setluck("White")} 
           className="text-white bg-gradient-to-r from-black via-black-50 to-black-50 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-black-500 dark:focus:ring-black-400 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center">
           White
         </button>

         <button onClick={() => setluck("End")} 
           className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           End
         </button>
       </div>

       <br/>

       <Props cname={luck} onoff={show} clickno={clickcount} plary1={pl1} scor1={sc1} />

       <div>
         {/* Image elements can go here */}
       </div> 
    </div>

  );
}

