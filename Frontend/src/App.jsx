// frontend/src/App.js
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegistrationForm from './Pages/RegistrationForm.jsx';
import LoginForm from './Pages/LoginForm.jsx';
import UserProfile from './Pages/Profile.jsx';
import AboutPage from './Pages/About.jsx';

import Login from './Pages/Login.jsx';
import BlogsHomePage from './Pages/Blogs Home.jsx'
import { ShowSelectedBlog } from './Pages/ShowSelectedBlog.jsx';
import { HeaderComponent, FooterComponent } from './BlogComponents/HeaderFooter.jsx';


const App = () => {
  //const [showBlogWriter, setBlogWriter] = useState(false);

  
  return (
    <>
      
      <HeaderComponent />
      <BrowserRouter>
      <Routes>


        <Route index element={<BlogsHomePage/>} />
        <Route path="/admin/login" element={<Login/>} />

        <Route path="/admin/register" element={<RegistrationForm/>} />
        <Route path="/admin/profile/:username" element={<UserProfile/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blogs" element={<BlogsHomePage/>} />
        <Route path="/showSelectedBlog" element={<ShowSelectedBlog/>} />
      </Routes>
      </BrowserRouter>

      <FooterComponent/>

    </>
  );
};

export default App;


