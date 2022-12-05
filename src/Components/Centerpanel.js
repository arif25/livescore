import React from "react";
import $ from "jquery";
import Calender from './Assets/images/calendar.png';
import Allcenterpanel from "./navcenterpanel/Allcenterpanel";
import Livecenterpanel from "./navcenterpanel/Livecenterpanel";
import Finishedcenterpanel from "./navcenterpanel/Finishedcenterpanel";
import Schedule from "./navcenterpanel/Schedule";

const Centerpanel = () => {
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
                <Allcenterpanel />
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

export default Centerpanel;