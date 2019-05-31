import React from 'react';
import { create } from 'react-test-renderer';
import Polaroid from '../components/Polaroid';

describe('Polaroid tests', () => {
  const mockItem = {
    author: 'me',
    date_taken: new Date(),
    tags: 'cat',
    link: 'www.google.com',
    media: { m: 'www.google.com' }
  };

  test('Polaroid it matches the snapshot', () => {
    const component = create(<Polaroid item={mockItem} fetchByTag={jest.fn()} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
