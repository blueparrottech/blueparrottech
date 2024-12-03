import { useReducer, useState } from 'react';

const reducer = (state, action) => {
  if (action.event === 'orange' || action === 'orange') 
      return 'banana';
  if (action.type === 'apple' && state === 'apple') 
      return 'apple';
  return 'orange';
};

export default function ReducerTest() {
  const [state, dispatch] = useReducer(reducer, 'apple'); // Initial state is 'apple'
  const [action, setAction] = useState(''); // User input for action

  const handleDispatch = () => {
    let parsedAction;
    try {
      // Parse the action input as JSON
      parsedAction = action.startsWith('{') ? JSON.parse(action) : action;
    } catch (error) {
      alert('Invalid action format! Use JSON format or a string.');
      return;
    }
    dispatch(parsedAction);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Reducer Test Page</h1>
      <h2>Current State: {state}</h2>
      
      <div>
        <label>
          Enter Action: 
          <input
            type="text"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            placeholder="e.g., {\"type\":\"apple\"} or 'orange'"
            style={{ margin: '0 10px', padding: '5px', width: '300px' }}
          />
        </label>
        <button onClick={handleDispatch} style={{ padding: '5px 10px', cursor: 'pointer' }}>
          Dispatch Action
        </button>
      </div>
      
      <h3>Instructions:</h3>
      <ul>
        <li>To pass an object action, use JSON format like <code>{"{\"type\": \"apple\"}"}</code>.</li>
        <li>To pass a string action, just enter it like <code>'orange'</code>.</li>
      </ul>
      
      <h3>Reducer Logic:</h3>
      <pre>
        {`
const reducer = (state, action) => {
  if (action.event === 'orange' || action === 'orange') 
      return 'banana';
  if (action.type === 'apple' && state === 'apple') 
      return 'apple';
  return 'orange';
};
        `}
      </pre>
    </div>
  );
}
