import logo from './logo.svg';
import './App.css';

function App() {
  const [constructorHasRun, setConstructorHasRun]
  
  const constructor = () => {
    if (constructorHasRun) return;
    console.log("Inline constructor()");
    setConstructorHasRun(true);
  }
  constructor()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
