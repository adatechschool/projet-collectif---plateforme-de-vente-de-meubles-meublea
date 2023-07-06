import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "./Images/image-2.png";
import "./Limite";

const Produits = () => {
  useEffect(() => {
    getAllFurnitures();
  }, []);

  const [furnitures, setFurnitures] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getAllFurnitures = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const allFurnitures = await response.json();
    console.log(allFurnitures);
    setFurnitures(allFurnitures);
  };

  const goToProfile = (userId) => {
    // Code pour naviguer vers la page du profil de l'utilisateur avec l'ID spécifié
    console.log("Navigating to profile page of user:", userId);
  };

  const filterFurnitures = () => {
    return furnitures.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <div className="accueil-container">
      <div className="header-container">{/* Contenu du header */}</div>
      <div className="Description"></div>
      <div className="filtres">
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Rechercher par nom"
          />
        </div>
      </div>

      <div className="decoration"></div>
      <div className="meubles">
        {filterFurnitures()
          .slice(0, 9)
          .map((user) => (
            <div className="card" key={user.id}>
              <div className="card-image">
                <img src={img} alt="test photo" />
              </div>
              <div className="card-content">
                <p className="name">{user.name}</p>
                <p className="type">type : {}</p>
                <p className="prix">prix : {}</p>
                <a href={`/profil/${user.id}`} className="buy-button">
                  Acheter
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Produits;
