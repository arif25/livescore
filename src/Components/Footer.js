import React from "react";
import './Assets/scss/footer.scss';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <ul>
                    <li>
                        <h3>LIVESPORT.COM</h3>
                        <div><a href="javascript:void(0)">Terms of Use</a></div>
                        <div><a href="javascript:void(0)">Advertise</a></div>
                        <div><a href="javascript:void(0)">Contact</a></div>
                        <div><a href="javascript:void(0)">Mobile</a></div>
                    </li>
                    <li>
                        <h3></h3>
                        <div><a href="javascript:void(0)">Live Scores</a></div>
                        <div><a href="javascript:void(0)">Recommended Sites</a></div>
                        <div><a href="javascript:void(0)">FAQ</a></div>
                    </li>
                    <li>
                        <h3>FOLLOW US</h3>
                        <div><a href="javascript:void(0)">Twitter</a></div>
                        <div><a href="javascript:void(0)">Instagram</a></div>
                    </li>
                    <li>
                        <h3>MOBILE APPLICATIONS</h3>
                        <div><p>Our mobile app is optimized for your phone. Download it for free!</p></div>
                    </li>
                </ul>                
            </div>
            <div className="footercopyright ">
                <div className="container">
                    <p><span>Copyright © 2012-22 Livescore.com</span> <span><a href="javascript:void(0)"> Set privacy</a></span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;