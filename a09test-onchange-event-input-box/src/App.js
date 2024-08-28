import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          placeholder="Enter User Name"
          name="username"
          id="userId"
          value="Sachin Singh"
          readOnly
        />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Code Step by Step</p>
      </header>
    </div>
  );
}

export default App;
