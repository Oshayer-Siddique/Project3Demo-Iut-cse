import React, { useState } from 'react';
import axios from 'axios';

function AddIntraComp(){
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const formData = { title, link };
        setMessage('Please Wait');
      
        axios.post('http://localhost:5050/iut-cse/intrareg', formData)
          .then((response) => {
            console.log(response);
            console.log("Event Created");
            if(response.data){
                setMessage(response.data)
                setTitle('')
                setLink('')
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

    return (<div className='intra-reg-form'>
    <h3>New Intra Uni Competition</h3>
    <form onSubmit={handleSubmit} aria-disabled>
      <div>
        <input placeholder='Title' type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      </div>
      <div>
        <input placeholder='Google Form Link' name='link' value={link} onChange={(e) => setLink(e.target.value)} required/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      {message && <div>{message}</div>}
      <br/>
    </form>
  </div>);
}

export {AddIntraComp};