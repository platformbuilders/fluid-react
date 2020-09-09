import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Avatar, { Props } from '..';
import { theme } from '../../../config/helpers';

const defaultProps: Props = {
  src: 'some_url',
  onPress: jest.fn(),
};

describe('Component: Avatar', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Avatar {...defaultProps} />
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('snapshots with other props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Avatar {...defaultProps} alt="alt text" variant="square" />
      </ThemeProvider>,
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
    const { src, alt, variant } = component.props();

    expect(src).toEqual(srcMock);
    expect(alt).toEqual(altMock);
    expect(variant).toEqual(variantMock);
  });

  test('should call onPress when pressed', () => {
    // should
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
