import React from "react";
import Leftpanel from "../Leftpanel";
import Rightpanel from "../Rightpanel";
import Football from "../Assets/images/football.png";
import Favoritecontents from "./Favoritecontents";

const Favoriteteams = () => {
    return(
        <section className="secbody">
        <div className="innercontainer">
            <div className="leftpanel scrolldesign">
                <Leftpanel />
            </div>
            <div className="centerpanel scrolldesign">
                {/* <Centerpanel /> */}
                <section className="seccenterpanel">
                    <div className="breadcrumbsTournament">
                        <li>
                            <img src={Football} />
                            <span>Games</span>
                        </li>        
                    </div>
                    <div className="navtournament">
                        <ul>
                            <li>
                                {/* <NavLink to='/summary' > */}
                                Timeline
                                {/* </NavLink> */}
                            </li>
                            <li> Yesterday </li>
                            <li> Live </li>
                        </ul>
                    </div>                      
                </section>
                <section className="tourSummary">
                    <Favoritecontents />
                </section>
            </div>
            <div className="rightpanel scrolldesign">
                <Rightpanel />
            </div>
        </div>
    </section>
    );
}

export default Favoriteteams;