import React, { useState } from 'react';
import { BlogReader } from '../BlogComponents/BlogReader';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const BlogHomePage = () => {
  return (
    <div>

      <div id="main">
        <div className="breadcrumbs">
          <div className="container">
            <h2>Blogs</h2>
            <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
          </div>
        </div>
      </div>

      <BlogReader/>

    </div>
  );
}

export default BlogHomePage;

