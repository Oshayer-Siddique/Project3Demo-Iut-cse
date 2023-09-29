import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '/src/assets/css/Events.css'

export default function EventsAndAchievements() {
  const [Events, setEvents] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5050/iut-cse/getevent').then(res => {
      let i = 0;
      setEvents(res.data.map(event => ({ title: event.title, body: event.body, ID: i++ })))
    })
  }, [])

  return (
    <div className="container">
      <div className="breadcrumbs">
        <div className="container">
          <br/>
          <h2>Events & Achievements</h2>
          <br/>
        <br/>
        
          
          
        </div>
      </div>
      <div className="row g-3">
        <br />
        <br />
        {Events.map(event => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={event.ID}>
            <div className="events-card">
              <div className="events-image">
                <img src="https://source.unsplash.com/random/?code/400/200" alt={event.title} className="card-img-top" />
              </div>
              <div className="events-details">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.body.substring(0, 20)}...<br />
                  <a href="#" onClick={() => {
                    sessionStorage.setItem('eventtitle', event.title);
                    sessionStorage.setItem('eventbody', event.body);
                    navigate('/showSelectedEvent');
                  }}>Read More</a>
                </p>
              </div>
            </div>
          </div>
        ))}
        <br />
        <br />
      </div>
    </div>
  );
}
