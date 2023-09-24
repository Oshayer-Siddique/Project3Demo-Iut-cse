// frontend/src/App.js
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegistrationForm from './Pages/RegistrationForm.jsx';
import LoginForm from './Pages/LoginForm.jsx';
import UserProfile from './Pages/Profile.jsx';
import AboutPage from './Pages/About.jsx';
import InterRegistrationForm from './Pages/InterVarsityCompReg.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import BlogsHomePage from './Pages/Blogs Home.jsx'
import AddExecMember from './Pages/AddExecMember.jsx';
import ExecutiveMembers from './Pages/ExecutiveMembers.jsx';
import EventsAndAchievements from './Pages/EventsAndAchievements.jsx';
import { ShowSelectedBlog } from './Pages/ShowSelectedBlog.jsx';
import { ShowSelectedEvent } from './Pages/ShowSelectedEvent.jsx';
import { HeaderComponent, FooterComponent } from './BlogComponents/HeaderFooter.jsx';


const App = () => {
  //const [showBlogWriter, setBlogWriter] = useState(false);

  
  return (
    <>
      
      <HeaderComponent />
      <br/><br/><br/>
      <BrowserRouter>
      <Routes>


        <Route index element={<AboutPage/>} />
        <Route path="/admin/login" element={<Login/>} />

        <Route path="/admin/register" element={<Register/>} />
        <Route path="/admin/profile/:username" element={<UserProfile/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blogs" element={<BlogsHomePage/>} />
        <Route path="/showSelectedBlog" element={<ShowSelectedBlog/>} />
        <Route path="/showSelectedEvent" element={<ShowSelectedEvent/>} />
        <Route path="/admin/AddExecMember" element={<AddExecMember/>} />
        <Route path="/ExecMembers" element={<ExecutiveMembers/>} />
        <Route path="/InterRegistration" element={<InterRegistrationForm/>} />
        <Route path="/Events" element={<EventsAndAchievements/>} />
      </Routes>
      </BrowserRouter>

      <FooterComponent/>

    </>
  );
};

export default App;


