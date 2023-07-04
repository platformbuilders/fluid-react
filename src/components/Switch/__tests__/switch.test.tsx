import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import Switch from '..';
import theme from '../../../theme';

describe('Component: Switch', () => {
  test('snapshots', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Switch title="Anônimo?" value={false} variant="secondary" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
