import logo from "./logo.svg";
import "./App.css";
import Component1 from "./component/component1";
import Hello from "./component/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>react oss class 20241028</p>
        <Hello />
        <Component1 />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
