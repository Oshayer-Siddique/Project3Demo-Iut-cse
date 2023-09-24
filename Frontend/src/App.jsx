// frontend/src/App.js
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegistrationForm from './Pages/RegistrationForm.jsx';
import LoginForm from './Pages/LoginForm.jsx';
import UserProfile from './Pages/Profile.jsx';
import AboutPage from './Pages/About.jsx';
import Login from './Pages/Login.jsx';

const App = () => {
  const [showBlogWriter, setBlogWriter] = useState(false);

  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/admin/login" element={<Login/>} />
        <Route path="/admin/register" element={<RegistrationForm/>} />
        <Route path="/admin/profile/:username" element={<UserProfile/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


