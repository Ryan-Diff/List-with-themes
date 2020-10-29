import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { getCharacters } from '../../services/Hey-Arnold-API';

jest.mock('../../services/Hey-Arnold-API');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    getCharacters.mockResolvedValue([
      {
        'name': 'Ryan',
        'image': 'Ryan.png'
      }
    ]);
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});