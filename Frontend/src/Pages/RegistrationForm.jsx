// frontend/src/App.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../newstyle.css";

const RegistrationForm = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [successful, setSuccess] = useState(false);
  const [errorMessage, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { username, password, email };
    setError('Please wait')

    axios.post('http://localhost:5050/iut-cse/admin/register', formData)
      .then((response) => {
        console.log(response.data);
        setSuccess('True');
        // Optionally, display a success message or reset the form here
      })
      .catch((error) => {
        console.error('Error saving information:', error);
        if(error.response)
          setError(error.response.data.error);
        else
          setError('Could not connect to server')
        // Optionally, display an error message or handle errors here
      });
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name = "uname" value={username} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name = "pass" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name = "email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  if(!successful) return (
    <div className="app">
      <div className="login-form">
          <div className="title">Sign In</div>
          {renderForm}
          <span className='error'>{errorMessage}</span><br/>
          <Link to="/admin/login">Go Back</Link>
      </div>
    </div>
  );
  else return (
    <div className="app">
      <div className="login-form">
        <div className="title">Registration Successful!</div>
        <Link to="/admin/login">Go Back</Link>
    </div>
  </div>
  );

  // return (


  //   <div>
  //     <h1>Sign In</h1>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label>UserName:</label>
  //         <input type="text" value={username} onChange={(e) => setName(e.target.value)} />
  //       </div>
  //       <div>
  //         <label>Password:</label>
  //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  //       </div>
  //       <div>
  //         <label>Email:</label>
  //         <textarea value={email} onChange={(e) => setEmail(e.target.value)} />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );
};

export default RegistrationForm;


//Areeb

// // frontend/src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = () => {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = { username, password, email };

//     axios.post('http://localhost:5050/iut-cse/admin/register', formData)
//       .then((response) => {
//         console.log(response);
//         console.log("OK")
//         setName(""); setEmail(""); setPassword("");
        
//         // Optionally, display a success message or reset the form here
//       })
//       .catch((error) => {
//         console.error('Error saving information:', error);
//         // Optionally, display an error message or handle errors here
//       });
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor='name'>Name: </label>
//           <input type="text" name="name" value={username} onChange={(e) => setName(e.target.value)} required/>
//         </div>
//         <div>
//           <label htmlFor='email'>Email: </label>
//           <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
//         </div>
//         <div>
//           <label htmlFor='password'>Password: </label>
//           <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
