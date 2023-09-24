import React, { useState } from 'react';
import { BlogReader } from '../BlogComponents/BlogReader';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';


export function IntraVarsityComps(){
  const [Comps, setComps] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5050/iut-cse/getintrareg').then(res => {
      // console.log(res)
      let i = 0;
      setComps(res.data.map(b => ({ title: b.title, ID: i++, link: b.link })))
    })
  }, [])

  return (
    <div>

      <div id="main">
        <div className="breadcrumbs">
          <div className="container">
            <h2>Intra-University Competitions</h2>
            <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
          </div>
        </div>
      </div>

    <section id="about" className="about">
        <div className="container">
          <div className="row">
            {
              Comps.map(b => (

                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" key={b.ID}>
                  <h3>{b.title}</h3>
                  <p className="fst-italic">
                  Google Form Link: <a href={b.link}>{b.link}</a>
                  </p>
                </div>


              )
              )
            }
          </div>
        </div>
        <br /><br />
      </section>

    </div>
  );
}


