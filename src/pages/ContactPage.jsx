import React from "react";
import Aside from "../components/Aside";
import Contact from "../components/Contact";
import Header from "../components/Header";

function ContactPage() {
    return (
        <div className="wrap">
            <Header />
            <Contact />
            <Aside />
        </div>
    );
}

export default ContactPage;