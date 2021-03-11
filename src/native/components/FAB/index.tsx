import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { moderateScale } from 'react-native-size-matters';
import If from '../If';
import { Wrapper, Icon, Title } from './styles';

type Props = {
  id?: string;
  accessibility: string;
  onPress(): void;
  color?: string;
  title?: string;
  size?: number;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  relativePos?: boolean;
  hasShadow?: boolean;
};

const FAB: FC<Props> = ({
  size = moderateScale(70),
  id,
  accessibility,
  title,
  color,
  iconName,
  iconColor,
  iconSize,
  onPress,
  relativePos = false,
  hasShadow = false,
  ...rest
}) => (
  <Wrapper
    id={id || accessibility}
    accessibility={accessibility}
    onPress={onPress}
    size={size}
    color={color}
    relativePos={relativePos}
    hasShadow={hasShadow}
    {...rest}
  >
    <Icon
      id={`icon_${id || accessibility}`}
      name={iconName || 'plus'}
      accessibility={accessibility}
      iconColor={iconColor}
      iconSize={iconSize}
    />
    <If condition={!isEmpty(title)}>
      <Title accessibility={title || ''}>{title}</Title>
    </If>
  </Wrapper>
);

export default FAB;
