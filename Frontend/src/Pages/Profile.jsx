import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import "../BlogWriter.css";

function UserProfile() {
  const { username } = useParams();

//   axios.get(`http://localhost:5050/iut-cse/admin/profile/${username}`)
//     .then((response) => {
//       console.log(response);
//       console.log("Areeb said Hi");
//       // Optionally, display a success message or reset the form here
//     })
//     .catch((error) => {
//       console.error('Error saving information:', error);
//       // Optionally, display an error message or handle errors here
//     }
//   );

const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [errorMessage, setError] = useState('');
const [showBlogWriter, setBlogWriter] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();

  const formData = { title, body };
  setError('Please Wait');

  axios.post('http://localhost:5050/iut-cse/admin/uploadblog', formData)
    .then((response) => {
      console.log(response);
      console.log("Blog Sent");
      setTitle('')
      setBody('')
    })
    .catch((error) => {
      console.error('Error sending information:\n', error);
    });
};

return (
  <>
  <h2>Welcome, {username}</h2>
  <button type="button" onClick={()=>{
    setBlogWriter(true);
  }}>New Blog</button>

  {showBlogWriter && (<div className='BlogWriter'>
    <h1>New Blog</h1>
    <form onSubmit={handleSubmit} aria-disabled>
      <div>
        <input placeholder='Title' type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      </div>
      <div>
        <textarea placeholder='Enter blog body' name='body' value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={()=>{
        setBlogWriter(false);
      }}>Cancel</button><br/>
    </form>
  </div>)}
  </>
);
}

export default UserProfile;