import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import Link from '..';
import theme from '../../../theme';

const defaultContent = 'Text';
const defaultProps: any = {
  onPress: jest.fn(),
  children: defaultContent,
};

describe('Component: Link', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Link {...defaultProps} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should call onPress when pressed', () => {
    // should
    const mockFunction = jest.fn();
    const { getByText } = render(
      <Link {...defaultProps} onPress={mockFunction}>
        {defaultContent}
      </Link>,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    // component.props().onClick();
    fireEvent.click(getByText(defaultContent));

    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
