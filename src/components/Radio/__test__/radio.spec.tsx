import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import Radio from '..';
import theme from '../../../theme';
import { RadioProps as Props } from '../../../types';

const defaultContent = 'Text';
const defaultProps: Props = {
  checked: true,
  label: defaultContent,
  onChange: jest.fn(),
};

describe('Component: Radio', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Radio {...defaultProps} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('snapshots with another props', () => {
    const valueMock = 'TEXT';
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Radio {...defaultProps} size="medium" value={valueMock} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
