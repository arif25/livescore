import React from "react";
import Leftpanel from './Leftpanel';
import Centerpanel from './Centerpanel';
import Rightpanel from "./Rightpanel";

const Bodyhome = () => {
    return(
        <section className="secbody">
            <div className="innercontainer">
                <div className="leftpanel scrolldesign">
                    <Leftpanel />
                </div>
                <div className="centerpanel scrolldesign">
                    <Centerpanel />
                </div>
                <div className="rightpanel scrolldesign">
                    <Rightpanel />
                </div>
            </div>
        </section>
    );
}

export default Bodyhome;