# @platformbuilders/fluid-react

[![Build Status][check-badge]][workflows]
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/fluid-react.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/fluid-react
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/fluid-react/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/fluid-react/actions
[check-badge]: https://github.com/platformbuilders/fluid-react/workflows/check/badge.svg

Welcome to the @platformbuilders/elements package here you will find out all of our components shared with the community

# Whats the idea of this repository

Its a place that we can share a little bit of our code base and show how we work on our projects with our components!

# How can i use the library?

Here's how you add our dependencie to your project @platformbuilders/elements

1. depend on it:

```bash
yarn add @platformbuilders/fluid-react
```

2. import the ThemeProvider from [styled-components](https://styled-components.com/docs/advanced) and provide the Theme following the ThemeType definition.

```jsx
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { ThemeType } from '@platformbuilders/fluid-react';

const theme: ThemeType = { ... };

<ThemeProvider theme={theme}>
 <StylesProvider injectFirst>
      <App />
  </StylesProvider>
</ThemeProvider>
```

3. use it

```jsx
import { Button } from '@platformbuilders/fluid-react';
```
