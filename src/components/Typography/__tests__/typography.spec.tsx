import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Typography from '..';
import { TypographyType as Props } from '../../../types';
import { theme } from '../../../config/helpers';

const defaultContent = 'Text';
const defaultProps: Props = {};

describe('Component: Typography', () => {
  test('snapshots', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Typography {...defaultProps}>{defaultContent}</Typography>
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const component = shallow(
      <Typography {...defaultProps} variant="h1">
        {mockContent}
      </Typography>,
    );

    // then
    const { variant } = component.props();

    expect(variant).toEqual('h1');
    expect(component.children().text()).toEqual(mockContent);
  });
});
