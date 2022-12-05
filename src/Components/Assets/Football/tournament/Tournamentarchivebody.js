
import React from "react";
import '../../scss/tabinside.scss';
import Leftpanel from "../../../Leftpanel";
import Rightpanel from "../../../Rightpanel";
import Football from "../../images/football.png";
import Flagurope from '../../images/urope.png';
import Arrowright from '../../images/arrow-right.png';
import Logoworldcup from '../../images/logoworldcup.png';
import Staryellow from '../../images/star-yellow.png';
import Summary from "../../../summary/Summary";
import { NavLink } from "react-router-dom";
import Tournamentresultcontent from "../../../summary/Tournamentresultcontent";
import Tournamentfixturescontent from "../../../summary/Tournamentfixturescontent";
import Tournamentarchivecontent from "../../../summary/Tournamentarchivecontent";

const Tournamentarchivebody = () => {
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
                                <span>FOOTBALL</span>
                            </li>    
                            <li className="breadarrowright">
                                <img src={Arrowright} />
                            </li>
                            <li>
                                <img src={Flagurope} />
                                <span>WORLD</span>
                            </li>        
                        </div>    
                        <div className="tournamentlogocontent">
                            <div className="tournamentlogo">
                                <img src={Logoworldcup} />                            
                            </div>
                            <div className="tournamentcontent">
                                <div className="tounamenttitle">
                                    <span>World Cup</span>
                                    <img src={Staryellow} />
                                </div>
                                <div className="tournamentyear">
                                    2022
                                </div>
                            </div>
                        </div>  
                        <div className="navtournament">
                            <ul>
                                <li>
                                    <NavLink to='/summary' >
                                    Summary
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/results' >
                                        Results
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/fixtures' >
                                        Fixtures
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/standing' >
                                        Standings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/archive' >
                                        Archive
                                    </NavLink>
                                </li>
                            </ul>
                        </div>                      
                    </section>
                    <section className="tourSummary">
                        {/* <Summary /> */}
                        {/* <Tournamentresultcontent /> */}
                        {/* <Tournamentfixturescontent /> */}
                        <Tournamentarchivecontent />
                    </section>
                </div>
                <div className="rightpanel scrolldesign">
                    <Rightpanel />
                </div>
            </div>
        </section>
    );
}

export default Tournamentarchivebody;