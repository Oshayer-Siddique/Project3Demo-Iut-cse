import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import '/src/assets/css/BlogComponent.css';


function format(string){
  return string.slice(7,13);
}

export function BlogReader() {
  const [Blogs, setBlogs] = useState([]);
  const [searchWord, setSearch] = useState([]);
  let navigate = useNavigate();

  const controls = useAnimation();
  const blogsPerRow = 3;

  useEffect(() => {

    

    // Animate the "Latest Blogs" title and cards
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    });

    if (searchWord == "") {
      axios.get('http://localhost:5050/iut-cse/getblog').then(res => {
        // console.log(res)
        let i = 0;
        setBlogs(res.data.map(b => ({ title: b.title, ID: i++, body: b.body, time: b.uploadTime, imgURL: b.imageUrl })))
        //console.log(b.imageUrl);
      })
    }
    else {
      const formData = { title: searchWord };
      axios.post('http://localhost:5050/iut-cse/searchblog', formData)
        .then((res) => {
          let i = 0;
          setBlogs(res.data.map(b => ({ title: b.title, ID: i++, body: b.body, time: b.uploadTime, imgURL: b.imageUrl  })))
        })
        .catch((error) => {
          console.error('Error sending information:\n', error);
        });

    }
  }, [searchWord]);

  return (
    <div className="blog-container">
      <motion.div
        className="blogs-header"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <h1>Blogs</h1>
        <br/>
        <br/>
        <div className="underline"></div>
      </motion.div>

      <form className="search-bar">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          value={searchWord}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>

      <div className="blog-cards">
        {Blogs.map((blog, index) => (
          <motion.div
            className="blog-card"
            key={blog.ID}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <img
              src={`${blog.imgURL}`} // Replace with the actual image URL
              alt={`Blog Image ${blog.ID}`}
              className="blog-image"
            />
            <div className="blog-card-details">
              <br/>
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="author-date">
                <span className="author">Author Name</span> {' '}
                <br/>
                <span className="date">{blog.time.substring(11,19)} | {blog.time.substring(0,10)} </span>
              </p>
              <p className="blog-content">
                {blog.body.substring(0, 50)}...
              </p>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  sessionStorage.setItem('title', blog.title);
                  sessionStorage.setItem('body', blog.body);
                  sessionStorage.setItem('imgURL', blog.imgURL);
                  navigate('/showSelectedBlog');
                }}
                className="read-more-link"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );




  return <section id="about" className="about">
    <div className="container">
      <br />
      <form className="d-flex">
        <input type="search" className="form-control me-2" placeholder="Search..." value={searchWord} onChange={(e) => { setSearch(e.target.value) }} />
      </form>
      <div className="row">
        {
          Blogs.map(b => (

            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" key={b.ID}>
              <h3>{b.title}</h3>
              <p className="fst-italic">
                {b.body.substring(0, 30)}...<br />
                <a href="" onClick={() => {
                  sessionStorage.setItem('title', b.title);
                  sessionStorage.setItem('body', b.body);
                  navigate('/showSelectedBlog')
                }}>Read More</a>
              </p>
            </div>


          )
          )
        }
      </div>
    </div>
    <br /><br />
  </section>
}