import React from 'react';
//import { blogElements } from '../data';
import BoxComponent from './../components/BoxComponent';
import { Link } from 'react-router-dom';
const HomeBlog = () => {
    var blogs= blogElements.slice(0,3);
    return (
       
        <div className='mt-4'>
        <h1>Get all blogs here</h1>
        <div className='flex justify-center content-center flex-col gap-2 md:flex-row px-24 md:px-10 py-10'>
       
        { blogs.map(blogElement => <BoxComponent data={blogElement}></BoxComponent>)}

        
        </div>
        
        <Link to='/Blog' className='text-right'>see all</Link>
      
    </div>
     
    );
};

export default HomeBlog;