import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Project from "../components/Project";
import Job from "../components/Job";
import Paging from "../components/Paging";

function ProjectPage() {
    return (
        <div className="wrap">
            <Header />
            <Project />        
            <Aside />
            <Job />
            <Paging name="project" page="page"/>
        </div>
    );
}

export default ProjectPage;