import React from 'react';
import { useThemePicker } from '../../hooks/themes';

const Header = () => {
    const  { toggle } = useThemePicker();

    return (
        <header>
            <button data-testid='button' onClick={toggle}>ヾ⌐■_■ノ♪</button>
        </header>
    );
};

export default Header;