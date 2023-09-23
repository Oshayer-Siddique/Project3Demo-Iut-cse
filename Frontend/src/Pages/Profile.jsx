import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { BlogWriter } from '../BlogComponents/BlogWriter';
import { BlogReader } from '../BlogComponents/BlogReader';

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

const [showBlogWriter, setBlogWriter] = useState(false);

return (
  <>
  <h2>Welcome, {username}</h2>
  <button type="button" onClick={()=>{
    setBlogWriter(true);
  }}>New Blog</button>
  <BlogReader/>

  {showBlogWriter && <BlogWriter changeVisibility={setBlogWriter}/>}
  </>
);
}

export default UserProfile;