import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
    useEffect(() => {
        // page transition
        setTimeout(function () {
            document.getElementById("cover").classList.add("cover-left");
        });

        function pageClick() {
            document.querySelectorAll(".link_click").forEach((elem) => {
                elem.addEventListener("click", (e) => {
                    e.preventDefault();
                    const dataName = elem.getAttribute('data-name');
                    console.log(dataName);
                    document.getElementById("cover").classList.add("cover-right");
                    setTimeout(() => {
                        window.location.href =
                            "http://localhost:3000/" + dataName;
                    }, 2000);
                });
            });
        }
        pageClick();
    });


    return (
        <>
            <div id='cover'></div>
            <Header />
            <Main />
        </>
    );
}

export default Home;