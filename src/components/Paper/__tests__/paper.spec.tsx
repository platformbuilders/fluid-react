import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

import Paper from '..';
import theme from '../../../theme';

const defaultContent = 'Text';
const defaultProps = {};

describe('Component: Paper', () => {
  test('snapshots', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Paper {...defaultProps}>{defaultContent}</Paper>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const { getByText } = render(
      <Paper {...defaultProps}>{mockContent}</Paper>,
    );

    // then
    expect(getByText(mockContent)).toBeInTheDocument();
  });
});
