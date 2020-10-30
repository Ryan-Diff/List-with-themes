import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/Hey-Arnold-API';
import { useThemePicker } from '../../hooks/themes';

jest.mock('../../services/Hey-Arnold-API');
jest.mock('../../hooks/themes');

describe('CharacterList component', () => {
  afterEach(() => cleanup());

  it('Renders a list of Characters', () => {
    useThemePicker.mockResolvedValue('dark');
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