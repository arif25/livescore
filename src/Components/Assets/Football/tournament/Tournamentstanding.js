import React from "react";
import Topheader from "../../../Topheader";
import Ad970_90 from "../../../ads/Ad970_90";
import Ad160_600 from "../../../ads/Ad160_600";
import Header from "../../../Header";
import Tournamentbody from "./Tournamentbody";
import Footer from "../../../Footer";
import Tournamentresultsbody from "./Tournamentresultsbody";
import Tournamentfixturesbody from "./Tournamentfixturesbody";
import Tournamentstandingbody from "./Tournamentstandingbody";

const Tournamentstanding = () =>{
    // Results
    return(
        <section className="secfootball secresults">
            <Topheader />
            <Ad970_90 />
            <section className="main-wrap">
                <Ad160_600 />
                <div className="container">
                    <Header />
                    {/* <Tournamentbody />  */}
                    {/* Tournamentbody */}
                    Tournamentstanding body
                    {/* <Tournamentresultsbody /> */}
                    {/* <Tournamentfixturesbody /> */}
                    <Tournamentstandingbody />
                </div>
                <Ad160_600 />
            </section>
            <Footer />
        </section>
    );
}

export default Tournamentstanding;