import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import $ from 'jquery';
import logo from './Assets/images/abp-logo.png';
import football from './Assets/images/football.png';
import favorite from './Assets/images/favorite.png';
import topscores from './Assets/images/topscores.png';
import cricket from './Assets/images/cricket.png';
import tennis from './Assets/images/tennis.png';
import kabaddi from './Assets/images/kabaddi.png';
import Searchicon from './Assets/images/search.png';
import User from './Assets/images/user.png';
import Menu from './Assets/images/menu.png';
import Downarrow from './Assets/images/downarrow.png';
import Searchpopup from "./popupheader/Searchpopup";
import Login from "./popupheader/Login";
import Menupopup from "./popupheader/Menupopup";
import Moresports from "./popupheader/Moresports";

const Header = () => {
    const [btnsearch, setBtnsearch] = useState(false);
    const opensearchbox = () => {
        $(".popupcomponents").show();
    }
    const openpopuplogin = () =>{
        $(".popuplogin").show();
    }
    const openpopupmenu = () =>{
        $(".popupMenu").show();
    }
    const moresports = () => {
        $(".popupmoresports").show();
    }
    
    return(
        <>
        <header>
            <div className="innercontainer">
                <div className="logobuttons">
                    <div className="headerlogo">
                        <img src={logo} />
                    </div>
                    <div className="buttonhumberger">
                        <ul>
                            <li className="lisearch">
                                <a href="javascript:void(0)" onClick={opensearchbox}>
                                    <img src={Searchicon} />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={openpopuplogin}>
                                    <img src={User} /> 
                                     <p>Login</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={openpopupmenu}>
                                    <img src={Menu} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>                
            <div className="bxnav">
                <div className="innercontainer">
                    <nav>
                        <ul>
                            <li><div className="iconnav"><img src={favorite} /></div> <NavLink to='/favorites'>Favorites</NavLink></li>                           
                            <li><div className="iconnav"><img src={topscores} /></div> <NavLink to='/'>Top Scores</NavLink></li>
                            <li><div className="iconnav"><img src={cricket} /></div> <NavLink to='/cricket'> Cricket</NavLink></li>
                            <li><div className="iconnav"><img src={football} /></div> <NavLink to='/football'> Football</NavLink></li>
                            <li><div className="iconnav"><img src={tennis} /></div> <NavLink to='/tennis'> Tennis</NavLink></li>
                            <li><div className="iconnav"><img src={kabaddi} /></div><NavLink to='/kabaddi'> Kabaddi</NavLink></li>
                        </ul>
                        <div className="moresports" onClick={moresports}>
                            <span>More sports</span> 
                            <img src={Downarrow} />
                        </div>                    
                    </nav>
                </div>
            </div>
        </header>
        <aside className="popupcomponents">
            <Searchpopup />
        </aside>
        <aside className="popuplogin">
            <Login />
        </aside>
        <aside className="popupMenu">
            <Menupopup />
        </aside>
        <aside className="popupmoresports">
            <Moresports />
        </aside>
    </>
    );
}

export default Header;