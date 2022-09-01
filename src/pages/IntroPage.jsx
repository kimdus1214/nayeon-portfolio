import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Job from "../components/Job";
import Paging from "../components/Paging";

function IntroPage() {
    return (
        <div className="wrap">
            <Header />
            <Intro />
            <Aside />
            <Job />
            <Paging name="intro" page="page"/>
        </div>
    );
}

export default IntroPage;