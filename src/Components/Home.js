import React from "react";
import { NavLink } from "react-router-dom";
import Ad970_90 from "./ads/Ad970_90";
import Ad160_600 from "./ads/Ad160_600";
import Header from "./Header";
import Bodyhome from "./Bodyhome";
import './Assets/scss/home.scss';
import './Assets/scss/header.scss';
import Footer from "./Footer";
import Ad970and280 from "./ads/Ad970_280";
import Topheader from "./Topheader";
import Apifootball from "./summary/Apifootball";

const Home = () => {
    return(
        <>
        <section className="Apifootball">
            <Apifootball />
        </section>

            <Topheader />
            <Ad970_90 />
            <section className="main-wrap">
                <Ad160_600 />
                <div className="container">
                    <Header />
                    <Bodyhome />
                </div>
                <Ad160_600 />
            </section>
            <Ad970and280 />
            <Footer />
        </>
    );
}

export default Home;