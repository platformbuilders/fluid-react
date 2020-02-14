import React, { useState } from 'react';
import { StyledInput } from './styles';
import CenteredView from '../utils/CenteredView';

const TextInput = () => {
  const [input, setInput] = useState('');
  return (
    <CenteredView>
      <StyledInput
        autoFocus
        dark
        autoComplete="email"
        autoCapitalize="none"
        keyboardType="email-address"
        id="lg_email_input"
        accessibility="Campo de e-mail para realizar login"
        label="e-mail"
        value={input}
        onChangeText={setInput}
      />
    </CenteredView>
  );
};

export default TextInput;
