import React, { useEffect, useRef } from "react";
import './style/main.css';
import './style/common.css';
import {gsap, Elastic, power4 } from 'gsap';

function Main(){
    let mainTxt = gsap.timeline({repeat: false});
    let welcome = useRef(null);

    useEffect(()=>{
        let bigtext = welcome.current.innerText.split('').map(item=> `<span>${item}</span>`);
        // console.log(bigtext.join(''));
        welcome.current.innerHTML=bigtext.join('');
        
        mainTxt
        .to(".big-text h1 span", {
            duration: 0.7,            
            y: 50,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 0.3),
            stagger: {
              each: 0.7,
              amount: 0.5
            }
        },1)
        .to(".small-text-wrap", {
            duration: 1.2,
            delay: 0.5,
            top: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(0.5, 0.45),
        })
        .to(".small-text-wrap", {
            duration: 1.2,
            delay: 1.5,
            top: -100, 
            opacity: 1,
            ease: Elastic.easeOut.config(0.5, 0.45),
        })
    })
    return(
        <>
            <div className='noise-wrap'></div>
            <div className="main__block">
                <div className="main__wrap">
                    <div className="main__text">
                        <div className="big-text">
                            <h1 ref={welcome}>welcome</h1>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="120.000000pt" height="90.000000pt" viewBox="0 0 120.000000 90.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,90.000000) scale(0.050000,-0.050000)" fill="#efd97f" stroke="none"> <path d="M168 1632 c-95 -95 -95 -189 0 -284 132 -132 352 -43 352 142 0 105 -105 210 -210 210 -57 0 -89 -15 -142 -68z"/> <path d="M1948 1632 c-132 -132 -43 -352 142 -352 105 0 210 105 210 210 0 57 -15 89 -68 142 -53 53 -85 68 -142 68 -57 0 -89 -15 -142 -68z"/> <path d="M244 596 c-153 -153 501 -496 946 -496 445 0 1099 343 946 496 -40 40 -75 28 -173 -58 -412 -364 -1134 -364 -1546 0 -98 86 -133 98 -173 58z"/></g></svg>
                        </div>
                        <div className="small-text-block mt-35">  
                            <div className="small-text-wrap">
                                <p>I will introduce my workspace</p>
                                <p>Click on the menus you are interested in!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-naming">
                    <h2>
                        <span className="color-point">nayeon</span> <br/>
                        portfolio
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Main;