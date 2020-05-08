// @flow

import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withPaddings } from 'storybook-addon-paddings';
import { addReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';
import { colors, metrics, animations, radius, } from '../src/theme';

const theme = {
  ...colors,
  ...metrics,
  ...animations,
  ...radius,
}

addDecorator(addReadme);
addDecorator(withPaddings);
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
  backgrounds: [
    { name: 'default', value: '#d6dbdf', default: true },
    { name: 'primary', value: '#00aced' },
    { name: 'secondary', value: '#28b463' },
    { name: 'tertiary', value: '#2c3e50' },
  ],
  paddings: [
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px', default: true },
    { name: 'Large', value: '64px' },
  ],
  readme: {
    codeTheme: 'darcula',
  }
});

const req = require.context('../src', true, /\.stories\.(js|jsx|tsx|ts)$/);
const loadStories = () => req.keys().forEach(filename => req(filename));
configure(loadStories, module);
