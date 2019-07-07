/**
 * 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
 */
import React, { useEffect ,useState} from 'react';
export default function Hook() {
  const [ count,setCount ] = useState(0);
  useEffect(() => {
    document.title = count;
  });
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>add</button>
    </div>
  );
}