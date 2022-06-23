import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Icon, { Props } from '..';
import { theme } from '../../../config/helpers';

const defaultProps: Props = {
  name: 'any_name',
};

describe('Component: Icon', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Icon {...defaultProps} />
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('snapshots with other props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Icon {...defaultProps} size="large" color="primary" />
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check default props', () => {
    // when
    const component = shallow(<Icon {...defaultProps} />);

    // then
    const wrapper = component.props();
    const element = component.children().props();

    expect(wrapper.color).toEqual('inherit');
    expect(wrapper.edge).toEqual('start');

    expect(element.color).toEqual('inherit');
    expect(element.fontSize).toEqual('default');
    expect(element.children).toEqual(defaultProps.name);
  });

  test('check props', () => {
    // should
    const sizeMock = 'small';
    const colorMock = 'error';

    // when
    const component = shallow(
      <Icon {...defaultProps} size={sizeMock} color={colorMock} />,
    );

    // then
    const wrapper = component.props();
    const element = component.children().props();

    expect(wrapper.color).toEqual('inherit');
    expect(wrapper.edge).toEqual('start');

    expect(element.color).toEqual(colorMock);
    expect(element.fontSize).toEqual(sizeMock);
    expect(element.children).toEqual(defaultProps.name);
  });
});
