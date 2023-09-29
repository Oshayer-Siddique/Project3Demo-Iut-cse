import React from 'react';

import { motion } from 'framer-motion';
import '/src/assets/css/Welcome.css';

import ButtonComponent from './Button';

function Welcome() {
    return (
        <div className="welcome-container"
        id="welcome-component">
          <div className="welcome-left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to IUTCS
            </motion.h1>
            <motion.div
              className="lines"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 1 }}
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Creating history since 2011
            </motion.p>
          </div>
          <div className="welcome-right">
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <ButtonComponent/>
              </motion.li>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                Item 2
              </motion.li>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.9 }}
              >
                Item 3
              </motion.li>
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.1 }}
              >
                Item 4
              </motion.li>
            </motion.ul>
          </div>
          <div className="bottom-text">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
               Fostering Excellence in Every Byte
            </motion.p>
          </div>
        </div>
      );
  }
  
  export default Welcome;


//   <div className="welcome-links">
//             <ButtonComponent/>
//         </div>