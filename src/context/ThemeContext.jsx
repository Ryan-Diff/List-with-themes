import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [themeType, setThemeType] = useState('LightMode');

    const toggle = () => {
        setThemeType(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ themeType, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};