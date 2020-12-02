import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { moderateScale } from 'react-native-size-matters';
import If from '../If';
import Shadow from '../Shadow';
import { Wrapper, Icon, Title } from './styles';

type Props = {
  id: string;
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
  <Shadow hasShadow={hasShadow}>
    <Wrapper
      id={id}
      accessibility={accessibility}
      onPress={onPress}
      size={size}
      color={color}
      relativePos={relativePos}
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
  </Shadow>
);

export default FAB;
