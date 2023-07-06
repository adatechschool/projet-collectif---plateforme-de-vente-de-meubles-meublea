import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import baniere from "./Images/Magasin.jpg";
import img from "./Images/image-2.png";
import "./Limite";
const Accueil = () => {
const [furnitures, setFurnitures] = useState([]);
  
useEffect(() => {
    getAllFurnitures();
  }, []);
  const getAllFurnitures = async () => {
    const response = await fetch(`http://localhost:3000/shop-item/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const allFurnitures = await response.json();
    console.log(allFurnitures);
    setFurnitures(allFurnitures);
  };
  const goToProfile = (ShopItem) => {
    // Code pour naviguer vers la page du profil de l'utilisateur avec l'ID spécifié
    console.log("Navigating to profile page of user:", ShopItem);
  };
  return (
    <div className="accueil-container">
      <div className="header-container">{/* Contenu du header */}</div>
      <div className="Description">
        <img src={baniere} alt="Facade magasin" />
        <div className="cadre">
          <p>bienvenue</p>
        </div>
      </div>
      <div className="filtres">
        <div></div>
      </div>
      <div className="decoration"></div>
      <div className="meubles">
        {furnitures.slice(0, 9).map(
          (
            ShopItem // Utiliser "ShopItem" au lieu de "user"
          ) => (
            <div className="card" key={ShopItem.id}>
              <div className="card-image">
                <img src={img} alt="test photo" />
              </div>
              <div className="card-content">
                <p className="name">{ShopItem.name}</p>
                <p className="type">type : {ShopItem.type}</p>
                <p className="price">price : {ShopItem.price}</p>
                <a href={`/profil/${ShopItem}`} className="buy-button">
                  Acheter
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Accueil;