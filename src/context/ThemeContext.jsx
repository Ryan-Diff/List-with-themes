import Tract from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [themeType, setThemeType] = useState('LightMode');

    const toggle = () => {
        setThemeType(oldType => {
            if(oldType === 'LightMode') return 'DarkMode';
            return 'LightMode';
        });
    };

    return (
        <ThemeContext.Provider value={{ themeType, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};