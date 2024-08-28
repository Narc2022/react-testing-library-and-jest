import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Test OnChange Event with Input Text</h1>
      <input
        type="text"
        placeholder="Enter User Name"
        name="username"
        id="userId"
        value="Sachin Singh"
        readOnly
      />
      <p>Code Step by Step</p>
    </div>
  );
}

export default App;
