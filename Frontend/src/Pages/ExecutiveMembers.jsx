import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ExecutiveMembers() {
  const [Members, setMembers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5050/iut-cse/getmember').then(res => {
      // console.log(res)
      let i = 0;
      setMembers(res.data.map(mem => ({ name: mem.name, post: mem.post, contact:mem.contact, ID: i})))
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

  return <div className="container">
    <div className="row g-3">
    {
        
      Members.map(mem => (
        
          <div className="col-sm-12 col-md-6 col-lg-4"  key={mem.ID}>
            <div className="card">
                <img src="https://source.unsplash.com/random/?roses/400/200" alt={mem.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{mem.name}</h5>
                    <p className="card-text">{mem.post}<br/><a href={"mailto:"+mem.contact}>{mem.contact}</a></p>
                </div>
            </div>
          </div>
        
      )
      )
    }
    <br /><br />
    </div>
    </div>
}