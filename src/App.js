import logo from "./logo.svg";
import "./App.css";
import Component1 from "./component/component1";
import Hello from "./component/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://dkrehd0519.github.io/ll-test/image/me.jpg" alt="" width={"400px"} height={"400px"}></img>
        <Hello />
        <Component1 />
      </header>
    </div>
  );
}

export default App;
