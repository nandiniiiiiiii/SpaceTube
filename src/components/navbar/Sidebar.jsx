import React,{useState} from 'react'
import './sidbar.scss';
import Linkscomp from './sidebarcomp/Linkscomp';
import Togglebutton from './sidebarcomp/Togglebutton';
import {motion} from 'framer-motion';

function Sidebar() {

    const [open,setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(900px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(17px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
  return (
    <motion.div className='side'
            animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        {/* link */}
        <Linkscomp/>
      </motion.div>
      {/* togglebtn */}
      <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
