import React from 'react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import markdown from './lazy-wrapper.md';
import LazyWrapper from './index';

storiesOf('LazyWrapper', module)
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
    <LazyWrapper
      loading={boolean('loading', false)}
      customLoadingColor={text('customLoadingColor', '')}
      customLoadingIndicatorSize={number('customLoadingIndicatorSize', 20)}
    >
      <div>Conteúdo</div>
    </LazyWrapper>
  ));
