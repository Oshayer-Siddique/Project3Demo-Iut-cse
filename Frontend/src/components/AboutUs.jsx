// AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '/src/assets/css/AboutUs.css';

import aboutImage from '/src/assets/img/about-image.jpg';

function AboutUs() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, delay: 0.3 },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -120 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, delay: 0.6 },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 120 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, delay: 0.6 },
        },
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            id="aboutus-component"
            ref = {ref}
            className="about-us-container"
            variants={containerVariants}
            initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
            
        >
            <div className="about-text">
                <motion.h2 className="about-heading" 
                variants={textVariants}
           
                >
                    About IUT Computer Society(IUTCS)
                </motion.h2>
                <motion.p className="about-description"
                 variants={textVariants}
            
                 >
                    IUTCS, a platform for young computer engineers to
                    exercise their intellectuality. IUTCS was founded
                    in 2008 through the hands of some enthusiastic computer
                    engineers. Since then, it has grown from a handful
                    of members who also participate with us in activities
                    such as workshops, programming classes, seminars,
                    contests, application development classes, co-curricular
                    aid and projects etc.
                </motion.p>
            </div>
            <div className="about-image">
                <motion.img
                    src={aboutImage}
                    alt="About Us"
                    variants={imageVariants}
            
                />
            </div>
        </motion.div>
    );
}

export default AboutUs;
