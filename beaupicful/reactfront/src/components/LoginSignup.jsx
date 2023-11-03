import React, { useState } from "react";
import './LoginSignup.css'
import email_icon from '../assets/img/email.png'
import password_icon from '../assets/img/password.png'
import user_icon from '../assets/img/person.png'
import logo_icon from '../assets/img/logo1.png'
import GoogleLogin from 'react-google-login'
import { useEffect } from "react"
import { gapi } from "gapi-script";



const LoginSignup = () => {

    const [action, setAction] = useState("Iniciar Sesión")

    const clientID = "773037671509-kjl8dh2tjt0fvosk72qpt0c4be132iig.apps.googleusercontent.com";
    const [user, setUser] = useState({});
    const [loggeIn, setLoggetInfo] = useState(false);
    const onSuccess = (response) => {
        setUser(response.profileObj);
        document.getElementsByClassName("btn").hidden = true;
    }
    const onFailure = (response) => {
        console.log("Something went wrong");
    }
    const handleLogout = () => {
        setUser({});
    }
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientID,
            });
        }
        gapi.load("client:auth2", start);
    });


    return (
        <div className="container">
            <div className="header">
                <img src={logo_icon}></img>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Correo"></input>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Contraseña"></input>
                </div>

                {action === "Iniciar Sesión" ? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Nick Name"></input>
                </div>}


                {action === "Iniciar Sesión" ? <div></div> : <div className="input">
                    <input type="date" placeholder="Fecha de Nacimiento" ></input>
                </div>
                }
            </div>

            {action === "Registrarse" ? <div></div> : <div className="forgot-password">¿Olvidaste tu contraseña?<span>Haga click aqui</span></div>}
            <br/>
            <div className="submit-container " >
                <GoogleLogin
                    clientId={clientID}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    buttonText="Continue  with Google"
                    cookiePolicy={"single_host_origin"}
                />
            </div>
            <div className="submit-container ">
                <div className={action === "Iniciar Sesión" ? "submit gray" : "submit"} onClick={() => { setAction("Registrarse") }}>Registrarse</div>
                <div className={action === "Registrarse" ? "submit gray" : "submit"} onClick={() => { setAction("Iniciar Sesión") }}>Iniciar Sesión</div>

            </div>
        </div>
    )
}

export default LoginSignup 