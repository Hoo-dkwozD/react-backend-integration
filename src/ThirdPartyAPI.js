import React, { useState } from 'react';

import './ThirdPartyAPI.css';
import useFetch from './useFetch';
import QueryBar from './QueryBar';
import ErrorMessage from './ErrorMessage';
import LoadingSkeleton from './LoadingSkeleton';
import PokemonCard from './PokemonCard';

function ThirdPartyAPI() {
    const [query, setQuery] = useState('');

    const API_URL = 'https://pokeapi.co/api/v2/pokemon/' + query + "/";

    const {
        data: pokemonData, 
        isPending, 
        error, 
        setData
    } = useFetch(API_URL, "POST", { name: "test", email: "test" });

    return (
        <div id="api-display-card">
            <QueryBar value={ query } setValue={ setQuery } />
            { error && <ErrorMessage /> }
            { isPending && <LoadingSkeleton /> }
            { pokemonData && <PokemonCard data={ pokemonData } /> }
        </div>
    );
}

export default ThirdPartyAPI;
