import React, { useReducer } from 'react';
const reducer = (state,action) => {
  switch(action.type){
    case 'increment':
      return { count:state.count+1 };
    case 'decreme':
      return { count:state.count-1 };
    default:
      return state;
  }
};
const initState = {count:0};
export default function Hook() {
  const [ state,dispatch ] = useReducer(reducer,initState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decreme'})}>-</button>
    </>
  );
}