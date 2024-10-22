import React, { useState } from 'react';

const MoviesCard = ({onAdd}) => {
    // utilisation d'un seul etat pour tous les champs
    const [formpart, setFormpart] = useState('');

    // fonction pour gerer les changements dans les champs du formulaire
    const auClick = (e)=>{
        const {name, value} = e.target;
        setFormpart({
            ...formpart, [name]: value
        })
    }

    // fonction a appelee lors de la somission du formulaire
    const submitclick =(e) =>{
        e.preventDefault();
        onAdd({...formpart, note : parseFloat(formpart.note)});
        setFormpart({
            titre:'',
            description:'',
            poster:'',
            note:''
        })
    }

    // creaction des input permettant au l'utilisateur de saisir les valeurs
    return (
        <form onSubmit={submitclick}>
            <input type='text' name='titre' placeholder='Titre' value={formpart.titre} onChange={auClick} required /><br/>

            <input type='text' name='description' placeholder='Description' value={formpart.description} onChange={auClick} required /><br/>

            <input type='text' name='poster' placeholder='Poster' value={formpart.poster} onChange={auClick} required/><br/>

            <input type='text' name='note' placeholder='Note' value={formpart.note} onChange={auClick} required /><br/>

            <button type='submit'>Ajouter Film</button>
        </form>
    )
};

export default MoviesCard;