import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter.js";
import Counters from './components/Counters.js';

function App() {
  return (
    // u Reactu se pise className, umjesto class
    <div className='mojaKlasa'>
      {/* Iza viticastih zagrada 2 + 2 = {2 + 2} */}
      {/* <Counter /> */}
      <Counters />
    </div>
  );
}

export default App;
