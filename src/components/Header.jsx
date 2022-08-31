import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import './style/common.css';
import { gsap,Power1 } from "gsap";

function Header(){
    let tl = gsap.timeline();
    let menuTl = gsap.timeline();
    let navigate = useNavigate();

    useEffect(()=>{
        tl
        .to('#cover', 0.5, {
            scaleX: 0,
            skewX: '30deg',
            // delay: 0.5,
            ease: Power1.easeInOut
        })
        menuTl
        .to(".main-header li", {
            duration: 0.75,
            x: 0,
            autoAlpha: 1,
            ease: "elastic.out(1, 1)",
            stagger: {
              each: 0.75,
              amount: 0.5
            }
          }, "+=0.5");
    })

    const changePage = (e, destination) => {
        e.preventDefault();
        tl
        .to('#cover', 0.5, {
            scaleX: 1,
            skewX: '20deg',
            // delay: 0.5,
            ease: Power1.easeIn
        })
        const timelineDuration = tl.duration() * 1000;
        setTimeout(() => {
            navigate(destination);
        }, timelineDuration);
    };

    return(
        <>
            <div id="cover"></div>
            <header>
                <div className="main-header">
                    <h1><Link to="/" className="link_click" onClick={e=>changePage(e, "/")}>logo</Link></h1>
                    <ul>
                        <li><Link to="/intro" className="link_click" onClick={e => changePage(e, "/intro")}>intro</Link></li>
                        <li><Link to="/project" className="link_click" onClick={e => changePage(e, "/project")}>project</Link></li>
                        <li><Link to="/contact" className="link_click" onClick={e => changePage(e, "/contact")}>contact</Link></li>
                    </ul>
                    <button><i></i></button>
                </div>
            </header>
        </>
    );
}

export default Header;