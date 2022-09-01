import React from "react";
import Aside from "../components/Aside";
import Contact from "../components/Contact";
import Job from "../components/Job";
import Header from "../components/Header";
import Paging from "../components/Paging";

function ContactPage() {
    return (
        <div className="wrap">
            <Header />
            <Contact />
            <Aside />
            <Job />
            <Paging name="contact" page="page"/>
        </div>
    );
}

export default ContactPage;