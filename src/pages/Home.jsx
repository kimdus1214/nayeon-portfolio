import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Main from "../components/Main";
import Job from "../components/Job";
import Paging from "../components/Paging";

function Home() {
    return (            
        <div className="home">
            <div className='noise-wrap'></div>
            <Header />
            <Main />
            <Aside />
            <Job />
            <Paging name="nayeon" page="portfolio"/>
        </div>
    );
}

export default Home;