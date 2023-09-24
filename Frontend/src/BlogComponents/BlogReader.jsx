import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export function BlogReader() {
  const [Blogs, setBlogs] = useState([]);
  const [Post, setPost] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5050/iut-cse/getblog').then(res => {
      // console.log(res)
      let i = 0;
      setBlogs(res.data.map(b => ({ title: b.title, ID: i++, body: b.body })))
      setPost(res.data[0])
    })
  }, [])


  // return <>
  // <div className="BlogReader">
  //   <h1>Current Blogs</h1>
  //   {
  //     Blogs.map(b => (
  //         <a href="#BlogPost"><div key={b.ID} className="BlogTitle" onClick={()=>{
  //             setPost(b)
  //         }}>{b.title}</div></a>
  //     ))
  //   }
  //   </div>
  // </>

  return <section id="about" className="about">
    {
      Blogs.map(b => (<div className="container" key={b.ID}>
        <div className="row">
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
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
        </div>
      </div>
      )
      )
    }
    <br /><br />
  </section>
}