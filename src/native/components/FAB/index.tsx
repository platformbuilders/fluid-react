import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { moderateScale } from 'react-native-size-matters';
import If from '../If';
import { Wrapper, Icon, Title } from './styles';

type Props = {
  id: string;
  accessibility: string;
  onPress(): void;
  title?: string;
  size?: number;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
};

const FAB: FC<Props> = ({
  size = moderateScale(70),
  id,
  accessibility,
  title,
  iconName,
  iconColor,
  iconSize,
  onPress,
  ...rest
}) => (
  <Wrapper
    id={id}
    accessibility={accessibility}
    onPress={onPress}
    size={size}
    {...rest}
  >
    <Icon
      id={id}
      name={iconName || 'plus'}
      accessibility={accessibility}
      iconColor={iconColor}
      iconSize={iconSize}
    />
    <If condition={!isEmpty(title)}>
      <Title>{title}</Title>
    </If>
  </Wrapper>
);

export default FAB;
