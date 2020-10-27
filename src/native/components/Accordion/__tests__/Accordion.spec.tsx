import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Accordion from '..';
import { theme } from '../../../test/helpers';

const mockData = [
  {
    title: 'Mock',
    content: 'Mock Content',
  },
];

describe('<Accordion />', () => {
  it('should render Accordion', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
