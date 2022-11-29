import React from "react";
import $ from "jquery";
import Close from '../Assets/images/close.png';
import Settings from '../Assets/images/settings.png';
import Arrowright from '../Assets/images/arrow-right.png';
import Moon from '../Assets/images/moon.png';
import Language from '../Assets/images/language.png';
import Darkmode from '../Assets/images/transfer.png';

const Menupopup = () =>{
    const closepopuplogin = () => {
        $(".popupMenu").hide();
    }
    return(
        <section className="secMenupopup">
            <aside className="asipopup">
                <div className="opacitypopup"></div>
                <div className="popupbox">
                    <div className="titlepopup"> 
                        <p>Menu</p>
                        <div className="closepopup" onClick={closepopuplogin}>
                            <img src={Close} />
                        </div>
                    </div>
                    <div className="bodypopup">
                        <div className="titlebody">
                            <ul>
                                <li>
                                    <div className="menulisticoncontent">
                                        <img src={Settings} />
                                        <p>Settings</p>
                                    </div>
                                    <div className="menulistfuncicon">
                                        <img src={Arrowright} />
                                    </div>
                                </li>
                                <li>
                                    <div className="menulisticoncontent">
                                        <img src={Moon} />
                                        <p>Darkmode</p>
                                    </div>
                                    <div className="menulistfuncicon">
                                        <img src={Darkmode} />
                                    </div>
                                </li>
                                <li>
                                    <div className="menulisticoncontent">
                                        <img src={Language} />
                                        <p>Language</p>
                                    </div>
                                    <div className="menulistfuncicon">
                                        <img src={Arrowright} />
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

export default Menupopup;