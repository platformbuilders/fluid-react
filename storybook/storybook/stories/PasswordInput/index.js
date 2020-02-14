import React, { useState } from 'react';
import CenteredView from '../utils/CenteredView';
import { StyledPasswordInput } from './styles';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  return (
    <CenteredView>
      <StyledPasswordInput
        id="lg_password_input"
        accessibility="Campo de senha para realizar login"
        label="senha"
        returnKeyType="send"
        dark
        value={password}
        onChangeText={setPassword}
      />
    </CenteredView>
  );
};

export default PasswordInput;
