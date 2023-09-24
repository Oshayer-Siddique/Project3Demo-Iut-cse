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

      <div id="main">
        <div className="breadcrumbs">
          <div className="container">
            <h2>Welcome, {username}</h2>
            <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
          </div>
        </div>
      </div>

      <br/>

      <a className="get-started-btn" href="#" onClick={()=>{
        setBlogWriter(true);
      }}>Add New Blog</a>

      <BlogReader/>
      {showBlogWriter && <BlogWriter changeVisibility={setBlogWriter} />}
    </>
  );
}

export default UserProfile;