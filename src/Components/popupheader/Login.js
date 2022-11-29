import React from "react";
import $ from 'jquery';
import Close from '../Assets/images/close.png';

const Login = () => {
    const closepopuplogin = () => {
        $(".popuplogin").hide();
    }
    return(
        <aside className="asipopup">
            <div className="opacitypopup"></div>
            <div className="popupbox">
                <div className="titlepopup">    
                    <p>Login</p>
                    <div className="closepopup" onClick={closepopuplogin}>
                        <img src={Close} />
                    </div>
                </div>
                <div className="bodypopup">
                    <div className="titlebody">
                        <h5>Benefits of a Flashscore account?</h5>
                        <p>Synchronisation of My Teams and My Games on all your devices</p>
                    </div>
                    <div className="formbx">
                        <div className="innerfrombx">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Password" />
                            <button type="button">Log in</button>
                        </div>
                        <div className="forgotpass"><a href="#">Forgot your password?</a></div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Login;