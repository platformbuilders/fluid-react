import { FC } from 'react';
import { CustomTouchable } from './styles';

export type Props = {
  onPress(): void;
};

const Touchable: FC<Props> = ({ children, onPress, ...rest }) => (
  <CustomTouchable onClick={onPress} {...rest}>
    {children}
  </CustomTouchable>
);

export default Touchable;
