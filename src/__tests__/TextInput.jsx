import React from 'react';
import { create } from 'react-test-renderer';
import TextInput from '../components/TextInput';

describe('TextInput tests', () => {
  test('TextInput it matches the snapshot', () => {
    const component = create(<TextInput name="test" onChange={jest.fn()} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
