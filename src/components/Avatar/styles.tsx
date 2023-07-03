import styled from 'styled-components';
import MaterialAvatar from '@material-ui/core/Avatar';
import Touchable from '../Touchable';

export const DefaultAvatar = styled(({ onPress, accessibility, ...rest }) => (
  <Touchable
    accessibility={accessibility || 'Foto ou Avatar'}
    onPress={onPress}
  >
    <MaterialAvatar {...rest} />
  </Touchable>
))``;
