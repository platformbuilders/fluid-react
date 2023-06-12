import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Link from '..';
import { theme } from '../../../config/helpers';
import { LinkProps as Props } from '../../../types/Link';

const defaultContent = 'Text';
const defaultProps: Props = {
  onPress: jest.fn(),
  children: defaultContent,
};

describe('Component: Link', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Link {...defaultProps} />
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('should call onPress when pressed', () => {
    // should
    const mockFunction = jest.fn();
    const component = shallow(
      <Link {...defaultProps} onPress={mockFunction}>
        {defaultContent}
      </Link>,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    // component.props().onClick();
    component.simulate('click');

    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
