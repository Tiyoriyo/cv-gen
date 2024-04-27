import './App.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const colours = ['from-[#bee8ff]', 'from-[#ff9090]'];
  const flexStyle = ['justify-center', null];

  return (
    <div className="h-full font-base">
      <div className={`relative flex flex-col gap-24 h-full w-3/5 m-auto ${flexStyle[state]} items-center border-x-0`}>
        {state === 0 && (
          <>
            <h1 className="font-swiggly text-[#C1124C] text-7xl drop-shadow-lg">Curriculum Vitae</h1>
            <img src="liftingpanda.png" className="h-1/3 drop-shadow-lg" alt="" />
            <button
              className="bg-[#0195F0] pt-2 pb-5 px-8 text-4xl text-white rounded-xl drop-shadow-lg hover:drop-shadow-none"
              type="button"
              onClick={() => { setState(1); }}
            >
              <p className="drop-shadow-lg">generate</p>
            </button>
          </>
        )}
        {state === 1 && (
          <div className="flex flex-col w-full gap-8 mt-24">
            <div className="w-full flex  border-x">
              <div className="flex flex-col w-3/4 border h-max drop-shadow-lg">
                <div className="flex flex-auto items-center pl-12 min-h-20 bg-red-500">
                  <h1 className="text-white text-4xl font-bold tracking-widest">Personal Details</h1>
                </div>
                <div className="flex flex-auto p-8">
                  <button className="w-24 h-12 bg-red-300 text-xl text-white font-bold" type="button">Add</button>
                </div>
              </div>
            </div>
            <div className="w-full flex justify border-x">
              <div className="flex flex-col w-3/4 border h-max drop-shadow-lg">
                <div className="flex flex-auto items-center pl-12 min-h-20 bg-red-500">
                  <h1 className="text-white text-4xl font-bold tracking-widest">Personal Details</h1>
                </div>
                <div className="flex flex-auto p-8">
                  <button className="w-24 h-12 bg-red-300 text-xl text-white font-bold" type="button">Add</button>
                </div>
              </div>
            </div>
            <div className="w-full flex justify border-x">
              <div className="flex flex-col w-3/4 border h-max drop-shadow-lg">
                <div className="flex flex-auto items-center pl-12 min-h-20 bg-red-500">
                  <h1 className="text-white text-4xl font-bold tracking-widest">Personal Details</h1>
                </div>
                <div className="flex flex-auto p-8">
                  <button className="w-24 h-12 bg-red-300 text-xl text-white font-bold" type="button">Add</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={`absolute pb-1 w-full h-1/6 -z-10 bottom-0 bg-gradient-to-t ${colours[state]} from-10% drop-shadow-2xl`} />
      </div>
    </div>
  );
}

export default App;
