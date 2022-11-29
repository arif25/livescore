import React from "react";
import Ad970and280 from '../Assets/images/970X90-banner.png';
import Ad970x250 from '../Assets/images/970x250-ad.png';

const Ad970_280 = () => {
    return (
        <div className="adouterbox mt-24">
            <div className="adbox ad250">
                <div className="stickad">
                    <span>Advertisement</span>
                    <div>
                        <img src={Ad970x250} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Ad970_280;