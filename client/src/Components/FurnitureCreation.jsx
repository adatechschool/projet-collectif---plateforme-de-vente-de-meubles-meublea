import React from "react";

const furniture = () => {

    return (
        <div>
    <p>A vous de jouer !</p>
    <p>Un meuble qui ne correspond plus à votre intérieur ? Une envie de changement ? Nous pouvons gérer le vente de votre bien. Veuillez remplir le formulaire ci-dessous.</p>
    <form onSubmit={handleSubmit}>
    <p>Nom du meuble :</p>
    <span><input type='text' id='furniture_name' name='furniture_name' defaultValue='Tapez votre texte' /> </span>
    <p> Prix du meuble : </p>
    <input type='text' id='price' name='price' defaultValue='Tapez votre texte' />
    <p>Matiére :</p>
    <input type='text' id='matter' name='matter' defaultValue='Tapez votre texte' />
    <p> Couleur :</p>
    <input type='text' id='color'name='color' defaultValue='Tapez votre texte' />
    <p> Dimensions : (en cms)</p>
    <p> Longueur :</p>
    <input type='number' id='dimension' name='longueur'/>
    <input type='number' id='dimension' name='largeur' />
    <input type='number' id='dimension' name='hauteur' />
    <p> Description :
    N'hésitez pas à indiquer les particularités et les défauts de votre bien
    </p>
    <input type='text' id='color'name='color' defaultValue='Tapez votre texte' />
    <p>Photos : (jusqu'à 5)</p>
    <input type='file' id='photos' name='photos'/>


    <button type='submit' id='checkbutton'>Validez</button>
    </form>
    </div>
);
}

function handleSubmit(e) {
console.log("test")
alert(e.target['my_input'].value)
}

// If j'appuie sur le bouton : Alert(vous êtes inscrit)