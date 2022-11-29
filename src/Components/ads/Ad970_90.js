import React from "react";
import adimage970 from '../Assets/images/970X90-banner.png';

const Ad970_90 = () => {
    return (
        <section className="sectopbanner">
            <div className="container">
                <div className="adouterbox">
                    <div className="adbox ad90">
                        <div className="stickad">
                            <span>Advertisement</span>
                            <div>
                                <img src={adimage970} />                                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ad970_90;