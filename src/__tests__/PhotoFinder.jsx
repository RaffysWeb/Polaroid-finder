import React from 'react';
import { create } from 'react-test-renderer';
import PhotoFinder from '../containers/PhotoFinder';

describe('PhotoFinder tests', () => {
  test('PhotoFinder it matches the snapshot', () => {
    const component = create(<PhotoFinder />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
