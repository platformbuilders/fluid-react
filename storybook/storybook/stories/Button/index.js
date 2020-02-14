import React from 'react';
import { Button as BuildersButton } from 'builders-ui';
import styled from 'styled-components/native';
import CenteredView from '../utils/CenteredView';

export const StyledButton = styled(BuildersButton).attrs({ secondary: true })`
  width: 232px;
  margin-top: 45px;
  align-self: center;
`;

class Button extends React.Component {
  render() {
    return (
      <CenteredView>
        <StyledButton>CLICK ME</StyledButton>
      </CenteredView>
    );
  }
}

export default Button;
