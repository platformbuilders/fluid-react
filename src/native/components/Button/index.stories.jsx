import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './index';
import buttonMarkdown from './button.md';
import { colors } from '../../theme';

const optionsVariant = {
  primary: colors.primary.main,
  secondary: colors.secondary.main,
  tertiary: colors.tertiary.main,
  accent: colors.accent.main,
  flat: 'transparent',
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: buttonMarkdown,
      sidebar: buttonMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Simple example', () => (
    <Button
      tertiary={boolean('tertiary', false)}
      secondary={boolean('secondary', false)}
      style={{
        width: 100,
        height: 50,
        backgroundColor: select('variant', optionsVariant, 'primary'),
      }}
      disabled={boolean('disabled', false)}
      rounded={boolean('rounded', false)}
      onPress={action('button-click')}
    >
      {text('Text', 'Button Test')}
    </Button>
  ));
