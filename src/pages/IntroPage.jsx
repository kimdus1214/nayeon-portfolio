import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Intro from "../components/Intro";

function IntroPage() {
    return (
        <div className="wrap">
            <Header />
            <Intro />
            <Aside />
        </div>
    );
}

export default IntroPage;