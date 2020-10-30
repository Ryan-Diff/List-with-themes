import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../components/theme-changer/Theme.css';

export const useThemePicker = () => {
    const { themeType, toggle } = useContext(ThemeContext);
    const className = styles[themeType];

    return { themeType, toggle, className };
};
