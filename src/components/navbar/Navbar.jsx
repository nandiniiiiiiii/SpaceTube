import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin,FaYoutubeSquare } from "react-icons/fa";
import './navigation.scss';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

function Navbar() {
    return (
        <div className='navb'>
            {/* sidbar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration: 0.5}}
                >SpaceTube</motion.span>
                <div className="social">
                    <a href="#"><FaFacebookSquare size='1.5rem' color='black'/></a>
                    <a href="#"><FaInstagram size='1.5rem' color='black'/></a>
                    <a href="#"><FaYoutubeSquare size='1.5rem' color='black'/></a>
                    <a href="#"><FaLinkedin size='1.5rem' color='black'/></a>
                </div>
            </div>
        </div >
    )
}

export default Navbar