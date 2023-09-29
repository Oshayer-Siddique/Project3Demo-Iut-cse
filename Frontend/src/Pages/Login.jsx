import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "/src/assets/css/Login.css"


const Login = () => {
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
        if (error.response)
          setError("Incorrect username or password");
        else
          setError('Could not connect to server');
        setName(formData.username)
        setPassword(formData.password)
        // Optionally, display an error message or handle errors here
      });
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-heading">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">Login</button>
          <p className="register-link">
            Don't have an account? <Link to="/admin/register">Create one</Link>
          </p>
        </form>
      </div>
    </div>
  );
  return (

    <main>
      <div className="container">

        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="../src/assets/img/IUTCS.png" alt="" />

                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username & password to login</p>
                    </div>
                    <form onSubmit={handleSubmit} aria-disabled>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="name" value={username} onChange={(e) => setName(e.target.value)} required />
                          <div className="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Don't have an account? <a href="/admin/register">Create an account</a></p>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </main>

  );
};

export default Login;