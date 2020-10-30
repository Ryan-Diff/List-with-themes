import { useEffect, useState } from 'react';
import { getCharacters } from "../services/Hey-Arnold-API";

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
        .then(fetchedCharacters => setCharacters(fetchedCharacters));
    }, []);

    return characters;
};