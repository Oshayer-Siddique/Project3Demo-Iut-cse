import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { BlogWriter } from '../BlogComponents/BlogWriter';
import { BlogReader } from '../BlogComponents/BlogReader';
import { AddIntraComp } from '../BlogComponents/AddIntraComp';
import { EventWriter } from '../BlogComponents/EventWriter';

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
  const [showCompAdder, setCompAdder] = useState(false);
  const [showEventAdder, setEventAdder] = useState(false);

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

      <br />

      <a className="get-started-btn" href="#" onClick={() => {
        setBlogWriter(true);
      }}>Add New Blog</a>

      <a className="get-started-btn" href="/admin/AddExecMember" target='_blank'>Add New Exec Member</a>

      {!showCompAdder && <a className="get-started-btn" href="#" onClick={() => {
        setCompAdder(true)
      }}>Add New Competition</a>}
      {showCompAdder && <a className="get-started-btn" href="#" onClick={() => {
        setCompAdder(false)
      }}>Close</a>}

      <a className="get-started-btn" href="#" onClick={() => {
        setEventAdder(true);
      }}>Add Events/Achievements</a>

      {showCompAdder && <AddIntraComp />}

      <BlogReader />
      {showBlogWriter && <BlogWriter changeVisibility={setBlogWriter} />}
      {showEventAdder && <EventWriter changeVisibility={setEventAdder} />}
    </>
  );
}

export default UserProfile;
