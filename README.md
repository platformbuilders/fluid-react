# @platformbuilders/react-elements

[![Build Status][check-badge]][workflows]
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/react-elements.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/react-elements
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/react-elements/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/react-elements/actions
[check-badge]: https://github.com/platformbuilders/react-elements/workflows/check/badge.svg

Welcome to the @platformbuilders/elements package here you will find out all of our components shared with the community

# Whats the idea of this repository

Its a place that we can share a little bit of our code base and show how we work on our projects with our components!

# How can i use the library?

Here's how you add our dependencie to your project @platformbuilders/elements

1. depend on it:

```bash
yarn add @platformbuilders/react-elements
```

2. import the ThemeProvider from [styled-components](https://styled-components.com/docs/advanced) and provide the Theme following the ThemeType definition.

```jsx
import { ThemeProvider } from 'styled-components';
import { ThemeType } from '@platformbuilders/react-elements';

const theme: ThemeType = { ... };

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

3. use it

```jsx
import { Button } from '@platformbuilders/react-elements';
```
