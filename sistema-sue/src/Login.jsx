import React from "react";
import "./App.css";

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" placeholder="Insira seu email" />
        </div>
        <div className="input-group">
          <label>Senha:</label>
          <input type="password" placeholder="Insira sua senha" />
        </div>
        <button className="submit-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
