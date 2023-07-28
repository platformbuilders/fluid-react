/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

import theme from '../../theme';
import FormError, { Props } from '.';

const defaultContent = 'Text';
const defaultProps: Props = {
  error: undefined,
};

describe('Component: FormError', () => {
  test('should render the component when the condition is truthy', () => {
    const errorMock = faker.random.words(10);
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FormError {...defaultProps} error={errorMock}>
          {defaultContent}
        </FormError>
      </ThemeProvider>,
    );
    expect(getByText(defaultContent)).toBeInTheDocument();
  });
});
