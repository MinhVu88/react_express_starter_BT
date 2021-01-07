import React from "react";
import logo from "./logo1.jpg";
import "./App.css";
import Customers from "./components/Customers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Customers />
      </header>
    </div>
  );
}

export default App;
