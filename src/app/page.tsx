"use client"
import React from 'react';
import { useState } from "react";
import bilal, { Test } from "../../component/Test"
import Test2 from "../../component/Test2";
import Props from "../../component/Props";
import Image from "next/image";


  //export let scor1: number = 0; // global variable
  export const setGlobalVariable = (value:number) => {
  //scor1 = value;
  return(value)
};

export default function Home() {

  const [show,setshow]= useState(true)
  const [luck, setluck]= useState("Color")
  const [clickcount, setclickcount]= useState(5)
  const [pl1, setpl1]=useState(0)
  

  const changeCounter=()=>{
    setclickcount(clickcount-1)
    setpl1(pl1)
     }

  return (
    <div>
       <h1 className="text-[22px] mb-2 bg-slate-400 pl-2">Game: View your luck! on click.</h1>

       { 
          show ? <div id="text-2">   <Test2/> </div> : <div id="text-1"><Test/></div>
       }
       
       {/* <br/> */}
       <hr></hr><br />
       <button onClick={()=>{setshow(!show);setclickcount(5);setpl1(0);setGlobalVariable(0) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
 On-Off </button>
 <div className="inline-block">
 <button onClick={()=>{setluck("Blue") ;changeCounter(); }} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Blue</button>
<button onClick={()=>{setluck("Green");changeCounter(); } } type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Green</button>
<button onClick={()=>{setluck("Cyan");changeCounter()}} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cyan</button>
<button onClick={()=>setluck("Teal")} type="button"className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Teal</button>
<button onClick={()=>setluck("Lime")} type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Lime</button>
<button onClick={()=>setluck("Red")} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red</button>
<button onClick={()=>setluck("Pink")} type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink</button>
<button onClick={()=>setluck("Purple")} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple</button>
<button onClick={()=>setluck("Brown")} type="button" className="text-white bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-brown-300 dark:focus:ring-brown-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Brown</button>  
<button onClick={()=>setluck("Yellow")} type="button" className="text-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Yellow</button> 
<button onClick={()=>setluck("White")} type="button" className="text-white bg-gradient-to-r from-black via-black-50 to-black-50 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-black-500 dark:focus:ring-black-400 shadow-lg shadow-black-400/50 dark:shadow-lg dark:shadow-black-400/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">White</button> 
<button onClick={()=>setluck("End")} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> End</button>
</div>
<br /><hr></hr><br/>

  <Props cname={luck} onoff={show} clickno={clickcount} plary1={pl1} />
 <div> 
  {/* <Image src={blue1} alt="Sole" className="w-[350px] h-[300px] ml-5 rounded-2xl"/> */}
  {/* <Image src={require("../../dataimage/Aswah.jpeg")} alt="Tubwell" className="w-[200px] h-[300px] ml-5 rounded-2xl"/> */}
    </div> 
   </div>
  );
}
