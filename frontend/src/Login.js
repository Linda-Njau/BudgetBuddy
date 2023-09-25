import React, { useState } from 'react';
import { postData } from './httpService';
import './Login.css';
import './FormStyles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { username, password };
            const response = await postData('/login', payload);
            localStorage.setItem('access_token', response.access_token);
        } catch (error) {
            console.error('Login Failed:', error);
        }
    };
    return (
      <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <label className="form-label">
          Username:
          <input 
            className="form-input"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="form-label">
          Password:
          <input 
            className="form-input"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="form-button" type="submit">Login</button>
      </form>
    </div>    
    );
  };
  
export default Login;
