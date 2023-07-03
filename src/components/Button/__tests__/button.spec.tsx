import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import Button from '..';
import theme from '../../../theme';
import { ButtonProps as Props } from '../../../types';

const defaultContent = 'Text';
const defaultProps: Props = {
  accessibility: 'label',
  onPress: jest.fn(),
  children: defaultContent,
};

describe('Component: Button', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('snapshots with loading', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} loading />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('snapshots with other props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} disabled variant="secondary">
          {defaultContent}
        </Button>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('check props default props', () => {
    // when
    const { getByText } = render(
      <Button {...defaultProps} disabled variant="secondary">
        {defaultContent}
      </Button>,
    );

    expect(getByText(defaultContent)).toBeInTheDocument();
  });

  test('should call onPress when pressed', () => {
    // should
    const mockFunction = jest.fn();
    const { getByRole } = render(
      <Button {...defaultProps} onPress={mockFunction}>
        {defaultContent}
      </Button>,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    fireEvent.click(getByRole('button'));
    // then
    expect(mockFunction).toHaveBeenCalled();
  });
  test('should not call onPress when pressed', () => {
    // should
    const mockFunction = jest.fn();
    const { getByRole } = render(
      <Button {...defaultProps} disabled onPress={mockFunction}>
        {defaultContent}
      </Button>,
    );

    fireEvent.click(getByRole('button'));
    expect(mockFunction).not.toHaveBeenCalled();
  });
});
