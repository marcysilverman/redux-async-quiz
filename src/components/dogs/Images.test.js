import React from 'react';
import renderer from 'react-test-renderer';
import Images from './Images';
describe('Images Test', () => {
  it('Renders image', () => {

    const tree = renderer.create(
      <Images /> 
    );
    expect(tree).toMatchSnapshot();
  });
});
