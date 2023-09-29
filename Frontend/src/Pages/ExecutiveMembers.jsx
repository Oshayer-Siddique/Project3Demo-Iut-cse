import React, { useState, useEffect } from "react";
import axios from 'axios';
import '/src/assets/css/Members.css'

export default function ExecutiveMembers() {
  const [members, setMembers] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  
  useEffect(() => {
    if (searchWord === "") {
      axios.get('http://localhost:5050/iut-cse/getmember')
        .then(res => {
          setMembers(res.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      const formData = { name: searchWord };
      axios.post('http://localhost:5050/iut-cse/searchmember', formData)
        .then(res => {
          setMembers(res.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [searchWord]);

  return (
    <div className="executive-members-container">
      <div className="breadcrumbs">
        <div className="container">
          <h2>Executive Committee</h2>
          
          
        </div>
      </div>

      
      
      <form className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Search..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </form>
      <br />
      <div className="executive-members-grid">
        {members.map((mem, index) => (
          <div className="executive-member-card" key={index}>
            <div className="executive-member-image">
              <img
                src={`https://source.unsplash.com/random/?executive/${mem.ID}`}
                alt={mem.name}
              />
            </div>
            <div className="executive-member-details">
              <h5 className="executive-member-name">{mem.name}</h5>
              <p className="executive-member-post">{mem.post}</p>
              <p className="executive-member-contact">
                <a href={`mailto:${mem.contact}`}>{mem.contact}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
