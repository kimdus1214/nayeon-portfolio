import React,{useEffect, useRef} from "react";
import './style/sub.css';
import {gsap, Elastic } from 'gsap';
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);


function Contact(){
    const thanks = useRef(null);
    const smile = useRef(null);
    const q = gsap.utils.selector(smile);
    MorphSVGPlugin.convertToPath(q("#preSmile"));

    useEffect(()=>{
        let subTit = gsap.timeline({repeat:-1, repeatDelay: 1});
        let helloTxt = thanks.current.innerText.split('').map(item=> `<span>${item}</span>`);
        thanks.current.innerHTML=helloTxt.join('');  

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


    return(
        <section className="contact-block sub-block">
            <div className="sub-wrap">
                <div className="title">
                    <h1 ref={thanks}>Thanks!</h1>
                    <svg className="smile" version="1.0" xmlns="http://www.w3.org/2000/svg" width="110.000000pt" height="80.000000pt" viewBox="0 0 110.000000 80.000000"  preserveAspectRatio="xMidYMid meet" ref={smile}>
                        <g transform="translate(0.000000,80.000000) scale(0.050000,-0.050000)" fill="#efd97f" stroke="none">
                            <path id="preSmile" d="M208 1571 c-144 -62 -171 -212 -60 -323 95 -95 189 -95 284 0 165 165 -10 417 -224 323z M1828 1571 c-144 -62 -171 -212 -60 -323 95 -95 189 -95 284 0 165 165 -10 417 -224 323z"/>
                            <path id="afterSmile" d="M195 1572 c-103 -37 -128 -61 -167 -163 -59 -155 66 -215 136 -66 60 128 191 129 251 2 52 -110 165 -108 165 2 0 158 -218 285 -385 225z M1810 1570 c-178 -63 -264 -300 -108 -300 35 0 57 19 82 73 60 128 191 129 251 2 57 -120 182 -104 157 21 -35 173 -208 266 -382 204z"/>
                            
                            <path d="M144 496 c-161 -161 468 -482 946 -482 478 0 1107 321 946 482 -40 40 -75 28 -173 -58 -426 -376 -1215 -360 -1582 31 -52 55 -99 65 -137 27z"/>
                        </g>
                    </svg>
                </div>

                <div className="contents mt-60">
                    <div className="contact border-top-point pt-100">
                        <h5>
                            익숙하고 편한 기술에만 길들여져 그것만 고집하는 것이 아닌 <br/>
                            최신 트랜드의 흐름에 발 맞춘 웹사이트를 만들고 싶습니다.
                        </h5>
                        <div className="contact-con mt-60">
                            <p>
                                어린 시절에는 막연히 디자인에 대한 호기심이 많았지만, 다양한 디자인 직무 경험들을 통해 <br/>
                                디자인보다는 어떤 문제에 대한 고민과 해결에 대한 흥미와 능력이 더 좋음을 알게 되었습니다. <br/>
                                이 계기를 통해 프론트엔드 파트에 대한 심화 공부를 하게 되었고 학원 수업을 통해 <br/>
                                기본적인 코딩 역량을 성장 시킴과 동시에 다양한 라이브러리와 프레임워크를 경험하였습니다. <br/>
                                이 후 퍼블리셔로 활동을 하면서 더 성장하기 위해 꾸준히 노력하고 있습니다.
                            </p>
                            <p>
                                항상 사용자의 관점을 고려하여 디자인을 어떻게 화면에 보여지게 할지 고민하는 퍼블리셔가 되겠습니다. <br/>
                                유연한 사고를 갖고 여러 사람들과의 커뮤니메이션을 통해 더 나은 방향을 찾아 고민하며 <br/>현재에 안주하지 않고 성장해나가겠습니다.
                            </p>
                            <p>
                                끝까지 저의 포트폴리오를 봐주셔서 감사합니다. <br/>
                                궁금하신점이 있다면 아래의 주소로 연락주시기 바랍니다.
                            </p>
                        </div>
                        
                        <ul className="mt-60">
                            <li><b>✔ e-mail</b><p>kimdus1214@naver.com</p></li>
                            <li><b>✔ phone</b><p>010.7169.4754</p></li>
                            <li><b>✔ kakaoid</b><p>kimdus1214</p></li>
                        </ul>
                    </div>
                </div>
            </div>          
        </section>
    );
}

export default Contact;