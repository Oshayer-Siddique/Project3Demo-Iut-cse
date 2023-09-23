import { useState, useEffect } from "react";
import axios from 'axios';
import "../BlogWriter.css";

export function BlogReader(){
    const [Blogs, setBlogs] = useState([]);
    const [Post, setPost] = useState({});

    useEffect( ()=>{
        axios.get('http://localhost:5050/iut-cse/getblog').then( res => {
            // console.log(res)
            let i = 0;
            setBlogs(res.data.map(b => ({title: b.title, ID: i++, body:b.body})))
            setPost(res.data[0])
        })
    }, [])


    return <>
    {Post.title && (<div class="BlogPost" id="BlogPost">
        <h2>{Post.title}</h2>
        <div>{Post.body}</div>
      </div>)}
      <br/>
    <div className="BlogReader">
      <h1>Current Blogs</h1>
      {
        Blogs.map(b => (
            <a href="#BlogPost"><div key={b.ID} className="BlogTitle" onClick={()=>{
                setPost(b)
            }}>{b.title}</div></a>
        ))
      }
      </div>
    </>
}