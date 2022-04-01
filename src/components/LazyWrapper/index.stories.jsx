import React from 'react';
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import markdown from './lazy-wrapper.md';
import LazyWrapper from './index';

const optionsVariant = ['flex-start', 'center', 'flex-end'];

const [initialOptionVariant] = optionsVariant;

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
      alignLoadingIndicator={select(
        'alignLoadingIndicator',
        optionsVariant,
        initialOptionVariant,
      )}
      justifyLoadingIndicator={select(
        'justifyLoadingIndicator',
        optionsVariant,
        initialOptionVariant,
      )}
    >
      <div>Conteúdo</div>
    </LazyWrapper>
  ));
