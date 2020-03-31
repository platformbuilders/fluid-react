import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';

const defaultColor = getTheme('primary.contrast');

export const Text = styled.Text`
  color: ${defaultColor};
`;
