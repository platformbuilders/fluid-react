import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import Checkbox, { CheckboxProps } from '..';
import theme from '../../../theme';

const defaultProps: CheckboxProps = {
  checked: false,
  onChange: jest.fn(),
  label: 'Text',
  name: 'Text',
};

describe('Component: Checkbox', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Checkbox {...defaultProps} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should call onPress when pressed', () => {
    // should
    const mockFunction = jest.fn();
    const { getByRole } = render(
      <Checkbox {...defaultProps} onChange={mockFunction} />,
    );

    expect(mockFunction).not.toHaveBeenCalled();

    fireEvent.click(getByRole('checkbox'));
    expect(mockFunction).toHaveBeenCalled();
  });
});
