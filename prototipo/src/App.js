
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon">
          <i className="user-icon"></i>
        </div>
        <form>
          <input type="email" placeholder="Email ID" required />
          <input type="password" placeholder="Password" required />
          <div className="options">
            <label>
              <input type="checkbox" /> Lembrar Senha
            </label>
            <a href="/">Esqueci a Senha?</a>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default App;
