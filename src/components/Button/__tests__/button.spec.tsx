import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Button from '..';
import { theme } from '../../../config/helpers';
import { ButtonProps as Props } from '../../../types';

const defaultContent = 'Text';
const defaultProps: Props = {
  accessibility: 'label',
  onPress: jest.fn(),
  children: defaultContent,
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
        <Button {...defaultProps} disabled variant="secondary">
          {defaultContent}
        </Button>
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check props default props', () => {
    // when
    const component = shallow(
      <Button {...defaultProps} disabled variant="secondary">
        {defaultContent}
      </Button>,
    );

    // then
    const child = component.children();

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
