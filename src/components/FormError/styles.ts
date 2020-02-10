import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';

export const ErrorText = styled.Text`
  min-height: 17px;
  color: ${getTheme('failure')};
  margin-top: 5px;
`;
