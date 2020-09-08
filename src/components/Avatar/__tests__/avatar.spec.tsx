import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';

import Avatar from '..';

jest.mock('@platformbuilders/helpers', () => ({
  currencyParser: jest.fn(),
  getTheme: jest.fn(),
}));

jest.mock('react-lottie');

let defaultProps = {
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
    const altSpy = faker.random.words();
    const srcSpy = faker.random.words();
    const variantSpy = 'rounded';

    // when
    const component = shallow(
      <Avatar
        onPress={jest.fn}
        src={srcSpy}
        alt={altSpy}
        variant={variantSpy}
      />,
    );

    // then
    expect(component.props().src).toEqual(srcSpy);
    expect(component.props().alt).toEqual(altSpy);
    expect(component.props().variant).toEqual(variantSpy);
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
