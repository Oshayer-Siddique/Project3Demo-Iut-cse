import React, { useState } from 'react';
import '/src/assets/css/AdminPage.css';

import blogsLogo from '/src/assets/img/blogs.png';
import membersLogo from '/src/assets/img/members.png';
import eventsLogo from '/src/assets/img/events.png';
import competitionLogo from '/src/assets/img/competition.png';

function AdminPage() {
    const [selectedComponent, setSelectedComponent] = useState(null);
  
    const handleComponentSelect = (component) => {
      setSelectedComponent(component);
    };
  
    return (
      <div className="admin-container">
        <div className="admin-component">
          <div className="component-header">
            <img src={blogsLogo} alt="Blogs" className="component-logo" />
            Blogs
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => handleComponentSelect('Blogs')}>
              Select Action
            </button>
            {selectedComponent === 'Blogs' && (
              <div className="dropdown-content">
                <a href="#">Add</a>
                <a href="#">Update</a>
                <a href="#">Delete</a>
              </div>
            )}
          </div>
        </div>
  
        <div className="admin-component">
          <div className="component-header">
            <img src={membersLogo} alt="Members" className="component-logo" />
            Members
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => handleComponentSelect('Members')}>
              Select Action
            </button>
            {selectedComponent === 'Members' && (
              <div className="dropdown-content">
                <a href="#">Add</a>
                <a href="#">Update</a>
                <a href="#">Delete</a>
              </div>
            )}
          </div>
        </div>
  
        <div className="admin-component">
          <div className="component-header">
            <img src={eventsLogo} alt="Events" className="component-logo" />
            Events
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => handleComponentSelect('Events')}>
              Select Action
            </button>
            {selectedComponent === 'Events' && (
              <div className="dropdown-content">
                <a href="#">Add</a>
                <a href="#">Update</a>
                <a href="#">Delete</a>
              </div>
            )}
          </div>
        </div>
  
        <div className="admin-component">
          <div className="component-header">
            <img src={competitionLogo} alt="Competition" className="component-logo" />
            Competition
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => handleComponentSelect('Competition')}>
              Select Action
            </button>
            {selectedComponent === 'Competition' && (
              <div className="dropdown-content">
                <a href="#">Add</a>
                <a href="#">Update</a>
                <a href="#">Delete</a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default AdminPage;