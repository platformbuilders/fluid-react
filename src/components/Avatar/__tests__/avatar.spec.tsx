import React from 'react';
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

  test('snapshots', () => {
    const component = shallow(<Avatar {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  test('check props', () => {
    const component = shallow(
      <Avatar
        onPress={jest.fn}
        alt="some_alt"
        src="some_url"
        variant="rounded"
      />,
    );

    expect(component.props().src).toEqual('some_url');
    expect(component.props().alt).toEqual('some_alt');
    expect(component.props().variant).toEqual('rounded');
  });
});
