import React, { useEffect, useRef } from "react";
import './style/sub.css';
import { AiTwotoneHeart } from "react-icons/ai";
import {gsap, Elastic } from 'gsap';
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

function Intro(){
    const hello = useRef(null);
    const smile = useRef(null);
    const q = gsap.utils.selector(smile);
    MorphSVGPlugin.convertToPath(q("#preSmile"));

    useEffect(()=>{
        let subTit = gsap.timeline({repeat:-1, repeatDelay: 1});
        let helloTxt = hello.current.innerText.split('').map(item=> `<span>${item}</span>`);
        hello.current.innerHTML=helloTxt.join('');  

        subTit
        .to(".title h1 span", {
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
    })

    return(
        <section className="intro-block sub-block">
            <div className="sub-wrap">
                <div className="title">
                    <h1 ref={hello}>Hello!</h1>
                    <svg className="smile" version="1.0" xmlns="http://www.w3.org/2000/svg" width="110.000000pt" height="80.000000pt" viewBox="0 0 110.000000 80.000000"  preserveAspectRatio="xMidYMid meet" ref={smile}>
                        <g transform="translate(0.000000,80.000000) scale(0.050000,-0.050000)" fill="#efd97f" stroke="none">
                            <path id="preSmile" d="M208 1571 c-144 -62 -171 -212 -60 -323 95 -95 189 -95 284 0 165 165 -10 417 -224 323z M1828 1571 c-144 -62 -171 -212 -60 -323 95 -95 189 -95 284 0 165 165 -10 417 -224 323z"/>
                            <path id="afterSmile" d="M195 1572 c-103 -37 -128 -61 -167 -163 -59 -155 66 -215 136 -66 60 128 191 129 251 2 52 -110 165 -108 165 2 0 158 -218 285 -385 225z M1810 1570 c-178 -63 -264 -300 -108 -300 35 0 57 19 82 73 60 128 191 129 251 2 57 -120 182 -104 157 21 -35 173 -208 266 -382 204z"/>
                            
                            <path d="M144 496 c-161 -161 468 -482 946 -482 478 0 1107 321 946 482 -40 40 -75 28 -173 -58 -426 -376 -1215 -360 -1582 31 -52 55 -99 65 -137 27z"/>
                        </g>
                    </svg>
                </div>
                <div className="contents mt-100">
                    <div className="aboutMe">
                        <h2 className="sub-tit"><AiTwotoneHeart /><b>About me</b></h2>
                        <ul className="mt-20">
                            <li>name. 김나연</li>
                            <li>birth. 1992.12.14</li>
                            <li>region. busan</li>
                            <li>
                                <div>
                                    <b>career. </b>                
                                    <ul>
                                        <li><b>2021.11~</b> </li>
                                        <li><b>2021.11~</b> </li>
                                        <li><b>2021.11~</b> 시아 재직중</li>
                                    </ul>
                                </div>
                            </li>                            
                        </ul>
                    </div>
                    <div className="keyword mt-50">
                        <h2 className="sub-tit"><AiTwotoneHeart /><b>keyword</b></h2>
                        <p className="mt-20">#끈기있는 #책임감이 강한 #약속을 잘 지키는 #탐구하는 #차분한</p>
                    </div>
                    <div className="introduce mt-35">                        
                        <p>
                            안녕하세요. <br/>
                            어린 시절에는 막연히 디자인에 대한 호기심이 많았지만, 다양한 디자인 직무 경험들을 통해 <br/>
                            디자인보다는 어떤 문제에 대한 고민과 해결에 대한 흥미와 능력이 더 좋음을 알게되었습니다. <br/>
                            이 계기를 통해 프론트엔드 파트에 대한 심화 공부를 하게 되었습니다. <br/>
                            학원 수업을 통해 기본적인 코딩 역량을 성장 시킴과 동시에 다양한 라이브러리와 프레임워크를 경험하였습니다. <br/>
                            이 후 퍼블리셔로 활동을 하면서 나날이 더 성장하기위해 꾸준히 노력하고 있습니다. <br/>
                            새로운 기술을 겁내하지 않고 항상 발전하는 퍼블리셔가 되겠습니다.
                        </p>
                    </div>
                    <div className="skill mt-50">
                        <h2 className="sub-tit"><AiTwotoneHeart /><b>skills</b></h2>
                        <ul className="mt-20">
                            <li>
                                <strong>HTML/CSS</strong>
                                <p>반응형으로 원하는 레이아웃과 스타일 및 효과 구현이 가능합니다.</p>
                            </li>
                            <li>
                                <strong>Javascript</strong>
                                <p>순수 자바스크립트의 활용과 es6 문법의 코드분석이 가능합니다.</p>
                            </li>
                            <li>
                                <strong>jquery</strong>
                                <p>제이쿼리를 활용한 코드 분석 및 구현이 가능합니다.</p>
                            </li>
                            <li>
                                <strong>React.js</strong>
                                <p>리액트를 활용한 UI 구축이 가능합니다.</p>
                            </li>
                            <li>
                                <strong>Design Tool</strong>
                                <p>어도비 포토샵, 일러스트 툴을 사용하여 디자인 및 편집이 가능합니다.</p>                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>           
        </section>
    );
}

export default Intro;