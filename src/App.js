import './App.css';
import { UseDeferredValueTest } from './tests'
import {list} from './mock/index';

function App() {
  return (
    <div className="App">
      <UseDeferredValueTest names={list} />
    </div>
  );
}

export default App;
