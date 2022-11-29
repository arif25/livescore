import React, {useState, useEffect} from "react";
import $ from "jquery";

import Close from '../Assets/images/close.png';
import Logoworldcup from '../Assets/images/logoworldcup.png';
import Favorite from '../Assets/images/favorite.png';
import Downarrow from '../Assets/images/downarrow.png';

const Searchpopup = (display) => {
    const [searchtoggle, setSearchtoggle] = useState(false);    
    const closesearchbox = () => {
        $(".popupcomponents").hide();
    }
    return(
        <aside className="asipopup">
            <div className="opacitypopup"></div>
            <div className="popupbox">
                <div className="titlepopup">
                    <p>Search</p>
                    <div className="closepopup" onClick={closesearchbox}>
                        <img src={Close} />
                    </div>
                </div>
                <div className="bxsearch">
                    <input type="text" placeholder="Search.." />
                    <div className="searchdropdown">
                        <div className="searchdropcontent">
                            <div className="bxsearchdropcontent" onClick={()=>setSearchtoggle(!searchtoggle)}><span>All sports</span><div className="arrowsearbox"><img src={Downarrow} /></div></div>
                            {
                                searchtoggle? <div className="idsearchdropdown" id="idsearchdropdown">
                                    <ul>
                                        <li>All sports</li>
                                        <li>Alpine Skiing</li>
                                        <li>American football</li>
                                        <li>Aussie rules</li>
                                        <li>Badminton</li>
                                        <li>Bandy</li>
                                        <li>Baseball</li>
                                        <li>Basketball</li>
                                        <li>Beach soccer</li>
                                        <li>Beach volleyball</li>
                                        <li>Biathlon</li>
                                        <li>Boxing</li>
                                        <li>Cricket</li>
                                        <li>Cross-Country Skiing</li>
                                        <li>Cycling</li>
                                    </ul>
                                </div>:null
                            }
                        </div>
                        
                    </div>
                </div>
                <div className="bodypopup">
                    <div className="titlebody">
                        <p>Please type at least 3 characters. The results will start displaying here immediately.</p>
                        <h5>MOST POPULAR SEARCHES</h5>
                    </div>

                    <div className="searchbodycontent">
                        <ul>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                            <li>
                                <div className="searchtourlogoname">
                                    <div className="searchtourlogo">
                                        <img src={Logoworldcup} />
                                    </div>
                                    <div className="searchtourname">
                                        <h5>World Cup</h5>
                                        <p>Soccer, World</p>
                                    </div>
                                </div>
                                <div className="addthisleague">
                                    <img src={Favorite} />
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>                
            </div>
        </aside>
    );
}
export default Searchpopup;