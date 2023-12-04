import React, { useState } from 'react';
import { useAuth } from '../MiComponent/AuthContext';
import { authenticateUser } from '../MiComponent/authServer';
import './style.css';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Por favor, ingresa un nombre de usuario y una contraseña.');
      return;
    }

    const user = authenticateUser(username, password);

    if (user) {
      login(user);
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <label className="label-log">Username:</label>
      <input className="input-log" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label className="label-log">Password:</label>
      <input className="input-log" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="button-log" onClick={handleLogin}>
        Iniciar Sesion
      </button>
    </div>
  );
};

export default Login;