import React from "react";
import Leftpanel from "../../Leftpanel";
import Rightpanel from "../../Rightpanel";
import Tenniscontents from "./Tenniscontents";
// import Footballcontents from "./Footballcontents";

const Tennisteams = () => {
    return(
        <section className="secbody">
        <div className="innercontainer">
            <div className="leftpanel scrolldesign">
                <Leftpanel />
            </div>
            <div className="centerpanel scrolldesign">
                <section className="tourSummary">
                    {/* <Footballcontents /> */}
                    <Tenniscontents />
                </section>
            </div>
            <div className="rightpanel scrolldesign">
                <Rightpanel />
            </div>
        </div>
    </section>
    );
}
export default Tennisteams;