
import React from "react";
import Leftpanel from "../../Leftpanel";
import Rightpanel from "../../Rightpanel";
import Footballcontents from "./Footballcontents";

const Footballteams = () => {
    return(
        <section className="secbody">
        <div className="innercontainer">
            <div className="leftpanel scrolldesign">
                <Leftpanel />
            </div>
            <div className="centerpanel scrolldesign">
                <section className="tourSummary">
                    <Footballcontents />
                </section>
            </div>
            <div className="rightpanel scrolldesign">
                <Rightpanel />
            </div>
        </div>
    </section>
    );
}

export default Footballteams;