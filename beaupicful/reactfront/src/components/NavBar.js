import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo192.png';
import { BrowserRouter, Link } from "react-router-dom";
import '../App.css'


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <BrowserRouter>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <label className="imagen">
                {<img src={logo}/>}
                </label>
                <Container>
                    <span className="navbar-text">
                        <button className="vvd"><span><Link to='./LoginSignup'>Registrarse</Link></span></button>
                        <button className="vvd" ><span><Link to='./LoginSignup'>Iniciar Sesión</Link></span></button>
                    </span>
                </Container>
            </Navbar>
        </BrowserRouter>
    )
}