import React, { useState, useEffect } from "react";
import baniere from "./Images/Magasin.jpg"
import "./Limite";

const Accueil = () => {
    useEffect(() => {
        getAllFurnitures();
    }, [])
    const [furnitures, setfurnitures] = useState([])
    const getAllFurnitures = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const allFurnitures = await response.json() //récuperation d'un tableau avec les données de l'api
        console.log(allFurnitures)
        setfurnitures(allFurnitures)
    };

    return (
        <div>
            <div className="Description">
                <img src={baniere} alt="Facade magasin" />
                <div className="cadre">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="filtres">
                <div></div>
            </div>
            <div className="decoration">

            </div>
            <div className="meubles">
                {furnitures.take(9).map((user) => (
                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Accueil;