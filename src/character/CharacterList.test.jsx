import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../services/Hey-Arnold-API';

jest.mock('../services/Hey-Arnold-API.js');

describe('CharacterList component', () => {
  afterEach(() => cleanup());

  it('Renders a list of Characters', () => {
    getCharacters.mockResolvedValue([
      {
        'name': 'Ryan',
        'image': 'Ryan.png'
      }
    ])
    const { asFragment } = render(<CharacterList />);
    expect(asFragment()).toMatchSnapshot();
  });
}); 