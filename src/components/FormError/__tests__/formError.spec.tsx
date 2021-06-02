import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import { ThemeProvider } from 'styled-components';

import FormError, { Props } from '..';
import { theme } from '../../../config/helpers';

const defaultContent = 'Text';
const defaultProps: Props = {
  error: undefined,
};

describe('Component: FormError', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FormError {...defaultProps}>{defaultContent}</FormError>
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('snapshots with error props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FormError {...defaultProps} error="Error text">
          {defaultContent}
        </FormError>
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('should render the component when the condition is truthy', () => {
    const errorMock = faker.random.words(10);
    const component = shallow(
      <FormError {...defaultProps} error={errorMock}>
        {defaultContent}
      </FormError>,
    );

    expect(component.contains(defaultContent)).toEqual(true);
  });
});
