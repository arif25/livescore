import React from "react";
import Topheader from "../../../Topheader";
import Ad970_90 from "../../../ads/Ad970_90";
import Ad160_600 from "../../../ads/Ad160_600";
import Header from "../../../Header";
import Footer from "../../../Footer";
import Tournamentbody from "./Tournamentbody";

const Worldcupfootball = () => {
    return (
        
        <section className="secfootball">
            <Topheader />
            <Ad970_90 />
            <section className="main-wrap">
                <Ad160_600 />
                <div className="container">
                    <Header />
                    <Tournamentbody />
                </div>
                <Ad160_600 />
            </section>
            <Footer />
        </section>
    );
}

export default Worldcupfootball;