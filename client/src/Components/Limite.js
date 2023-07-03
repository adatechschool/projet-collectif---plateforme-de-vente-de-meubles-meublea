//Permet de créer une méthode pour limiter le nombre d'élément qui s'affiche sur la page d'accueil. Appeler dans la page Accueil.jsx

Array.prototype.take = function(count = 10){
    this.splice(count)
    return this
}