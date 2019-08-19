import React, { useEffect, useState } from "react";

import EpisodeCard from './EpisodeCard.js';
import Axios from "axios";


const EpisodeList = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {

        Axios.get('https://rickandmortyapi.com/api/episode/')
            .then(apiData => {

            })
            .catch(err => {
                alert(err);
            });
    }, []);

    if(!episodes.length) {
        return (<h2>Loading Episodes</h2>)
    } else {
        return (
            <div>EpisodeList here</div>
        );
    }
};