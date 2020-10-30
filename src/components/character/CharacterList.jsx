import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../hooks/Characters';
import { useThemePicker } from '../../hooks/themes';
import styles from '../theme-changer/Theme.css';

const CharacterList = () => {
    const characters = useCharacters();
    const { className } = useThemePicker();
    
    const characterElements = characters.map(character => (
        <li key={character.id}>
            <CharacterItem {...character} />
        </li>
    ));

    return (
        <ul data-testid='characters' className={`${styles.CharacterList} ${className}`}>
            {characterElements}
        </ul>
    );
};

export default CharacterList;
    
