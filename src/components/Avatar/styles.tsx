import styled from 'styled-components';
import MaterialAvatar from '@material-ui/core/Avatar';
import { Touchable } from '..';

export const DefaultAvatar = styled(
  ({ onPress, accessibility, className, ...rest }) => (
    <Touchable
      accessibility={accessibility || 'Foto ou Avatar'}
      onPress={onPress}
      className={className}
    >
      <MaterialAvatar {...rest} />
    </Touchable>
  ),
)``;
