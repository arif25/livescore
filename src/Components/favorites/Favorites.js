import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import Header from "../Header";
import '../Assets/scss/favoriteteams.scss';
import Topheader from "../Topheader";
import Ad970_90 from "../ads/Ad970_90";
import Ad160_600 from "../ads/Ad160_600";
import Footer from "../Footer";
import Favoriteteams from "./Favoriteteams";

const Favorites = () => {
    return (
        <>
            <Topheader />
            <Ad970_90 />
            <section className="main-wrap">
                <Ad160_600 />
                <div className="container">
                    <Header />
                    <Favoriteteams />
                </div>
                <Ad160_600 />
            </section>
            <Footer />
        </>
    );
}

export default Favorites;