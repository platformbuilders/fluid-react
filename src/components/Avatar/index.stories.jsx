import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import markdown from './avatar.md';
import Avatar from './index';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: markdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => (
    <Avatar
      onPress={action('clicked')}
      src={text(
        'src',
        'https://api.adorable.io/avatars/285/abott@adorable.png',
      )}
    />
  ));
