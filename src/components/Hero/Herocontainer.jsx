import React from 'react';
import './hero.scss';
import img1 from './img-1.png';
import { motion } from 'framer-motion';


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

function Herocontainer() {
    return (
        <motion.div className='herocont'
            variants={variants}
            initial="initial"
            // animate="animate"
            whileInView="animate"
        >
            <motion.div className="textcontainer" variants={variants}>
                <h2>SPACETUBE</h2>
                <h1>Hello all, This is the official websit for SpaceTube YouTube chanel.</h1>
                <div className='btn'>
                    <button>See the Latest content...</button>
                    {/* <button>contact us</button> */}
                </div>
            </motion.div>
            <motion.div className="imagentainer">
                <img src={img1} alt='hero-img'></img>
            </motion.div>
        </motion.div>
    )
}

export default Herocontainer
