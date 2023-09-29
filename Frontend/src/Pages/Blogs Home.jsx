import React, { useState } from 'react';
import { BlogReader } from '../BlogComponents/BlogReader';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const BlogHomePage = () => {
  return (
    <div>

      <div id="main">
        
      </div>

      <BlogReader/>

    </div>
  );
}

export default BlogHomePage;

