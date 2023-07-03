import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { fireEvent, render } from '@testing-library/react';

import Touchable, { Props } from '..';
import theme from '../../../theme';

const defaultContent = 'Text';
const defaultProps: Props = {
  accessibility: 'accessibility',
  onPress: jest.fn(),
};

describe('Component: Touchable', () => {
  test('snapshots', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Touchable {...defaultProps}>{defaultContent}</Touchable>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const { getByText } = render(
      <Touchable {...defaultProps}>{mockContent}</Touchable>,
    );

    // then
    expect(getByText(mockContent)).toBeInTheDocument();
  });

  test('should call onPress when clicked', () => {
    // should
    const mockFunction = jest.fn();
    const { getByRole } = render(
      <Touchable {...defaultProps} onPress={mockFunction}>
        {defaultContent}
      </Touchable>,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    fireEvent.click(getByRole('button'));

    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
