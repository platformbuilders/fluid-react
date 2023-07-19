import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import Radio from '..';
import theme from '../../../theme';
import { Props } from '../index';

const defaultContent = 'Text';
const defaultProps: Props = {
  label: defaultContent,
  onChange: jest.fn(),
  group: 'group1',
  id: 'id1',
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
        <Radio {...defaultProps} label={valueMock} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
