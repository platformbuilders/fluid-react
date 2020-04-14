import React, { ReactNode, FC } from 'react';
import { CustomTouchable } from './styles';

interface Props {
  children: ReactNode;
  onPress(): void;
}
const Touchable: FC<Props> = ({ children, onPress, ...rest }) => (
  <CustomTouchable onClick={onPress} {...rest}>
    {children}
  </CustomTouchable>
);

export default Touchable;
