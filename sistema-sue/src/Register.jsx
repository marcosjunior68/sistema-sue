import React from "react";
import "./App.css";

function Register() {
  return (
    <div className="register-container">
      <h2>Cadastre-se</h2>
      <form>
        <div className="input-group">
          <label>Nome de Usuário:</label>
          <input type="text" placeholder="Insira seu nome de usuário" />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" placeholder="Insira seu email" />
        </div>
        <div className="input-group">
          <label>Senha:</label>
          <input type="password" placeholder="Insira sua senha" />
        </div>
        <button className="submit-btn" type="submit">Cadastre-se</button>
      </form>
    </div>
  );
}

export default Register;
