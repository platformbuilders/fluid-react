# @platformbuilders/react-ui

[![Build Status][check-badge]][workflows]
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/react-ui.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/react-ui
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/react-ui/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/react-ui/actions
[check-badge]: https://github.com/platformbuilders/react-ui/workflows/check/badge.svg

Welcome to the @platformbuilders/react-ui package here you will find out all of our components shared with the community

# Whats the idea of this repository

Its a place that we can share a little bit of our code base and show how we work on our projects with our components!

# How can i use the library?

Here's how you add our dependencie to your project @platformbuilders/react-ui

1. depend on it:

```bash
yarn add @platformbuilders/react-ui
```

2. import the ThemeProvider from [styled-components](https://styled-components.com/docs/advanced) and provide the Theme following the ThemeType definition.

```jsx
import { ThemeProvider } from 'styled-components';
import { ThemeType } from '@platformbuilders/react-ui';

const theme: ThemeType = { ... };

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

3. use it

```jsx
import { Button } from '@platformbuilders/react-ui';
```
