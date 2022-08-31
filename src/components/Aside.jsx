import React from "react";
import {Link} from 'react-router-dom';
// eslint-disable-next-line
import { FaGithub, FaInstagram, FaHeadphonesAlt,FaPhoneAlt } from "react-icons/fa";

function Aside(){
    return(
        <ul className="sns-block">
            <li><Link to="#"><FaGithub /></Link></li>
            <li><Link to="#"><FaInstagram /></Link></li>
            <li><Link to="#"><FaHeadphonesAlt /></Link></li>
        </ul>
    )
}

export default Aside;