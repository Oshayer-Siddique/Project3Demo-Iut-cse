import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { BlogWriter } from '../BlogComponents/BlogWriter';
import { BlogReader } from '../BlogComponents/BlogReader';
import { AddIntraComp } from '../BlogComponents/AddIntraComp';
import { EventWriter } from '../BlogComponents/EventWriter';

function UserProfile() {
  const { username } = useParams();
  const [showCompAdder, setCompAdder] = useState(false);
  const [showEventAdder, setEventAdder] = useState(false);

  return (
    <div className="user-profile">
      <div className="header">
        <div className="container">
          <h2>Welcome, {username}</h2>

        </div>
      </div>

      <div className="buttons">
        <a className="btn" href="/admin/writeblogs" target='_blank'>New Blog</a>
        <a className="btn" href="/admin/AddExecMember" target='_blank'>Add New Exec Member</a>
        {!showCompAdder && (
          <button className="btn" onClick={() => setCompAdder(true)}>Add New Competition</button>
        )}
        {showCompAdder && (
          <button className="btn" onClick={() => setCompAdder(false)}>Close</button>
        )}
        <button className="btn" onClick={() => setEventAdder(true)}>Add Events/Achievements</button>
        <a className="btn" href="/admin/deleteblogs" target="_blank">Delete Blogs</a>
        <a className="btn" href="/admin/deleteevents" target="_blank">Delete Events</a>
      </div>

      {showCompAdder && <AddIntraComp />}
      {showEventAdder && <EventWriter changeVisibility={setEventAdder} />}
    </div>
  );
}

export default UserProfile;
