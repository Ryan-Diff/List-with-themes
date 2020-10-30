import React, { useEffect } from 'react';
import { useThemePicker } from '../../hooks/themes';
import styles from '../theme-changer/Theme.css';

const Header = () => {
    const  { toggle, theme, className } = useThemePicker();

    useEffect(() => {
        if (theme === 'dark') document.body.style.backgroundColor = '#16262E';
        if (theme === 'light') document.body.style.backgroundColor = '#DBC2CF';
    }, [theme]);

    return (
        <header className={className}>
            <button onClick={toggle}>ヾ⌐■_■ノ♪</button>
        </header>
    );
};

export default Header;