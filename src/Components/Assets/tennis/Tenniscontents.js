import React from "react";
import Star from '../images/star.png';
import Islnortheast from '../images/isl-northeast.png';
import Islmimbaicity from '../images/isl-mimbaicity.png';
import Livestreaming from '../images/live-stream.png';

const Tenniscontents = () => {
    return(
        <section className="secsummary ">
            <div className="bxmatchdetails seccenterpanel">
                <div className="tableMatch">
                    <div className="titleMatchTable">
                        <div className="starflagcountry">
                            <span> WORLD World Cup (Tennis)</span>
                        </div>
                        <div className="titlestanding">
                            <span>Standings</span> 
                        </div>
                    </div>
                    <div className="matchTablebody">
                        <div className="matchtablerow">
                            <div className="matchfavorite">
                                <div className="iconnav"><img src={Star} /></div>
                            </div>
                            <div className="matchtime">01.12. 00:30</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Argentina</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">Poland</span>
                                </div>
                            </div>
                            <div className="matchresultpreview">                            
                                <a>Preview</a>
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
                            <div className="matchfavorite">
                                <div className="iconnav"><img src={Star} /></div>
                            </div>
                            <div className="matchtime">01.12. 00:30</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Argentina</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">Poland</span>
                                </div>
                            </div>
                            <div className="matchresultpreview">                            
                                <a>Preview</a>
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
                            <div className="matchfavorite">
                                <div className="iconnav"><img src={Star} /></div>
                            </div>
                            <div className="matchtime">01.12. 00:30</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Argentina</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">Poland</span>
                                </div>
                            </div>
                            <div className="matchresultpreview">                            
                                <a>Preview</a>
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
            </div>
        </section>
    );
}

export default Tenniscontents;