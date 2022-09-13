import React, { useEffect,useRef } from "react";
import {Link, useNavigate} from "react-router-dom";
import './style/common.css';
import { gsap,Power1 } from "gsap";
import { IoMenuSharp } from "react-icons/io5";
import { BiHomeHeart } from "react-icons/bi";
import { useState } from "react";

function Header({intro, project, contact}){
    let tl = gsap.timeline();
    let menuTl = gsap.timeline();
    let navigate = useNavigate();
    const mainHeader = useRef(null);

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

    const [HeaderOn, setHeaderOn] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',headerScroll);
        headerClone();
    },[]);

    const headerScroll = ()=>{
        let winSCT = window.scrollY;
        // console.log(winSCT)
        if(winSCT>=100){
            setHeaderOn(true)
        }else{
            setHeaderOn(false)
        }
    }

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

    const headerClone = ()=>{
        let mobileHeader = mainHeader.current.cloneNode(true);
        document.querySelector('.mobile-header').append(mobileHeader);
    }

    return(
        <>
            <div id="cover"></div>
            <header className={HeaderOn&& `headerOn`}>
                <div className="main-header" ref={mainHeader}>
                    <h1><Link to="/" className="link_click" onClick={e=>changePage(e, "/")}><BiHomeHeart/></Link></h1>
                    <ul>
                        <li><Link to="/intro" className={`link_click ${intro&& 'on'}`} onClick={e => changePage(e, "/intro")}>intro</Link></li>
                        <li><Link to="/project" className={`link_click ${project&& 'on'}`} onClick={e => changePage(e, "/project")}>project</Link></li>
                        <li><Link to="/contact" className={`link_click ${contact&& 'on'}`} onClick={e => changePage(e, "/contact")}>contact</Link></li>
                    </ul>
                    <button><IoMenuSharp/></button>
                </div>
            </header>
            <div className="mobile-header"></div>
        </>
    );
}

export default Header;