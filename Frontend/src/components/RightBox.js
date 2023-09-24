import React from 'react';
import { blogElements } from '../data';
import BoxComponent from './../components/BoxComponent';
import { Link, Route, Routes } from 'react-router-dom';
const RightBox = (props) => {
    const singlePageCaller = () => {
        if(props.data.link){
            window.location.href = props.data.link;
        }
    }
    
    
    return (
        <Link to={`/SinglePage/${props.data.type+"%"+props.data.id}`} relative='path'> <div  className={`${
            "border-[#1C1917]"
           } text-[.875rem]  font-bold cursor-pointer border-2  rounded-lg w-[60vw]
           md:max-w-[350px] `} onClick={()=>console.log("clicked"+props.data.title)}>
  
             <div>
                 <img src={props.data.image} className='h-44' alt="" />
             </div>
             <div className='mx-3 mb-3 text-[.875rem] font-semibold'>
                 <div >
                     <h1 className='text-[1.25rem] font-bold my-3 '>
                        {props.data.title}
                     </h1>
                     <h1 className='text-[1.25rem] font-bold my-3 '>
                        {props.data.description}
                     </h1>
                 </div>
                
             </div>
         </div>
         </Link>
    );
};

export default RightBox;