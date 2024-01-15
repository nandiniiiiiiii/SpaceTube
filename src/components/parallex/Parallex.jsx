import React, { useRef } from 'react'
import './parallex.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

function Parallex() {
  const ref = useRef();
  //this will help us indicate when we have scrolled to this section 
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end start"]
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0%","170%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%","200%"]);

  return (
    <div 
      className='para'
      ref={ref}
    >
      <motion.h1
        style={{y: ytext}}
      >What we DO?</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{y: yBg}}></motion.div>
      <motion.div className="stars" style={{x: yBg}}></motion.div>
    </div>
  )
}

export default Parallex
