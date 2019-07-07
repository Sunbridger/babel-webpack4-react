/**
 * 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
 */
import React, { useState } from 'react';
export default function Hook() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {
          todos.map(el => {
              return (
                  <div>{el.text}</div>
              )
          })
      }
      <button onClick={() => {
          const newarr = [...todos];
          newarr.push({
            text:'Wang ei qiao'
          })
          setTodos(newarr);
      }}>add Count</button>
    </div>
  );
}