import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Avatar from './Avatar';
import Welcome from './Welcome';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import Checkbox from './Checkbox';
import Loading from './Loading';
import CustomLottieLoading from './CustomLottieLoading';
import Typography from './Typography';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module).add('Builders Button', () => <Button />);
storiesOf('Avatar', module).add('Builders Avatar', () => <Avatar />);
storiesOf('Input', module)
  .add('Builders Input', () => <TextInput />)
  .add('Builders Password Input', () => <PasswordInput />);
storiesOf('Checkbox', module).add('Builders Checkbox', () => <Checkbox />);
storiesOf('Loading', module)
  .add('Loading Indicators', () => <Loading />)
  .add('Custom Lottie Animation', () => <CustomLottieLoading />);
storiesOf('Typography', module).add('Builders Typography', () => (
  <Typography />
));
