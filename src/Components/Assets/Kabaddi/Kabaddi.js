import React from "react";
import Kabadditeams from "./Kabadditeams";
import Topheader from "../../Topheader";
import Ad970_90 from "../../ads/Ad970_90";
import Ad160_600 from "../../ads/Ad160_600";
import Header from "../../Header";
import Footer from "../../Footer";

const Kabaddi = () => {
    return(
        <section className="secfootball">
            <Topheader />
            <Ad970_90 />
            <section className="main-wrap">
                <Ad160_600 />
                <div className="container">
                    <Header />
                    <Kabadditeams />
                </div>
                <Ad160_600 />
            </section>
            <Footer />
        </section>
    );
}
export default Kabaddi;