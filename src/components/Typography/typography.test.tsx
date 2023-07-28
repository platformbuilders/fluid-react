/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

import theme from '../../theme';
import Typography, { TypographyTypeProps } from '.';

const defaultProps: TypographyTypeProps = {};

describe('Component: Typography', () => {
  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Typography {...defaultProps} variant="xl">
          {mockContent}
        </Typography>
      </ThemeProvider>,
    );

    // then
    expect(getByText(mockContent)).toBeInTheDocument();
  });
});
