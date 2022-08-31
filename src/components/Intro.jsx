import React from "react";
import './style/sub.css';

function Intro(){
    return(
        <section className="intro-block sub-block">
            <div className="sub-wrap">
                인트로페이지
            </div>
            <div className="page-naming">
                <h2>
                    <span className="color-point">intro</span> <br/>
                    page
                </h2>
            </div>
        </section>
    );
}

export default Intro;