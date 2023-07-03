import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import Icon, { IconType } from '..';
import theme from '../../../theme';

const defaultProps: IconType = {
  name: 'any_name',
};

describe('Component: Icon', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Icon {...defaultProps} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('snapshots with other props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Icon {...defaultProps} size="large" color="primary" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
