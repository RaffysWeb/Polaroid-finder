import React from 'react';
import { create } from 'react-test-renderer';
import TextInput from '../components/TextInput';

describe('Inputs', () => {
  const testFunc = () => {
    return true;
  };

  test('TextInput it matches the snapshot', () => {
    const component = create(<TextInput name="test" onChange={testFunc} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
