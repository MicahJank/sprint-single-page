import React, { useEffect, useState } from "react";

import CharacterCard from './CharacterCard.js';
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then(apiObject => {
        console.log(apiObject);
        
      })
      .catch(err => {
        alert(err);
      });

  }, []);

  if(!characters.length) {
    return (<h2>Loading Characters...</h2>)
  } else {
    return (
      <section className="character-list grid-view">
        <h2>TODO: `array.map()` over your state here!</h2>
      </section>
    );
  }
}

