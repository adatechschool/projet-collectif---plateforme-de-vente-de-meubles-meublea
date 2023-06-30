import React from "react";
import { Link } from "react-router-dom";

const Inscription = () => {
    return (
        <>
            <h1>Inscription</h1>
            <form action="./Connexion" method="post">
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" name="username" id="username" placeholder="gégédu69" />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="gégédu69@gmail.com" />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" placeholder="************" />
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="firstName" id="firstName" placeholder="Gérard" />
                <label htmlFor="lastName">Nom de famille</label>
                <input type="text" name="lastName" id="lastName" placeholder="Du Moulin" />
                <label htmlFor="telephoneNumber">Numéro de téléphone</label>
                <input type="tel" name="telephoneNumber" id="telephoneNumber" placeholder="0x xx xx xx xx" />
                <label htmlFor="address">Adresse</label>
                <input type="text" name="address" id="address" placeholder="7 allée du pot aux roses, 38280 Villette d'anthon" />
                <input type="submit" value="Envoyer" />
            </form>
            <p>Vous avez déjà un compte ?</p>
            <Link to="/Connexion">Se connecter</Link>
        </>
    );
}

export default Inscription;