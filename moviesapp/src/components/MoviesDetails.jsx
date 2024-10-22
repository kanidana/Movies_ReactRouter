import React from "react";
import { useParams, Link } from "react-router-dom";


const MoviesDetails = ({ films }) => {
    // utilisation de useparams pour recuperer l'id du films
const { id } = useParams();
// recherche du films par l'id
const film = films.find((film) => film.id === parseInt(id));

if (!film) {
    return <div>Film non trouvé</div>;
}
// les details qui doivent apparaitre
return (
    <div>
        <h2 style={{color:"white"}}>{film.titre}</h2>
        <p style={{color:"white"}}>{film.description}</p>
        <div>
            <iframe style={{width:"40rem"}} width="560" height="315" src={film.annonce} title={film.titre} allowFullScreen></iframe>
        </div>
        <nav>
            <Link style={{textAlign:"center", marginTop:"30rem", textDecoration:"none", fontSize:"20px"}} to="/">Accueil</Link>
        </nav>
        
    </div>
);
};

export default MoviesDetails;
