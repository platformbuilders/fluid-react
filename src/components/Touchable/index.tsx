import React, { FC } from 'react';
import { CustomTouchable } from './styles';

export type Props = {
  accessibility: string;
  accessibilityLabel?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  onPress?: (param: any) => void;
  testID?: string;
};

const Touchable: FC<Props> = ({ children, className, onPress, ...rest }) => (
  <CustomTouchable className={className} onClick={onPress} {...rest}>
    {children}
  </CustomTouchable>
);

export default Touchable;
