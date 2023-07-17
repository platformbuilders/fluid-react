import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../theme';
import Select, { SelectProps as Props } from '../index';

const defaultProps: Props = {
  label: 'Gender',
  selectedValue: 'Male',
  onChange: jest.fn(),
  values: [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
  ],
};

describe('Component: Select', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Select {...defaultProps} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
