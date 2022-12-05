import React from "react";
import { NavLink } from "react-router-dom";
import Football from "./Assets/images/football.png";
import Auad02 from "./Assets/images/auad-02.png";
import Iconindia from './Assets/images/india.png';
import Flagurope from './Assets/images/urope.png';
import Flagengland from './Assets/images/england.png';
import Flagbundesliga from './Assets/images/bundesliga.png';
import Flagseriea from './Assets/images/serie-a.png';
import Flaglaliga from './Assets/images/la-liga.png';

const Leftpanel = () => {
    return(
        <section className="secleftpanel">
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Football</p>
                </div>
                <ul>
                    <li>
                        <NavLink to='/summary' >
                            <div className="iconnav">
                                <img src={Flagurope} />
                            </div>
                            <p>World Cup</p>
                        </NavLink>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                </ul>
            </div>
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Cricket</p>
                </div>
                <ul>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>World Cup</p>
                    </li>
                </ul>
            </div>
            <div className="ad140x626 auadbox">
                <div className="stickad">
                    <span className="adtext">Advertisment</span>
                    <div><img src={Auad02} /></div>
                </div>
            </div>
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Hoccy</p>
                </div>
                <ul>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>World Cup</p>
                    </li>
                </ul>
            </div>
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Football</p>
                </div>
                <ul>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>World Cup</p>
                    </li>
                </ul>
            </div>
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Cricket</p>
                </div>
                <ul>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>World Cup</p>
                    </li>
                </ul>
            </div>
            <div className="ad140x626 auadbox">
                <div className="stickad">
                    <span className="adtext">Advertisment</span>
                    <div><img src={Auad02} /></div>
                </div>
            </div>
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Hoccy</p>
                </div>
                <ul>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>World Cup</p>
                    </li>
                </ul>
            </div>
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Football</p>
                </div>
                <ul>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>World Cup</p>
                    </li>
                </ul>
            </div>
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Cricket</p>
                </div>
                <ul>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>World Cup</p>
                    </li>
                </ul>
            </div>
            <div className="ad140x626 auadbox">
                <div className="stickad">
                    <span className="adtext">Advertisment</span>
                    <div><img src={Auad02} /></div>
                </div>
            </div>
            <div className="bxleftpanel">
                <div className="titleLeftpanel">
                    <div className="iconnav"><img src={Football} /></div> 
                    <p> Hoccy</p>
                </div>
                <ul>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>AFC Cup</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagengland} />
                        </div>
                        <p>EPL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>Champions League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagbundesliga} />
                        </div>
                        <p>Bundesliga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>ISL</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Iconindia} />
                        </div>
                        <p>I-League</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagseriea} />
                        </div>
                        <p>Serie A</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flaglaliga} />
                        </div>
                        <p>LaLiga</p>
                    </li>
                    <li>
                        <div className="iconnav">
                            <img src={Flagurope} />
                        </div>
                        <p>World Cup</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Leftpanel;