import React, { useState } from 'react';

//definition du composant filtre qui permet de filtrer les films 
const Filtre = ({onFilter}) => {
    // declaration des etats permettant de stocker les valeur des champs pour le filtrage
        // etat pour le titre a filtrer
        const [title, setTitle] = useState(''); 
        const [note, setNote] = useState('');

        // fonction appele lorsqu'on click sur le button filtrer por filtrer les films
        const userClickButton =()=>{
            onFilter({title, note: parseFloat(note)})
        }

        return(
            <div className="bot">
                <input  type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/> <br/>

                <input type='number' placeholder='note' value={note} onChange={(e) => setNote(e.target.value)}/><br/>

                <button onClick={userClickButton}>Filtrer</button>
            </div>
        )
    
};

// exportation du composant filtre
export default Filtre;