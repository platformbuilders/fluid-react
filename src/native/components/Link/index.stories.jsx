import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import linkMarkdown from './link.md';
import Link from './index';

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

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: linkMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => (
    <Link
      variant={select('variant', optionsVariants, 'title1')}
      disabled={boolean('disabled', false)}
      onPress={action('link-click')}
      id="text _platform_builders"
      accessibility="testes"
      testID="id_text_platform_builders"
    >
      {text('children', 'Text Link')}
    </Link>
  ));
