// frontend/src/App.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


const InterRegistrationForm = () => {
  const [name, setName] = useState('');
  const [university, setUni] = useState('');
  const [session, setSession] = useState('');
  const [email, setEmail] = useState('');
  const [teamname, setTeam] = useState('');
  const [category, setCategory] = useState('');
  const [teamsize, setTeamsize] = useState(0);
  const [successful, setSuccess] = useState(false);
  const [errorMessage, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { name, university, session, email, teamname, category, teamsize };
    setError('Please wait')

    axios.post('http://localhost:5050/iut-cse/interreg', formData)
      .then((response) => {
        console.log(response.data);
        setSuccess(true);
        // Optionally, display a success message or reset the form here
      })
      .catch((error) => {
        console.error('Error saving information:', error);
        if(error.response)
          setError(error.response.data.error);
        else
          setError('Could not connect to server')
        // Optionally, display an error message or handle errors here
      });
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>

        <div className="input-container">
          <label>Name </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>

        <div className="input-container">
          <label>University </label>
          <input type="text" value={university} onChange={(e) => setUni(e.target.value)} required/>
        </div>

        <div className="input-container">
          <label>Session </label>
          <input type="text" value={session} onChange={(e) => setSession(e.target.value)} required/>
        </div>

        <div className="input-container">
          <label>Email </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        <div className="input-container">
          <label>Team Name </label>
          <input type="text" value={teamname} onChange={(e) => setTeam(e.target.value)} required/>
        </div>

        <div className="input-container">
          <label>Category </label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required/>
        </div>

        <div className="input-container">
          <label>Team Size </label>
          <input type="number" value={teamsize} onChange={(e) => setTeamsize(e.target.value)} required/>
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  if(!successful) return (
    <div className="app">   
      <div className="login-form">
          <div className="title">Register Now!</div>
          {renderForm}
          <span className='error'>{errorMessage}</span><br/>
          <Link to="/admin/login">Go Back</Link>
      </div>
    </div>
  );
  else return (
    <div className="app">
      <div className="login-form">
        <div className="title">Registration Successful!</div>
        <Link to="/admin/login">Go Back</Link>
    </div>
  </div>
  );

};

export default InterRegistrationForm;
