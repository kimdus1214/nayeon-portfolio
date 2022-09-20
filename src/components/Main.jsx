import React, { useEffect, useRef } from "react";
import './style/main.css';
// import './style/common.css';
import {gsap, Elastic } from 'gsap';
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

function Main(){
    let welcome = useRef(null);
    const smile = useRef(null);
    const q = gsap.utils.selector(smile);
    MorphSVGPlugin.convertToPath(q("#preSmile"));
    
    useEffect(()=>{
        let mainTxt = gsap.timeline({repeat:-1, repeatDelay: 1});
        let bigtext = welcome.current.innerText.split('').map(item=> `<span>${item}</span>`);
        // console.log(bigtext.join(''));
        welcome.current.innerHTML=bigtext.join('');
        
        let winWidth = window.innerWidth;
        // console.log(winWidth)
        
        if(winWidth>1280){
            mainTxt
            .to(".big-text h1 span", {
                duration: 0.7,
                yPercent: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(1, 0.3),
                stagger: {
                each: 0.7,
                amount: 0.5
                }
            },1)
            .fromTo(".smile",{opacity: 0},{opacity: 1, duration: 0.5,  y: 0, ease: Elastic.easeOut.config(1, 0.5)})
            .to(q("#preSmile"), {
                morphSVG: q("#afterSmile"),
                // delay: 0.5,
                duration: 0.5,
                ease: "none"
            })
            .to(".small-text-wrap", {
                duration: 0.8,
                delay: 1,
                top: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(0.5, 0.45),
            })
            .to(".small-text-wrap", {
                duration: 0.8,
                delay: 3,
                top: -100,
                ease: Elastic.easeOut.config(0.5, 0.45),
            })
            .to(".main__text",{
                opacity: 0,
                delay: 1.5,
                duration: 2,
            })
            .fromTo(".main__text-last",{opacity: 0},{opacity: 1, duration: 2,} ,"<80%")
            .to(".main__text-last",{opacity: 0, duration: 1, delay: 1.5})
        }else if(759 < winWidth && winWidth <= 1280){
            mainTxt
            .to(".big-text h1 span", {
                duration: 0.7,
                yPercent: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(1, 0.3),
                stagger: {
                each: 0.7,
                amount: 0.5
                }
            },1)
            .fromTo(".smile",{opacity: 0},{opacity: 1, duration: 0.5,  y: 0, ease: Elastic.easeOut.config(1, 0.5)})
            .to(q("#preSmile"), {
                morphSVG: q("#afterSmile"),
                // delay: 0.5,
                duration: 0.5,
                ease: "none"
            })
            .to(".small-text-wrap", {
                duration: 0.8,
                delay: 1,
                top: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(0.5, 0.45),
            })
            .to(".small-text-wrap", {
                duration: 0.8,
                delay: 3,
                top: -65,
                ease: Elastic.easeOut.config(0.5, 0.45),
            })
            .to(".main__text",{
                opacity: 0,
                delay: 1.5,
                duration: 2,
            })
            .fromTo(".main__text-last",{opacity: 0},{opacity: 1, duration: 2,} ,"<80%")
            .to(".main__text-last",{opacity: 0, duration: 1, delay: 1.5})
        }else if(500 < winWidth && winWidth <= 759){
            mainTxt
            .to(".big-text h1 span", {
                duration: 0.7,
                yPercent: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(1, 0.3),
                stagger: {
                each: 0.7,
                amount: 0.5
                }
            },1)
            .fromTo(".smile",{opacity: 0},{opacity: 1, duration: 0.5,  y: 0, ease: Elastic.easeOut.config(1, 0.5)})
            .to(q("#preSmile"), {
                morphSVG: q("#afterSmile"),
                // delay: 0.5,
                duration: 0.5,
                ease: "none"
            })
            .to(".small-text-wrap", {
                duration: 0.8,
                delay: 1,
                top: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(0.5, 0.45),
            })
            .to(".small-text-wrap", {
                duration: 0.8,
                delay: 3,
                top: -50,
                ease: Elastic.easeOut.config(0.5, 0.45),
            })
            .to(".main__text",{
                opacity: 0,
                delay: 1.5,
                duration: 2,
            })
            .fromTo(".main__text-last",{opacity: 0},{opacity: 1, duration: 2,} ,"<80%")
            .to(".main__text-last",{opacity: 0, duration: 1, delay: 1.5})
        }else if(winWidth <= 500){
            mainTxt
            .to(".big-text h1 span", {
                duration: 0.7,
                yPercent: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(1, 0.3),
                stagger: {
                each: 0.7,
                amount: 0.5
                }
            },1)
            .fromTo(".smile",{opacity: 0},{opacity: 1, duration: 0.5,  y: 0, ease: Elastic.easeOut.config(1, 0.5)})
            .to(q("#preSmile"), {
                morphSVG: q("#afterSmile"),
                // delay: 0.5,
                duration: 0.5,
                ease: "none"
            })
            .to(".small-text-wrap", {
                duration: 0.8,
                delay: 1,
                top: 0,
                opacity: 1,
                ease: Elastic.easeOut.config(0.5, 0.45),
            })
            .to(".small-text-wrap", {
                duration: 0.8,
                delay: 3,
                top: -25,
                ease: Elastic.easeOut.config(0.5, 0.45),
            })
            .to(".main__text",{
                opacity: 0,
                delay: 1.5,
                duration: 2,
            })
            .fromTo(".main__text-last",{opacity: 0},{opacity: 1, duration: 2,} ,"<80%")
            .to(".main__text-last",{opacity: 0, duration: 1, delay: 1.5})
        }

    })
    
    return(
        <>
            <div className="main__block">
                <div className="main__wrap">
                    <div className="main__text">
                        <div className="big-text">
                            <h1 ref={welcome}>welcome</h1>
                            <svg className="smile" version="1.0" xmlns="http://www.w3.org/2000/svg" width="110.000000pt" height="80.000000pt" viewBox="0 0 110.000000 80.000000"  preserveAspectRatio="xMidYMid meet" ref={smile}>
                                <g transform="translate(0.000000,80.000000) scale(0.050000,-0.050000)" fill="#efd97f" stroke="none">
                                    <path id="preSmile" d="M208 1571 c-144 -62 -171 -212 -60 -323 95 -95 189 -95 284 0 165 165 -10 417 -224 323z M1828 1571 c-144 -62 -171 -212 -60 -323 95 -95 189 -95 284 0 165 165 -10 417 -224 323z"/>
                                    <path id="afterSmile" d="M195 1572 c-103 -37 -128 -61 -167 -163 -59 -155 66 -215 136 -66 60 128 191 129 251 2 52 -110 165 -108 165 2 0 158 -218 285 -385 225z M1810 1570 c-178 -63 -264 -300 -108 -300 35 0 57 19 82 73 60 128 191 129 251 2 57 -120 182 -104 157 21 -35 173 -208 266 -382 204z"/>
                                    
                                    <path d="M144 496 c-161 -161 468 -482 946 -482 478 0 1107 321 946 482 -40 40 -75 28 -173 -58 -426 -376 -1215 -360 -1582 31 -52 55 -99 65 -137 27z"/>
                                </g>
                            </svg>
                        </div>
                        <div className="small-text-block mt-35">
                            <div className="small-text-wrap">
                                <p>I will introduce my workspace</p>
                                <p>Click on the menus you are interested in!</p>
                            </div>
                        </div>
                    </div>
                    <div className="main__text-last">
                        <h1>Thank You💛</h1>
                    </div>
                </div>               
            </div>
        </>
    );
}

export default Main;