/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import theme from '../../theme';
import Button, { ButtonProps } from './index';

const defaultContent = 'Text';

const defaultProps: ButtonProps = {
  accessibility: 'label',
  onPress: vi.fn(),
  children: defaultContent,
};

vi.mock('../LoadingIndicator', () => ({ default: 'LoadingIndicator' }));

describe('Component: Button', () => {
  test('check props default props', () => {
    // when
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} disabled variant="filled">
          {defaultContent}
        </Button>
      </ThemeProvider>,
    );

    expect(getByText(defaultContent)).toBeInTheDocument();
  });

  test('should call onPress when pressed', () => {
    // should
    const mockFunction = vi.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} onPress={mockFunction}>
          {defaultContent}
        </Button>
      </ThemeProvider>,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    fireEvent.click(getByRole('button'));
    // then
    expect(mockFunction).toHaveBeenCalled();
  });

  test('should not call onPress when pressed', () => {
    // should
    const mockFunction = vi.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} disabled onPress={mockFunction}>
          {defaultContent}
        </Button>
      </ThemeProvider>,
    );

    fireEvent.click(getByRole('button'));
    expect(mockFunction).not.toHaveBeenCalled();
  });
});
