import React, { useEffect, useRef,useState } from "react";
// import './style/common.css';
import './style/sub.css';
import './style/progress.scss';
import { AiTwotoneHeart } from "react-icons/ai";
import {gsap, Elastic } from 'gsap';
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";
import CountUp from 'react-countup';
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
            duration: 0.5,
            ease: "none"
        })
    })

    const stack = useRef(null);
    const [action, setAction] = useState(false);
    useEffect(()=>{        
        window.addEventListener('scroll',stackAnimation)
    })

    const stackAnimation = ()=>{
        let currentSCT = window.scrollY;
        let stackOST = stack.current.offsetTop - 300;
        // console.log(currentSCT);
        // console.log(stackOST);
        if(currentSCT >= stackOST) {
            setAction(true);
        }
    }
    
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
                    <div className="aboutMe border-top-point">
                        <div className="aboutMe__tit tit">
                            <h1>about me</h1>
                        </div>
                        <div className="contents__right">
                            <div className="profile pb-35 border-bottom-white">
                                <h2 className="sub-tit"><AiTwotoneHeart /><b>profile</b></h2>
                                <div className="profile__imgTxt mt-20">
                                    <div className="profile-img">
                                        <img src={process.env.PUBLIC_URL + './assets/sub/profile.jpg'} alt="profile" />
                                    </div>
                                    <ul>
                                        <li>
                                            <b>Name.</b>
                                            <p>?????????</p>
                                        </li>
                                        <li>
                                            <b>Birth.</b>
                                            <p>1992.12.14</p>
                                        </li>
                                        <li>
                                            <b>Education.</b>
                                            <p>
                                                ???????????????????????? ?????? <br/>
                                                ?????????IT???????????? ??????????????? ????????? ?????? ??????
                                            </p>
                                        </li>
                                        <li>
                                            <b>Certification.</b>
                                            <p>
                                                ???????????????????????????????????? <br/>
                                                ?????????????????????
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="keyword mt-35 pb-35 border-bottom-white">
                                <h2 className="sub-tit"><AiTwotoneHeart /><b>keyword</b></h2>
                                <p>#???????????? #???????????? ?????? #????????? ??? ????????? #???????????? #?????????</p>
                            </div>
                            <div className="techStack mt-35 pb-35" ref={stack}>
                                <h2 className="sub-tit"><AiTwotoneHeart /><b>Tech Stack</b></h2>
                                <ul className="mt-50">
                                    <li>
                                        <strong>html/css</strong>
                                        <div className="progressbar">
                                            <svg className="progressbar__svg">
                                                <circle cx="50" cy="50" r="40" className={`progressbar__svg-circle stroke-html ${action ? 'circle-html': ''}`}></circle>
                                            </svg>
                                            {action&&
                                                <CountUp start={0} end={95} duration={1} className="progressbar__text text-html"></CountUp>
                                            }
                                        </div>
                                        <p>??????????????? ????????? ??????????????? <br/>????????? ??? ?????? ????????? ???????????????.</p>
                                    </li>
                                    <li>
                                        <strong>Javascript</strong>
                                        <div className="progressbar">
                                            <svg className="progressbar__svg">
                                                <circle cx="50" cy="50" r="40" className={`progressbar__svg-circle stroke-js ${action ? 'circle-js': ''}`}> </circle>
                                            </svg>
                                            {action&&
                                                <CountUp start={0} end={85} duration={1} className="progressbar__text text-js"></CountUp>
                                            }
                                        </div>
                                        <p>?????? ????????????????????? ????????? <br/>es6 ????????? ??????????????? ???????????????.</p>
                                    </li>
                                    <li>
                                        <strong>jquery</strong>
                                        <div className="progressbar">
                                            <svg className="progressbar__svg">
                                                <circle cx="50" cy="50" r="40" className={`progressbar__svg-circle stroke-jq ${action ? 'circle-jq': ''}`}> </circle>
                                            </svg>
                                            {action&&
                                                <CountUp start={0} end={85} duration={1} className="progressbar__text text-jq"></CountUp>
                                            }
                                        </div>
                                        <p>??????????????? ????????? <br/>?????? ?????? ??? ????????? ???????????????.</p>
                                    </li>
                                    <li>
                                        <strong>React.js</strong>
                                        <div className="progressbar">
                                            <svg className="progressbar__svg">
                                                <circle cx="50" cy="50" r="40" className={`progressbar__svg-circle stroke-react ${action ? 'circle-react': ''}`}> </circle>
                                            </svg>
                                            {action&&
                                                <CountUp start={0} end={80} duration={1} className="progressbar__text text-react"></CountUp>
                                            }
                                        </div>
                                        <p>???????????? ????????? <br/>UI ????????? ???????????????.</p>
                                    </li>
                                    <li>
                                        <strong>Design Tool</strong>
                                        <div className="progressbar">
                                            <svg className="progressbar__svg">
                                                <circle cx="50" cy="50" r="40" className={`progressbar__svg-circle stroke-design ${action ? 'circle-design': ''}`}> </circle>
                                            </svg>
                                            {action&&
                                                <CountUp start={0} end={95} duration={1} className="progressbar__text text-design"></CountUp>
                                            }
                                        </div>
                                        <p>????????? ?????????, ???????????? ?????? ???????????? <br/>????????? ??? ????????? ???????????????.</p>                                
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="career border-top-point">                        
                        <div className="career__tit tit">
                            <h1>Career</h1>                            
                        </div>
                        <div className="contents__right">
                            <table>
                                <tr>
                                    <td>??????????????? ??????????????? ???????????? ??????</td>
                                    <td>????????? ??????</td>
                                </tr>
                                <tr>
                                    <td>??????????????? ??????????????? ???????????? ??????</td>
                                    <td>????????? ??? ???????????? ??????</td>
                                </tr>
                                <tr>
                                    <td>????????? ????????? ???????????? ??????</td>
                                    <td>????????? ??????</td>
                                </tr>
                                <tr>
                                    <td>406????????? ???????????? ????????? ??????</td>
                                    <td>????????? ??????</td>
                                </tr>
                                <tr>
                                    <td>?????? ????????? ?????????</td>
                                    <td>???????????? ??????</td>
                                </tr>                                
                            </table>
                        </div>
                    </div>
                    <div className="skills border-top-point">                        
                        <div className="skills__tit tit">
                            <h1>Skills</h1>
                            <span>used in portfolio</span>
                        </div>
                        <div className="contents__right">
                            <ul>
                                <li>
                                    <img src={process.env.PUBLIC_URL + './assets/sub/jsIcon.png'} alt="javascript icon" />
                                    <p>JavaScript</p>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + './assets/sub/reactIcon.png'} alt="react icon" />
                                    <p>React.js</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;