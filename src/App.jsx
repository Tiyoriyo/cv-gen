import './App.css';
import React from 'react';

function App() {
  return (
    <div className="h-full font-base">
      <div className="relative flex flex-col gap-24 h-full w-3/5 m-auto justify-center items-center border-x-0">
        <h1 className="font-swiggly text-[#C1124C] text-7xl">Curriculum Vitae</h1>
        <img src="liftingpanda.png" className="h-1/3" alt="" />
        <button className="bg-[#0195F0] pt-2 pb-5 px-8 text-4xl text-white rounded-xl drop-shadow-lg hover:drop-shadow-none">
          <p className="drop-shadow-lg">generate</p>
        </button>
        <div className="absolute pb-1 w-full h-1/6 -z-10 bottom-0 bg-gradient-to-t from-[#0195F0] from-10% drop-shadow-2xl" />
      </div>
    </div>
  );
}

export default App;
