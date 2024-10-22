// importation des differents composants creer dans components
import React, { useState } from "react";
import Filtre from "./components/Filtre";
import MoviesList from "./components/MoviesList";
import MoviesCard from "./components/MoviesCard";
import { Route, Routes} from "react-router-dom"
import MoviesDetails from "./components/MoviesDetails";
import './App.css'

// definition du composant app principale 
const App = ()=>{
  // creation d'un etat pour afficher les films sur l'interface utilisation de notre app
  const [films, setFilm] = useState([
    { id: 1,
      titre: 'Inception', 
      description: 'A mind-bending thriller', 
      poster: 'https://th.bing.com/th/id/R.7bf8f434baac57991d3e8533c9464ca6?rik=6zQ%2fKdgLmZc%2bAA&pid=ImgRaw&r=0',
      note: 8.8 ,
      annonce:'https://www.youtube.com/embed/YoHD9XEInc0'
    },

    { id: 2,
      titre: 'Interstellar', 
      description: 'A journey through space and time', 
      poster: 'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg', 
      note: 8.6,
      annonce:'https://www.youtube.com/embed/zSWdZVtXT7E'
    },
      
  ]);

  // creation d'un etat permettant de filtrer la liste de film afficher
  const [filmFiltrer, setFilmFiltrer] = useState(films);


  // fonction ajout film permettant a l'utilisateurs  d'ajouter des nouveaux films
  const ajouFilms = (film)=>{
    setFilm([...films, film])
    setFilmFiltrer([...films, film])
  }

  // fonction permettant de filtrer les films en fonction de la note et le titre
  const filmFiltre = ({ titre, note }) => {
    let filmFiltrer = films;
    if (titre) {
      filmFiltrer = filmFiltrer.filter((film) => film.titre.toLowerCase().includes(titre.toLowerCase()));
    }
    if (note) {
      filmFiltrer = filmFiltrer.filter((film) => film.note >= note);
    }
    setFilmFiltrer(filmFiltrer);
  };

  // 

  //  
  return (
    
    <div className="App">
      <h1 className="myTitle">All-Movies</h1>
      <Filtre onFilter={filmFiltre} />
      <Routes>
        <Route path="/" element={<MoviesList films={filmFiltrer} />} />
        <Route path="/details/:id" element={<MoviesDetails films={films} />} />
      </Routes>
      <MoviesCard onAdd={ajouFilms} />
    </div>

  )

}
export default App;
