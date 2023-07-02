import React, { useState } from "react";
import { Link } from "react-router-dom";

const Connexion = () => {
    // Déclaration des variables d'état (hooks)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Gère la requête POST (e = event)
    const handleSubmit = async (e) => {
        // Empêche la page de se rafraîchir automatiquement
        e.preventDefault();

        const id = { email, password };

        const response = await fetch("localhost:3000/user/authentification", {
            // URL de test du POST :
            // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(id)
        })
        const result = await response.json();
        console.log(result);
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