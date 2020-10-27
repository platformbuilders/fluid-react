import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Text from './index';
import typographyMarkdown from './typography.md';

const optionsVariants = [
  'largeTitle',
  'title1',
  'title2',
  'title3',
  'title4',
  'headline',
  'body',
  'subhead',
  'footnote',
  'caption1',
  'caption2',
];

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: typographyMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => (
    <Text variant={select('variant', optionsVariants, 'title1')}>
      {text('children', 'Title 1')}
    </Text>
  ));
