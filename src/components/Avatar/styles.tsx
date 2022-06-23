import styled from 'styled-components';
import MaterialAvatar from '@material-ui/core/Avatar';
import { Touchable } from '..';

export const DefaultAvatar = styled(({ onPress, ...rest }) => (
  <Touchable onPress={onPress}>
    <MaterialAvatar {...rest} />
  </Touchable>
))``;
