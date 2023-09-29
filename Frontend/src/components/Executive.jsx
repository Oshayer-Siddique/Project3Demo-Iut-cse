import React ,{useEffect} from 'react';
import '/src/assets/css/ExecutiveComponent.css'; // Import your CSS file for styling
import { motion, useAnimation, } from 'framer-motion';



const ExecutiveComponent = () => {

    return (
        <div className="executive-container">
            <div>
                Executive Committee
                <br/>
                <br/>
                <div className="underline"></div> {/* Add the underline element */}
            </div>
            <br/>
            <div className="executive-cards">
                {executives.map((executive) => (
                    <div>
                        <div className="executive-image">
                            <img
                                src={executive.image}
                                alt={`Executive ${executive.name}`}
                            />
                        </div>
                        <div className="executive-details">
                            <h2 className="executive-name">{executive.name}</h2>
                            <p className="executive-position">{executive.position}</p>
                            <p className="executive-contact">{executive.contact}</p>
                            <p className="executive-social-media">
                                <a href={executive.socialMedia} target="_blank" rel="noopener noreferrer">
                                    LinkedIn Profile
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExecutiveComponent;
