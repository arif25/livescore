import React from "react";
import $ from "jquery";
import Calender from '../images/calendar.png';
import Star from '../images/star.png';
import Islnortheast from '../images/isl-northeast.png';
import Islmimbaicity from '../images/isl-mimbaicity.png';
import Livestreaming from '../images/live-stream.png';
import Allcenterpanel from "../../navcenterpanel/Allcenterpanel";
import Livecenterpanel from "../../navcenterpanel/Livecenterpanel";
import Finishedcenterpanel from "../../navcenterpanel/Finishedcenterpanel";
import Schedule from "../../navcenterpanel/Schedule";

const Cricketcenterpanel = () => {
    const allcenterpanel = (event) => {
        $("#artiAllCenterpanel").show();
        $("#artiLiveCenterpanel").hide();
        $("#artiFinishedCenterpanel").hide();
        $("#artiScheduleCenterpanel").hide();
        $('.linavcelter1').addClass("active");
        $('.linavcelter2').removeClass("active");
        $('.linavcelter3').removeClass("active");
        $('.linavcelter4').removeClass("active");
    }
    const livecenterpanel = () => {
        $("#artiAllCenterpanel").hide();
        $("#artiLiveCenterpanel").show();
        $("#artiFinishedCenterpanel").hide();
        $("#artiScheduleCenterpanel").hide();
        $('.linavcelter2').addClass("active");
        $('.linavcelter1').removeClass("active");
        $('.linavcelter3').removeClass("active");
        $('.linavcelter4').removeClass("active");
    }
    const finishedcenterpanel = () => {
        $("#artiAllCenterpanel").hide();
        $("#artiLiveCenterpanel").hide();
        $("#artiFinishedCenterpanel").show();
        $("#artiScheduleCenterpanel").hide();
        $('.linavcelter3').addClass("active");
        $('.linavcelter1').removeClass("active");
        $('.linavcelter2').removeClass("active");
        $('.linavcelter4').removeClass("active");
    }
    const scheduledcenterpanel = () => {
        $("#artiAllCenterpanel").hide();
        $("#artiLiveCenterpanel").hide();
        $("#artiFinishedCenterpanel").hide();
        $("#artiScheduleCenterpanel").show();
        $('.linavcelter4').addClass("active");
        $('.linavcelter1').removeClass("active");
        $('.linavcelter2').removeClass("active");
        $('.linavcelter3').removeClass("active");
    }
    return(
        <section className="seccenterpanel">
            <div className="navcenterpanel">
                <ul>
                    <li className="linavcelter linavcelter1 active" onClick={allcenterpanel}>All</li>
                    <li className="linavcelter linavcelter2" onClick={livecenterpanel}>LIVE</li>
                    <li className="linavcelter linavcelter3" onClick={finishedcenterpanel}>Finished</li>
                    <li className="linavcelter linavcelter4" onClick={scheduledcenterpanel}>Scheduled</li> 
                </ul>
                <div className="navdate">
                    <div className="iconnav"><img src={Calender} /></div> 
                    <p>24/11/2022</p>
                </div>
            </div>

            <article className="artiAllCenterpanel" id="artiAllCenterpanel">
                <div className="bxmatchdetails seccenterpanel">
                    <div className="tableMatch">
                        <div className="titleMatchTable">
                            <div className="starflagcountry">
                                <span> WORLD World Cup (Football)</span>
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
                        </div>
                    </div>
                </div>
            </article>
            <article className="artiLiveCenterpanel" id="artiLiveCenterpanel">
                <Livecenterpanel />
            </article>
            <article className="artiFinishedCenterpanel" id="artiFinishedCenterpanel">
                <Finishedcenterpanel />
            </article>
            <article className="artiScheduleCenterpanel" id="artiScheduleCenterpanel">
                <Schedule />
            </article>
        </section>
    );
}

export default Cricketcenterpanel;