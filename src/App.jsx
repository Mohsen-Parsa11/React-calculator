import React, { useState } from "react";
import "./index.css";

function App() {

    const [calc, setCalc]= useState("");
    const [result, setResult]= useState("");
    const ops= ['/','*','-','+','.'];

    const handleUpdate= value=>{
      if(
        ops.includes(value) && calc==="" ||
        ops.includes(value) && ops.includes(calc.slice(-1))
      ){
        return;
      }
      setCalc(calc + value)
      if(!ops.includes(value)){
         setResult(eval(calc + value).toString())
      }
    }

   const calculate= ()=>{
    setCalc(eval(calc).toString())
   }

   const handleDelete= ()=>{
      if(calc == ""){
        return;
      }
      const value= calc.slice(0, -1);
      setCalc(value);  
      setResult(value)
   }

   const handleDeleteAll=()=>{
      if(calc==""){
        return;
      }

      setCalc("")
      setResult("")
   }

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="calculator rounded-3xl w-75 md:w-96 h-80 flex justify-center">
        <div className="rounded-2xl py-8 overflow-hidden">
          <div className="display text-white flex flex-row-reverse mr-5">
            {calc || 0} <span className="pr-2 text-gray-300 text-sm ">{result? <span>({result})</span>:""}</span>
          </div>
          <div className="flex md:px-5 mt-4 calcs rounded w-full text-white">
          <button onClick={()=>handleDeleteAll()} className="px-4 md:px-6 hover:bg-pink-700 py-2 cursor-pointer active:scale-95">
              C
            </button>
            <button onClick={()=>handleUpdate('/')} className="px-4 md:px-6 hover:bg-pink-700 py-2 cursor-pointer active:scale-95">
              /
            </button>
            <button onClick={()=>handleUpdate('*')} className="px-4 md:px-6 hover:bg-pink-700 py-2 cursor-pointer active:scale-95">
              *
            </button>
            <button onClick={()=>handleUpdate('-')} className="px-6 hover:bg-pink-700 py-2 cursor-pointer active:scale-95">
              -
            </button>
            <button onClick={()=>handleUpdate('+')} className="px-6 hover:bg-pink-700 py-2 cursor-pointer active:scale-95">
              +
            </button>
            <button onClick={()=>handleDelete()} className="px-5 hover:bg-pink-700 py-2 cursor-pointer active:scale-95">
              DEL{" "}
            </button>
          </div>
          <div className="grid grid-cols-3 space-x-20 text-white pt-4">
            <button onClick={()=>handleUpdate('1')} className="mx-auto px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              1{" "}
            </button>
            <button onClick={()=>handleUpdate('2')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              2{" "}
            </button>
            <button onClick={()=>handleUpdate('3')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              3{" "}
            </button>
            <button onClick={()=>handleUpdate('4')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              4{" "}
            </button>
            <button onClick={()=>handleUpdate('5')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              5{" "}
            </button>
            <button onClick={()=>handleUpdate('6')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              6{" "}
            </button>
            <button onClick={()=>handleUpdate('7')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              7{" "}
            </button>
            <button onClick={()=>handleUpdate('8')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              8{" "}
            </button>
            <button onClick={()=>handleUpdate('9')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              9{" "}
            </button>
            <button onClick={()=>handleUpdate('0')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              0
            </button>
            <button onClick={()=>handleUpdate('.')} className="mx-auto  px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              .
            </button>
            <button onClick={()=>calculate()} className="mx-auto px-10 py-2 hover:bg-slate-800 cursor-pointer active:scale-95">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
