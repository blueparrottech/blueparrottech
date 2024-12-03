"use client"
import React, { useReducer } from 'react';

// Reducer function as provided
const reducer = (state: string, action: { type?: string, event?: string } | string): string => {
  if (typeof action === 'string' && action === 'orange') return 'banana';
  if (typeof action === 'object' && action.event === 'orange') return 'banana';
  if (typeof action === 'object' && action.type === 'apple' && state === 'apple') return 'apple';
  return 'orange';
};

const ReducerPage: React.FC = () => {
  // Initialize state with 'orange'
  const [state, dispatch] = useReducer(reducer, 'apple');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Reducer State Demonstration</h1>
        <div className="mb-4">
          <p className="text-xl font-semibold">Current State: 
            <span className="ml-2 text-blue-600">{state}</span>
          </p>
        </div>
        <div className="space-x-4">
          <button 
            onClick={() => dispatch('orange')} 
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Dispatch 'orange'
          </button>



          <button 
            onClick={() => dispatch({ type: 'apple' })} 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Dispatch Apple
          </button>


          <button 
            onClick={() => dispatch( undefined)} 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Dispatch " "
          </button>


          <button 
            onClick={() => dispatch({ event: 'orange' })} 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Dispatch event: 'orange
          </button>










        </div>
      </div>
    </div>
  );
};

export default ReducerPage;