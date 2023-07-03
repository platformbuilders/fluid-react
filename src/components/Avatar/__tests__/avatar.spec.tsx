import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { fireEvent, render } from '@testing-library/react';
import Avatar, { Props } from '..';
import theme from '../../../theme';

const defaultProps: Props = {
  src: 'some_url',
  onPress: jest.fn(),
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

  test('check props', () => {
    // should
    const altMock = faker.random.words();
    const srcMock = faker.random.words();
    const variantMock = 'rounded';

    // when
    const { getByAltText } = render(
      <Avatar
        {...defaultProps}
        src={srcMock}
        alt={altMock}
        variant={variantMock}
      />,
    );

    // then
    expect(getByAltText(altMock)).toBeInTheDocument();
  });

  test('should call onPress when pressed', () => {
    // should
    const mockFunction = jest.fn();
    const newProps = { ...defaultProps, size: '20' };

    const { getByRole } = render(
      <Avatar {...newProps} onPress={mockFunction} />,
    );

    // when
    fireEvent.click(getByRole('button'));

    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
