/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';
import { fireEvent, render } from '@testing-library/react';

import theme from '../../theme';
import Touchable, { Props } from '.';

const defaultContent = 'Text';
const defaultProps: Props = {
  accessibility: 'accessibility',
  onPress: vi.fn(),
};

describe('Component: Touchable', () => {
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
    const mockFunction = vi.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Touchable {...defaultProps} onPress={mockFunction}>
          {defaultContent}
        </Touchable>
      </ThemeProvider>,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    fireEvent.click(getByRole('button'));

    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
