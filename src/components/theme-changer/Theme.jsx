import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import CharacterList from '../character/CharacterList';
import Header from '../header/Header';
import '../theme-changer/Theme.css';

const Theme = () => {
    return (
        <ThemeProvider>
            <Header />
            <CharacterList />
        </ThemeProvider>
    );
};

export default Theme;