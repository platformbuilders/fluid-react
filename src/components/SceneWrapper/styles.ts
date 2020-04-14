import styled from 'styled-components';
import { getTheme } from '~/utils/helpers';

export const ChildrenWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding: ${getTheme('sceneSpacing')}px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Constrain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 550px;
`;
