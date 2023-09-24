// frontend/src/App.js
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegistrationForm from './Pages/RegistrationForm.jsx';
import LoginForm from './Pages/LoginForm.jsx';
import UserProfile from './Pages/Profile.jsx';
import AboutPage from './Pages/About.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<LoginForm/>} />
        <Route path="/admin/login" element={<LoginForm/>} />
        <Route path="/admin/register" element={<RegistrationForm/>} />
        <Route path="/admin/profile/:username" element={<UserProfile/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


