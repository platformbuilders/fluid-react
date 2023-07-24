import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

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
});
