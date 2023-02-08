import React, { FC } from 'react';
import { CustomTouchable, Wrapper } from './styles';

export type TouchableProps = {
  id?: string;
  accessibility: string;
  testID?: string;
  disabled?: boolean;
  onPress?: (param: any) => void;
  children?: React.ReactNode;
  className?: string;
};

const Touchable: FC<TouchableProps> = ({
  className,
  children,
  onPress,
  ...rest
}) => (
  <Wrapper className={className}>
    <CustomTouchable onClick={onPress} {...rest}>
      {children}
    </CustomTouchable>
  </Wrapper>
);

export default Touchable;
