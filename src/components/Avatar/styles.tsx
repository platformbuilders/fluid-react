import styled from 'styled-components';
import MaterialAvatar from '@material-ui/core/Avatar';
import { Touchable } from '..';

export const DefaultAvatar = styled(
  ({ onPress, accessibility, className, ...rest }) => (
    <Touchable
      className={className}
      accessibility={accessibility || 'Foto ou Avatar'}
      onPress={onPress}
    >
      <MaterialAvatar {...rest} />
    </Touchable>
  ),
)``;
