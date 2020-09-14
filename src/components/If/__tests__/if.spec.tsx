import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';

import If from '../index';

const defaultContent = faker.random.word();

describe('Component: If', () => {
  test('should render the component when the condition is truthy', () => {
    const component = shallow(<If condition>{defaultContent}</If>);

    expect(component.contains(defaultContent)).toEqual(true);
  });

  it('should not render the component when the condition is falsy', () => {
    const component = shallow(<If condition={false}>{defaultContent}</If>);

    expect(component.contains(defaultContent)).toEqual(false);
  });
});
