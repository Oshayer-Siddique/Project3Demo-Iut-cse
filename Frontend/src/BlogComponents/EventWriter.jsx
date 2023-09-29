//import "../BlogWriter.css";
import React, { useState } from 'react';
import axios from 'axios';

function EventWriter(props){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const formData = { title, body };
        setMessage('Please Wait');
      
        axios.post('http://localhost:5050/iut-cse/admin/uploadevent', formData)
          .then((response) => {
            console.log(response);
            console.log("Event Sent");
            if(response.data){
                setMessage(response.data)
                setTitle('')
                setBody('')
            }
            else{
                setMessage("Server Error")
            }
          })
          .catch((error) => {
            console.error('Error sending information:\n', error);
            setMessage("Server Error")
          });
      };

    return (<div className='BlogWriter'>
    <h1>New Event</h1>
    <form onSubmit={handleSubmit} aria-disabled>
      <div>
        <input placeholder='Title' type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      </div>
      <div>
        <textarea placeholder='Enter blog body' name='body' value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
      </div>
      {message && <div>{message}</div>}
      <button type="submit">Submit</button>
      <button type="button" onClick={()=>{
        props.changeVisibility(false);
      }}>Close</button><br/>
    </form>
  </div>);
}

export {EventWriter};