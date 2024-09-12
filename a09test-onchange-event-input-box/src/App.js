import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState();
  return (
    <div className="App">
      <h1>Test OnChange Event with Input Text</h1>
      <input
        type="text"
        onChange={(e) => setData(e.target.value + "test")}
        // placeholder="Enter User Name"
        // name="username"
        // id="userId"
        value={data}
        // readOnly
      />
      <p>Code Step by Step</p>
    </div>
  );
}

export default App;
