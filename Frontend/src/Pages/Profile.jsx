import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import "../newstyle.css";

function UserProfile() {
  const { username } = useParams();

//   axios.get(`http://localhost:5050"/iut-cse/admin/profile/${username}`)
//       .then((response) => {
//         console.log(response);
//         console.log("OK")
        
//         // Optionally, display a success message or reset the form here
//       })
//       .catch((error) => {
//         console.error('Error saving information:', error);
//         // Optionally, display an error message or handle errors here
//       });


  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
    </div>
  );
}

export default UserProfile;