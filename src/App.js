import './App.css';
import { UseDeferredValueTest } from './tests'
import {list} from './mock/index';
import { useEffect, useState } from 'react';

function App() {
  const [a, setA] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(a)
    }, 10000)
   }, [a]);
  return (
    <div className="App">
      <button onClick={() => {setA(a+1)}}>点击</button>
      {/* <UseDeferredValueTest names={list} /> */}
    </div>
  );
}

export default App;
