import React from "react";
import Footballwhite from '../Assets/images/footballwhite.png';
import Yellowstar from '../Assets/images/star-yellow.png';  
import Iconindia from '../Assets/images/india.png'; 
import Uparrow from '../Assets/images/arrow-up.png';
import Star from '../Assets/images/star.png';
import Islnortheast from '../Assets/images/isl-northeast.png';
import Islmimbaicity from '../Assets/images/isl-mimbaicity.png';
import Livestreaming from '../Assets/images/live-stream.png';
import Flagurope from '../Assets/images/urope.png';

const Summary = () => {
    return(
        <section className="secsummary ">
            <div className="bxmatchdetails seccenterpanel">
                <div className="tableMatch">
                    <div className="titleMatchTable">
                        <div className="starflagcountry">
                            <div className="iconnav"><img src={Yellowstar} /></div>
                            <div className="iconnav"><img src={Flagurope} /></div>
                            <span> WORLD World Cup</span>
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
                            <div className="matchtime">Finished</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Iran</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">USA</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                <div className="matchresultone">0</div>
                                <div className="matchresulttwo">1</div>
                            </div>

                            <div className="matchaudiolivestreaming">
                                <div className="matchaudiostreaming">
                                    {/* <img src={Livestreaming} /> */}
                                </div>
                                <div className="matchaudiostreaming">
                                    {/* <a href="javascript:void(0)"> Live</a> */}
                                </div>
                            </div>

                        </div>
                        <div className="matchtablerow">
                                <div className="iconnav"><img src={Star} /></div>
                            <div className="matchtime">Finished</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Wales</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">England</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                <div className="matchresultone">0</div>
                                <div className="matchresulttwo">3</div>
                            </div>                        
                            
                            <div className="matchaudiolivestreaming">
                                <div className="matchaudiostreaming">
                                    {/* <img src={Livestreaming} /> */}
                                </div>
                                <div className="matchaudiostreaming">
                                    {/* <a href="javascript:void(0)"> Live</a> */}
                                </div>
                            </div>

                        </div>
                        <div className="matchtablerow">
                            <div className="iconnav"><img src={Star} /></div>
                            <div className="matchtime">20:30</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Australia</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span>Denmark</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                {/* <div className="matchresultone">0</div> */}
                                {/* <div className="matchresulttwo">3</div> */}
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
                            <div className="matchtime">20:30</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Tunisia</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span>France</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                {/* <div className="matchresultone">0</div> */}
                                {/* <div className="matchresulttwo">3</div> */}
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
            <div className="bxmatchdetails seccenterpanel">
                <div className="title"> Latest Scores</div>
                <div className="tableMatch">
                    <div className="titleMatchTable">
                        <div className="starflagcountry">
                            <div className="iconnav"><img src={Yellowstar} /></div>
                            <div className="iconnav"><img src={Flagurope} /></div>
                            <span> WORLD World Cup</span>
                        </div>
                        <div className="titlestanding">
                            <span>Standing</span> 
                            <img src={Uparrow} />
                        </div>
                    </div>
                    <div className="matchTablebody ">
                        <div className="matchtablerow">
                            <div className="matchfavorite">
                                <div className="iconnav"><img src={Star} /></div>
                            </div>
                            <div className="matchtime">Finished</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Iran</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">USA</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                <div className="matchresultone">0</div>
                                <div className="matchresulttwo">1</div>
                            </div>

                            <div className="matchaudiolivestreaming">
                                <div className="matchaudiostreaming">
                                    {/* <img src={Livestreaming} /> */}
                                </div>
                                <div className="matchaudiostreaming">
                                    {/* <a href="javascript:void(0)"> Live</a> */}
                                </div>
                            </div>

                        </div>
                        <div className="matchtablerow">
                                <div className="iconnav"><img src={Star} /></div>
                            <div className="matchtime">Finished</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Wales</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">England</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                <div className="matchresultone">0</div>
                                <div className="matchresulttwo">3</div>
                            </div>                        
                            
                            <div className="matchaudiolivestreaming">
                                <div className="matchaudiostreaming">
                                    {/* <img src={Livestreaming} /> */}
                                </div>
                                <div className="matchaudiostreaming">
                                    {/* <a href="javascript:void(0)"> Live</a> */}
                                </div>
                            </div>

                        </div>
                        <div className="matchtablerow">
                            <div className="matchfavorite">
                                <div className="iconnav"><img src={Star} /></div>
                            </div>
                            <div className="matchtime">Finished</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Iran</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">USA</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                <div className="matchresultone">0</div>
                                <div className="matchresulttwo">1</div>
                            </div>

                            <div className="matchaudiolivestreaming">
                                <div className="matchaudiostreaming">
                                    {/* <img src={Livestreaming} /> */}
                                </div>
                                <div className="matchaudiostreaming">
                                    {/* <a href="javascript:void(0)"> Live</a> */}
                                </div>
                            </div>

                        </div>
                        <div className="matchtablerow">
                                <div className="iconnav"><img src={Star} /></div>
                            <div className="matchtime">Finished</div>
                            <div className="matchteams">
                                <div className="matchteamone">
                                    <img src={Islnortheast} />
                                    <span>Wales</span>
                                </div>
                                <div className="matchteamone">
                                    <img src={Islmimbaicity} />
                                    <span className="winteam">England</span>
                                </div>
                            </div>
                            <div className="matchresult">                            
                                <div className="matchresultone">0</div>
                                <div className="matchresulttwo">3</div>
                            </div>                        
                            
                            <div className="matchaudiolivestreaming">
                                <div className="matchaudiostreaming">
                                    {/* <img src={Livestreaming} /> */}
                                </div>
                                <div className="matchaudiostreaming">
                                    {/* <a href="javascript:void(0)"> Live</a> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bxmatchdetails seccenterpanel">
                <div className="title">Scheduled</div>
                <div className="tableMatch">
                    <div className="titleMatchTable">
                        <div className="starflagcountry">
                            <div className="iconnav"><img src={Yellowstar} /></div>
                            <div className="iconnav"><img src={Flagurope} /></div>
                            <span> WORLD World Cup</span>
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

export default Summary;