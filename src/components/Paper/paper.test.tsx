/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

import theme from '../../theme';
import Paper from '.';

const defaultProps = {};

describe('Component: Paper', () => {
  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Paper {...defaultProps}>{mockContent}</Paper>
      </ThemeProvider>,
    );

    // then
    expect(getByText(mockContent)).toBeInTheDocument();
  });
});
