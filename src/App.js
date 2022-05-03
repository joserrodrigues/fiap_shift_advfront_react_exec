import logo from './logo.svg';
import './App.css';


function App() {

  let randInfo = Math.round(Math.random()*1000);
  return (
    <div className="App">
      <p>
        Hello World - Rand {randInfo} !!!
      </p>
    </div>
  );
}

export default App;