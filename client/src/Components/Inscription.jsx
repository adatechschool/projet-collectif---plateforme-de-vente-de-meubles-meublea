import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Inscription = () => {
    // Déclaration des variables d'état (hooks)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    // Si l'user est déjà connecté, il ne peut pas aller sur la page Connexion et est renvoyé vers la page d'Accueil
    useEffect(() => {
        if (Cookies.get("userId")) {
          navigate("/");
        }
      }, [navigate]);

    // Gère la requête POST (e = event)
    const handleSubmit = async (e) => {
        // Empêche la page de se rafraîchir automatiquement
        e.preventDefault();

        const profile = { username, email, password, firstName, lastName, telephoneNumber, address };

        const response = await fetch("localhost:3000/user/", {
            // URL de test du POST :
            //const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile)
        })
        const result = await response.json();
        console.log(result);
    }

    return (
        // Formulaire d'inscription
        <>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d'utilisateur *</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} id="username" required placeholder="gégédu69" />
                {username.length == 0 && <p className="errorMessage">Veuillez renseigner ce champ</p>}
                <label htmlFor="email">E-mail *</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" required placeholder="gégédu69@gmail.com" />
                {email.length == 0 && <p className="errorMessage">Veuillez renseigner ce champ</p>}
                <label htmlFor="password">Mot de passe *</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" required placeholder="************" />
                {/* Version raccourcie du if (else après "&&") */}
                {password.length == 0 && <p className="errorMessage">Veuillez renseigner ce champ</p>}
                <label htmlFor="password2">Confirmez votre mot de passe *</label>
                <input type="password" value={password2} id="password2" onChange={e => setPassword2(e.target.value)} required placeholder="************" />
                {password.localeCompare(password2) != 0 && <p className="errorMessage">Veuillez renseigner deux fois le même mot de passe</p>}
                <label htmlFor="firstName">Prénom</label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} id="firstName" placeholder="Gérard" />
                <label htmlFor="lastName">Nom de famille</label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} id="lastName" placeholder="Du Moulin" />
                <label htmlFor="telephoneNumber">Numéro de téléphone</label>
                <input type="tel" value={telephoneNumber} onChange={e => setTelephoneNumber(e.target.value)} id="telephoneNumber" placeholder="0x xx xx xx xx" />
                <label htmlFor="address">Adresse</label>
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} id="address" placeholder="7 allée du pot aux roses, 69200 Vénissieux" />
                <button type="submit">Envoyer</button>
            </form>
            <p>* Champs à renseigner obligatoirement</p>
            <p>Vous avez déjà un compte ?</p>
            <Link to="/Connexion">Se connecter</Link>
        </>
    );
}

export default Inscription;