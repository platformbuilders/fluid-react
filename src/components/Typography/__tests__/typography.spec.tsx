import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

import Typography from '..';
import theme from '../../../theme';
import { TypographyType as Props } from '../../../types';

const defaultContent = 'Text';
const defaultProps: Props = {};

describe('Component: Typography', () => {
  test('snapshots', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Typography {...defaultProps}>{defaultContent}</Typography>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const { getByText } = render(
      <Typography {...defaultProps} variant="xl">
        {mockContent}
      </Typography>,
    );

    // then

    expect(getByText(mockContent)).toBeInTheDocument();
  });
});
