import React, { useState, useEffect } from "react";
// import baniere from "./Images/Magasin.jpg";
// import img from "./Images/image-2.png";
import { useNavigate } from "react-router-dom";
const DetailProduit = () => {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate("/");
  };

  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await fetch("/meublea/shop-item");
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.log(
          "Une erreur s'est produite lors de la récupération des données."
        );
      }
    };

    fetchItemData();
  }, []);

  return (
    <div>
      <h1>Table extensible ATON</h1>
      <div className="product-container">
        <div className="product-image">
          <img
            src="https://cdn1.home24.net/images/media/catalog/product/590x590/png/-/1/-1000209437-200402-15495900126-IMAGE-P000000001000209437.webp"
            alt="Image 1"
          />
          <div className="product-images-row">
            <img
              src="https://cdn1.home24.net/images/media/catalog/product/590x590/png/-/1/-1000209437-200402-15500000127-DETAILS-P000000001000209437.webp"
              alt="Image 2"
            />
            <img
              src="https://cdn1.home24.net/images/media/catalog/product/590x590/png/-/1/-1000209437-200402-15500000128-DETAILS-P000000001000209437.webp"
              alt="Image 3"
            />
            <img
              src="https://cdn1.home24.net/images/media/catalog/product/590x590/png/-/1/-1000209437-200402-15500200129-DETAILS-P000000001000209437.webp"
              alt="Image 4"
            />
          </div>
        </div>

        <div className="product-details">
          {/* <button className="home-button">Retour à l'acceuil</button> */}
          <button className="home-button" onClick={handleHomeButtonClick}>
            Retour à l'accueil
          </button>

          <br />
          <div className="More-info">
            <h1>Description du produit</h1>
            <p>Dimensions : 120cm x 140cm</p>
            <br />
            <h1>Prix : $199.99</h1>
            <button className="buy-button">ACHETER</button>
            <br />
            <h2>Description supplémentaire du produit</h2>

            <br />

            <div class="dropdown">
              <h4
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Caractéristiques du produit
              </h4>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <h5 class="dropdown-header">Marque</h5>
                <span class="dropdown-item-text">LOFTSCAPE: </span>
                <h5 class="dropdown-header">Matériau: </h5>
                <span class="dropdown-item-text">
                  Panneau aggloméré mélaminé
                </span>
                <h5 class="dropdown-header">Coloris: </h5>
                <span class="dropdown-item-text">
                  Plateau de table et structure: imitation vieux bois
                  <br />
                  Bord: noir
                </span>
                <h5 class="dropdown-header">Dimensions: </h5>
                <span class="dropdown-item-text">
                  Hauteur: 76 cm
                  <br />
                  Largeur: 120 cm
                  <br />
                  Profondeur: 80 cm
                  <br />
                  Poids: 42 Kg
                  <br />
                  Charge maximale: 100 Kg
                </span>
                <h5 class="dropdown-header">Etat à la livraison: </h5>
                <span class="dropdown-item-text">A monter</span>
                <h5 class="dropdown-header">N° de référence: </h5>
                <span class="dropdown-item-text">000000001000209437</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduit;
