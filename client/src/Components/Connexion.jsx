import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Connexion = () => {
    // Déclaration des variables d'état (hooks)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

        const id = { mail: email, password: password };

        const response = await fetch("http://localhost:3000/user/authentification", {
            // URL de test du POST :
            // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(id),
            credentials: 'include'
        })
        const result = await response.json();

        // Si la connexion a réussi, l'user est renvoyé vers la page d'Accueil
        if (result.message === 'Successful connexion'){
            navigate("/");
        }
    }

    return (
        <>
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Nom d'utilisateur</label>
                <input type="email" value={email} id="email" onChange={e => setEmail(e.target.value)} required />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" value={password} id="password" onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Se connecter</button>
            </form>

            <button>Mot de passe oublié</button>

            <p>Vous n'avez pas de compte ?</p>
            <Link to="/Inscription">S'inscrire</Link>
        </>
    );
}

export default Connexion;