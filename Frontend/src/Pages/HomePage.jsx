import React, { useState, useRef } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AboutUs from '/src/components/AboutUs';
import Welcome from '/src/components/Welcome';
import ButtonComponent from '../components/Button';



const HomePage = () => {

    const SecAbout = useRef();

    const scrollHandler = (useRef) =>{
    
    }
    
    return (
        <div className="App">
            <div id="scroll-container">
                
                <Welcome/>
                <AboutUs/> 
            </div>
        </div>
    );
}

export default HomePage;