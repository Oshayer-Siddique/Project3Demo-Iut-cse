// frontend/src/App.js
import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import "../newstyle.css";

const LoginForm = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { username, password };

    axios.post('http://localhost:5050/iut-cse/admin/login', formData)
      .then((response) => {
        console.log(response);
        console.log("OK");
        navigate(`/admin/profile/${username}`);
        
        // Optionally, display a success message or reset the form here
      })
      .catch((error) => {
        console.error('Error saving information:', error);
        // Optionally, display an error message or handle errors here
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input type="text" name="name" value={username} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Login</button><br/>
        <Link to="/admin/register">Don't have an account?</Link>
      </form>
    </div>
  );
};

export default LoginForm;
