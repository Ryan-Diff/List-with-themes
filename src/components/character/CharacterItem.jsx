import React from 'react';
import PropTypes from 'prop-types';
import { useThemePicker } from '../../hooks/themes';
import '../theme-changer/Theme.css';

const CharacterItem = ({ name, image }) => {
    const { themeType } = useThemePicker();

    return (
        <figure className={themeType}>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
};

CharacterItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default CharacterItem;