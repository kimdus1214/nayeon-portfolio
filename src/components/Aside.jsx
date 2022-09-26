import React from "react";
// import {Link} from 'react-router-dom';
import { FaGithub, FaInstagram, FaHeadphonesAlt } from "react-icons/fa";

function Aside(){
    return(
        <ul className="sns-block">
            <li><a href="https://github.com/kimdus1214"><FaGithub /></a></li>
            {/* eslint-disable-next-line */}
            <li><a href="https://www.instagram.com/na._.yomii/"><FaInstagram /></a></li>
            <li><a href="tel:010-7169-4754"><FaHeadphonesAlt /></a></li>
        </ul>
    )
}

export default Aside;