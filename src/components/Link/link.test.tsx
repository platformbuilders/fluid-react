/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import theme from '../../theme';
import Link from '.';

const defaultContent = 'Text';
const defaultProps: any = {
  onPress: vi.fn(),
  children: defaultContent,
};

describe('Component: Link', () => {
  test('should call onPress when pressed', () => {
    // should
    const mockFunction = vi.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Link {...defaultProps} onPress={mockFunction}>
          {defaultContent}
        </Link>
      </ThemeProvider>,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    // component.props().onClick();
    fireEvent.click(getByText(defaultContent));

    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
