import React from 'react';
import './Copyright.css';
import { FaRegCopyright } from "react-icons/fa6";
const Copyright = () => {
    return (
        <>
            <div className="copyright-body">
                <span><FaRegCopyright /> Made by <b>Rittick Sinha</b></span>
            </div>
        </>
    );
}

export default Copyright;
