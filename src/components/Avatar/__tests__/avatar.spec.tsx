import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';

import Avatar, { Props } from '..';

let defaultProps: Props = {
  src: 'some_url',
  onPress: jest.fn(),
};

describe('Component: Avatar', () => {
  beforeEach(() => {
    defaultProps = { ...defaultProps };
  });

  test('snapshots with default props', () => {
    const component = shallow(<Avatar {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  test('snapshots with other props', () => {
    const component = shallow(
      <Avatar {...defaultProps} alt="alt text" variant="square" />,
    );

    expect(component).toMatchSnapshot();
  });

  test('check props', () => {
    // should
    const altMock = faker.random.words();
    const srcMock = faker.random.words();
    const variantMock = 'rounded';

    // when
    const component = shallow(
      <Avatar
        onPress={jest.fn}
        src={srcMock}
        alt={altMock}
        variant={variantMock}
      />,
    );

    // then
    expect(component.props().src).toEqual(srcMock);
    expect(component.props().alt).toEqual(altMock);
    expect(component.props().variant).toEqual(variantMock);
  });

  test('should call onPress when pressed', () => {
    // shuold
    const onPressMock = jest.fn();
    const component = shallow(
      <Avatar {...defaultProps} onPress={onPressMock} />,
    );

    // when
    component.simulate('press');

    // then
    expect(onPressMock).toHaveBeenCalled();
  });
});
