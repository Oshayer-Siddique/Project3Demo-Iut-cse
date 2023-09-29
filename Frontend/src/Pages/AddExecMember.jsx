// frontend/src/App.js
import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

const AddExecMember = () => {
  const [name, setMemberName] = useState('');
  const [post, setPost] = useState('');
  const [contact, setContact] = useState('');
  const [errorMessage, setError] = useState('');
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { name, post, contact };
    setMemberName('')
    setPost('')
    setContact('')
    setError('Please Wait');

    axios.post('http://localhost:5050/iut-cse/admin/addmember', formData)
      .then((response) => {
        console.log(response);
        console.log("OK");
        setError("Success!")
        // Optionally, display a success message or reset the form here
      })
      .catch((error) => {
        console.error('Error saving information:', error);
        if(error.response)
          setError("Incorrect username or password");
        else
          setError('Could not connect to server');
        setMemberName(formData.name)
        setPost(formData.post)
        setContact(formData.contact)
        // Optionally, display an error message or handle errors here
      });
  };

  return (
    <div>
      <h1>Create Executive Member</h1>
      <form onSubmit={handleSubmit} aria-disabled>
        <div>
          <label htmlFor='name'>Name: </label><br/>
          <input type="text" name="name" value={name} onChange={(e) => setMemberName(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor='post'>Post: </label><br/>
          <input type="text" name="post" value={post} onChange={(e) => setPost(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor='email'>Contact: </label><br/>
          <input type="email" name="email" value={contact} onChange={(e) => setContact(e.target.value)} required/>
        </div>
        <br/>
        <button type="submit">Submit</button><br/>
      </form>
      <span className='error'>{errorMessage}</span><br/>
    </div>
  );
};

export default AddExecMember;
