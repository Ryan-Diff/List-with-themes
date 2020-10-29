import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../hooks/Characters';

const CharacterList = () => {
    const characters = useCharacters();
    
    const characterElements = characters.map(character => (
        <li key={character.id}>
            <CharacterItem {...character} />
        </li>
    ));

    return (
        <ul data-testid='characters'>
            {characterElements}
        </ul>
    );
};

export default CharacterList;
    
