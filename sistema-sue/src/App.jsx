import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app">
      {showLogin ? <Login /> : <Register />}
      <button className="toggle-btn" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Cadastre-se" : "Ir para Login"}
      </button>
    </div>
  );
}

export default App;
