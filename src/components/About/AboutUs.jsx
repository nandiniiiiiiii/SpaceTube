import React from 'react'
import './aboutus.scss';
import { animate, motion } from 'framer-motion';

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

function AboutUs() {
  return (
    <motion.div className='container'
        variants={variants}
        initial="initial"
        // animate="animate"
        whileInView="animate"
    >
        <motion.div className="textcontainer">
            <p>
                We make fun and informative content
                <br/> about space.
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titlecontainer">
            <div className="title">
                {/* rolling effect */}
                <h1><b>Our Work</b></h1>
            </div>
            <div className="title">
                <h4>Some of our previous blogs and volgs</h4>
            </div>
        </motion.div>
        <motion.div className="listcontainer">
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}} variants={variants}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cupiditate aut fugit amet. Aut cum consequuntur provident minus blanditiis quaerat perferendis architecto delectus libero nesciunt, pariatur, neque obcaecati numquam!
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}} variants={variants}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cupiditate aut fugit amet. Aut cum consequuntur provident minus blanditiis quaerat perferendis architecto delectus libero nesciunt, pariatur, neque obcaecati numquam!
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}} variants={variants}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cupiditate aut fugit amet. Aut cum consequuntur provident minus blanditiis quaerat perferendis architecto delectus libero nesciunt, pariatur, neque obcaecati numquam!
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}} variants={variants}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cupiditate aut fugit amet. Aut cum consequuntur provident minus blanditiis quaerat perferendis architecto delectus libero nesciunt, pariatur, neque obcaecati numquam!
                </p>
                <button>GO</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default AboutUs