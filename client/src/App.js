import Nav from "./Components/Nav.jsx";
import Profil from "./Components/Profil.jsx";
import Produits from "./Components/Produits.jsx";
import Inscription from "./Components/Inscription.jsx";
import Contact from "./Components/Contact.jsx";
import Connexion from "./Components/Connexion.jsx";
import Accueil from "./Components/Accueil.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailProduit from "./Components/details-produit.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Accueil />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Produits" element={<Produits />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/DetailProduit" element={<DetailProduit />} />
          <Route exact path="/Accueil" component={Accueil} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
