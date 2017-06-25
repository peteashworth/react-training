import React from 'react';
import renderer from 'react-test-renderer';

import { UnorderedList } from './unordered-list';

describe('unordered list component', () => {

  test('passing a simple list snapshot', () => {
    const listItems = ['red', 'white', 'blue'];
    const tree = renderer.create(<UnorderedList listItems={listItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
