import React, { useState, useEffect } from "react";
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
        headers: {"Content-Type": "application/json"}
    });
    const allFurnitures = await response.json();
    console.log(allFurnitures);
    setFurnitures(allFurnitures);
  };

  return (
    <div>
      <div className="Description">
        <img src={baniere} alt="Facade magasin" />
        <div className="cadre">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="filtres">
        <div></div>
      </div>
      <div className="decoration"></div>
      <div className="meubles">
        {furnitures.map((furniture) => (
          <div className="card" key={furniture.id}>
            <img src={img} alt="test" />
            <p className="name">Name: {furniture.name}</p>
            <p className="price">Price: {furniture.price}</p>
            <p className="type">Type: {furniture.type}</p>
            <p className="description">Description: {furniture.description}</p>
            {/* Ajoutez les autres propriétés ici */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;
