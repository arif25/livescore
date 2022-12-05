import React from "react";
import Star from '../Assets/images/star.png';
import Footballwhite from '../Assets/images/footballwhite.png';
import Iconindia from '../Assets/images/india.png';
import Uparrow from '../Assets/images/arrow-up.png';
import Yellowstar from '../Assets/images/star-yellow.png';
import Islnortheast from '../Assets/images/isl-northeast.png';
import Islmimbaicity from '../Assets/images/isl-mimbaicity.png';
import Livestreaming from '../Assets/images/live-stream.png';

const Livecenterpanel = () =>{
    return(
        <section className="seclivecenterpanel">
            <div className="tableMatch">
                    <div className="headingGame">
                        <img src={Footballwhite} />
                        <span>Football</span>
                    </div>
                    <div className="titleMatchTable">
                        <div className="starflagcountry">
                            <div className="iconnav"><img src={Yellowstar} /></div>
                            <div className="iconnav"><img src={Iconindia} /></div>
                            <span> INDIA ISL</span>
                        </div>
                        <div className="titlestanding">
                            <span>Standing</span> 
                            <img src={Uparrow} />
                        </div>
                    </div>
                    <div className="matchTablebody">
                        <div className="matchtablerow">
                            <div className="matchfavorite">
                                <div className="iconnav"><img src={Star} /></div>
                            </div>
                            <div className="matchtime">19:30</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>North East Utd</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span>Mumbai City</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                <div className="matchresultone">2</div>
                                <div className="matchresulttwo">0</div>
                            </div>

                            <div className="matchaudiolivestreaming">
                                <div className="matchaudiostreaming">
                                    <img src={Livestreaming} />
                                </div>
                                <div className="matchaudiostreaming">
                                    <a href="javascript:void(0)"> Live</a>
                                </div>
                            </div>

                        </div>
                        <div className="matchtablerow">
                                <div className="iconnav"><img src={Star} /></div>
                            <div className="matchtime">19:30</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>North East Utd</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span>Mumbai City</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                <div className="matchresultone">2</div>
                                <div className="matchresulttwo">0</div>
                            </div>                        
                            
                            <div className="matchaudiolivestreaming">
                                <div className="matchaudiostreaming">
                                    <img src={Livestreaming} />
                                </div>
                                <div className="matchaudiostreaming">
                                    <a href="javascript:void(0)"> Live</a>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Livecenterpanel;
