import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';
import { ThemeProvider } from '../../context/ThemeContext';

describe('CharacterItem component', () => {
  afterEach(() => cleanup());

  it('renders single character', () => {
    const { asFragment } = render(
    <ThemeProvider>
    <CharacterItem
        name='Ryan'
        image=''
    />
    </ThemeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
}); 