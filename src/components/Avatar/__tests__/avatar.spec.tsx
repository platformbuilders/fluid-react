import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Avatar, { Props } from '..';
import theme from '../../../theme';

const defaultProps: Props = {
  src: 'some_url',
  alt: 'some image',
  onClick: jest.fn(),
};

describe('Component: Avatar', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Avatar {...defaultProps} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('snapshots with other props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Avatar {...defaultProps} alt="alt text" variant="square" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
