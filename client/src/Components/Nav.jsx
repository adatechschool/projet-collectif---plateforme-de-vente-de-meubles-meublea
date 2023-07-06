import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Images/Logo.png";
import Cookies from 'js-cookie';

// Permet de lier les différentes pages à la page de navigation
const Nav = () => {

    const isLoggedIn = Cookies.get('userId') !== undefined || Cookies.get('userId');
    const isAdmin = Cookies.get('Admin');
    console.log(isLoggedIn);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Supprime le cookie
        Cookies.remove("userId");

        // Supprime le cookie Admin s'il existe
        if (Cookies.get('Admin')) {
            Cookies.remove('Admin');
        };

        // Renvoie vers la page Connexion
        navigate('/Connexion')
    };

    return (
        <nav className="Header">
            <div className="Logo">
                <img src={logo} alt="Logo entreprise" />
                <h2>Meublea</h2>
            </div>
            {/* Si l'utilisateur est connecté, affiche cette navbar */}
            {isLoggedIn ? (
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/Produits">Produits</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Profil">Profil</Link>
                {isAdmin ? 
                // Affiche le bouton vers la page Admin si l'Admin est co
                // A modifier car la page Admin n'existe pas encore
                (
                    <Link to="/Produits">Admin</Link>
                ): (
                    null
                )}
                <div className="log">
                    <a href="" onClick={handleLogout}>Déconnexion</a>
                </div>
            </div>) : (
                // Si pas connecté, affiche cette navbar
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/Produits">Produits</Link>
                <Link to="/Contact">Contact</Link>
                <div></div>
                <div className="log">
                    <Link to="/Inscription">Inscription</Link>
                    <Link to="/Connexion">Connexion</Link>
                </div>
            </div>
            )}
        </nav>
    );
}

export default Nav;
