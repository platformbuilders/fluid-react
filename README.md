# @platformbuilders/react-native-ui

[![Build Status][check-badge]][workflows]
[![npm][npm-badge]][npm]
[![react-native][rn-badge]][rn]
[![MIT][license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/react-native-ui.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/react-native-ui
[rn]: https://facebook.github.io/react-native
[rn-badge]: https://img.shields.io/badge/react--native-v0.61-05A5D1.svg
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/react-native-element/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/react-native-ui/actions
[check-badge]: https://github.com/platformbuilders/react-native-ui/workflows/check/badge.svg

Welcome to the @platformbuilders/react-native-ui package here you will find out all of our components shared with the community

# Whats the idea of this repository

Its a place that we can share a little bit of our code base and show how we work on our projects with our components!

# How can i use the library?

Now it's under development and we will release it soon!

You will need to install some native dependencies that we use on the code:

```bash
yarn add react-native-camera react-native-vector-icons react-native-haptic react-native-image-picker react-native-svg react-native-fast-image react-native-checkbox && cd ios && pod install
```

Here's how you add our dependencie to your project @platformbuilders/react-native-ui

1. depend on it:

```bash
yarn add @platformbuilders/react-native-ui
```

2. import the ThemeProvider from [styled-components](https://styled-components.com/docs/advanced) and provide the Theme following the ThemeType definition.

```jsx
import { ThemeProvider } from 'styled-components';
import { ThemeType } from '@platformbuilders/react-native-ui';

const theme: ThemeType = { ... };

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

3. use it

```jsx
import { Button } from '@platformbuilders/react-native-ui';
```
