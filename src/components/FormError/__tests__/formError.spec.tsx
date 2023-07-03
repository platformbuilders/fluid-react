import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

import FormError, { Props } from '..';
import theme from '../../../theme';

const defaultContent = 'Text';
const defaultProps: Props = {
  error: undefined,
};

describe('Component: FormError', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <FormError {...defaultProps}>{defaultContent}</FormError>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('snapshots with error props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <FormError {...defaultProps} error="Error text">
          {defaultContent}
        </FormError>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should render the component when the condition is truthy', () => {
    const errorMock = faker.random.words(10);
    const { getByText } = render(
      <FormError {...defaultProps} error={errorMock}>
        {defaultContent}
      </FormError>,
    );
    expect(getByText(defaultContent)).toBeInTheDocument();

    // expect(component.contains(defaultContent)).toEqual(true);
  });
});
