import React from "react";

import Topheader from "../../Topheader";
import Ad970_90 from "../../ads/Ad970_90";
import Ad160_600 from "../../ads/Ad160_600";
import Header from "../../Header";
import Footer from "../../Footer";
import Cricketteams from "./Cricketteams";

const Cricket = () => {
    return (
        <section className="seccricket">
            <Topheader />
            <Ad970_90 />
            <section className="main-wrap">
                <Ad160_600 />
                <div className="container">
                    <Header />
                    <Cricketteams />
                </div>
                <Ad160_600 />
            </section>
            <Footer />
        </section>
    );
}

export default Cricket;