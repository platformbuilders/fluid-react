import React from 'react';
import { storiesOf } from '@storybook/react-native';
import DisplayVersion from './index';
import displayVersionMarkdown from './displayVersion.md';

storiesOf('DisplayVersion', module)
  .addParameters({
    readme: {
      content: displayVersionMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => <DisplayVersion appVersion="1.0" buildVersion="1" />);
