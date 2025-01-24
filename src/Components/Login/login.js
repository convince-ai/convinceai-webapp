import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import principalImg from '../../assets/login.png';
import logoImg from '../../assets/logosvg.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(email);
      console.log(password);
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      const { token } = response.data;

      localStorage.setItem('jwt', token);  
      navigate('/dashboard');
    } catch (error) {
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>RECUPERE CARRINHOS<br />CONQUISTE VENDAS</h1>
        <img
          src={principalImg}
          alt="Robo entregando compras para mulher"
          className="login-image"
        />
      </div>
      <div className="login-right">
        <div className="login-form">
          <img src={logoImg} alt="Logo Convince AI" className="logo" />
          <h2>Bem vindo de volta!</h2>
          <p>Entre com sua conta</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>E-mail:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite aqui seu e-mail..."
                required
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>
            <div className="forgot-password">
              <a href="#forgot">Esqueceu sua senha?</a>
            </div>
            <button type="submit" className="btn-login">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
