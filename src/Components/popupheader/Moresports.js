import React from "react";
import $ from 'jquery';
import Close from '../Assets/images/close.png';
import Morefooteball from '../Assets/images/more_football.png';

const Moresports = () => {
    const closepopupmoresports = () => {
        $(".popupmoresports").hide();
    }
    return(
        <section className="secmoresports">
            <aside className="asipopup">
                <div className="opacitypopup"></div>
                <div className="popupbox">
                    <div className="titlepopup"> 
                        <p>More sports</p>
                        <div className="closepopup" onClick={closepopupmoresports}>
                            <img src={Close} />
                        </div>
                    </div>
                    <div className="bodypopup">
                        <div className="bxmoresports">
                            <ul>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Football</span>
                                        <div className="activemoresports">
                                            12
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Badminton</span>
                                        <div className="activemoresports">
                                            32
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Bandy</span>
                                        <div className="activemoresports">
                                            11
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Baseball</span>
                                        <div className="activemoresports">
                                            9
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Basketball</span>
                                        <div className="activemoresports">
                                            7
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Beach soccer</span>
                                        <div className="activemoresports">
                                            3
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Beach volleyball</span>
                                        <div className="activemoresports">
                                            2
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Boxing</span>
                                        <div className="activemoresports">
                                            1
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Cricket</span>
                                        <div className="activemoresports">
                                            21
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Football</span>
                                        <div className="activemoresports">
                                            12
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Badminton</span>
                                        <div className="activemoresports">
                                            32
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Bandy</span>
                                        <div className="activemoresports">
                                            11
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Baseball</span>
                                        <div className="activemoresports">
                                            9
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Basketball</span>
                                        <div className="activemoresports">
                                            7
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Beach soccer</span>
                                        <div className="activemoresports">
                                            3
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Beach volleyball</span>
                                        <div className="activemoresports">
                                            2
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Boxing</span>
                                        <div className="activemoresports">
                                            1
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="iconmoresports">
                                        <img src={Morefooteball} />
                                    </div>
                                    <div className="contentmoresports">
                                        <span>Cricket</span>
                                        <div className="activemoresports">
                                            21
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default Moresports;