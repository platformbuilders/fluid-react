import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../theme';
import Select from '../index';

const defaultProps = {
  id: 'gender',
  selectedValue: 'Male',
  onValueChange: jest.fn(),
  options: [
    {
      value: 'Male',
      option: 'Male',
    },
    {
      value: 'Female',
      option: 'Female',
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
