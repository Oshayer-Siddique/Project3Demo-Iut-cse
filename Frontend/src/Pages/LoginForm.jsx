// frontend/src/App.js
import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import "../newstyle.css";

const LoginForm = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { username, password };
    setName('')
    setPassword('')
    setError('Please Wait');

    axios.post('http://localhost:5050/iut-cse/admin/login', formData)
      .then((response) => {
        console.log(response);
        console.log("OK");
        navigate(`/admin/profile/${username}`);
        
        // Optionally, display a success message or reset the form here
      })
      .catch((error) => {
        console.error('Error saving information:', error);
        if(error.response)
          setError("Incorrect username or password");
        else
          setError('Could not connect to server');
        setName(formData.username)
        setPassword(formData.password)
        // Optionally, display an error message or handle errors here
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} aria-disabled>
        <div>
          <label htmlFor='name'>Name: </label><br/>
          <input type="text" name="name" value={username} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor='password'>Password: </label><br/>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <br/>
        <button type="submit">Login</button><br/>
      </form>
      <span className='error'>{errorMessage}</span><br/>
      <Link to="/admin/register">Don't have an account?</Link>
    </div>
  );
};

export default LoginForm;
