import React from 'react';
import { FaAlignJustify } from "react-icons/fa";

function Togglebutton({setOpen}) {
  return (
    <button onClick={()=>setOpen((prev)=>!prev)}>
        <FaAlignJustify/>
    </button>
  )
}

export default Togglebutton
