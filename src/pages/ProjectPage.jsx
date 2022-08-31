import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Project from "../components/Project";

function ProjectPage() {
    return (
        <div className="wrap">
            <Header />
            <Project />        
            <Aside />
        </div>
    );
}

export default ProjectPage;