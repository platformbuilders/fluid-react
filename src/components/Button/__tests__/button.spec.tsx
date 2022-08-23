import { shallow } from 'enzyme';
import faker from 'faker';
import { ThemeProvider } from 'styled-components';

import Button from '..';
import { theme } from '../../../config/helpers';
import { ButtonType as Props } from '../../../types';

const defaultContent = 'Text';
const defaultProps: Props = {
  onPress: jest.fn(),
  children: defaultContent,
  theme,
};

describe('Component: Button', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('snapshots with loading', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} loading />
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('snapshots with other props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} disabled variant="secondary" transparent>
          {defaultContent}
        </Button>
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check props default props', () => {
    // should
    const typeMock = faker.random.words();

    // when
    const component = shallow(
      <Button
        {...defaultProps}
        type={typeMock}
        disabled
        variant="secondary"
        transparent
      >
        {defaultContent}
      </Button>,
    );

    // then
    const wrapper = component.props();
    const child = component.children();

    expect(wrapper.type).toEqual(typeMock);
    expect(wrapper.transparent).toBeTruthy();

    expect(child.contains(defaultContent)).toEqual(true);
  });

  test('should call onPress when pressed', () => {
    // should
    const mockFunction = jest.fn();
    const component = shallow(
      <Button {...defaultProps} onPress={mockFunction} />,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    component.simulate('click');

    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
