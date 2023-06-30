import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/Logo.png"


const Nav = () => {
    return (
        <nav className="Header">
            <div className="Logo">
                <img src={logo} alt="Logo entreprise" />
                <h2>AMPUNV</h2>
            </div>
            <div className="links">
                <Link to="/Accueil">Accueil</Link>
                <Link to="/Produits">Produits</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Profil">Profil</Link>
                <div className="log">
                    <Link to="/Inscription">Inscription</Link>
                    <Link to="/Connexion">Connexion</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;