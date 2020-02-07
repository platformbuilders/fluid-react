import React from 'react';
import { Wrapper } from './styles';

type Props = {
  children: JSX.Element;
  style: object[];
};

const KeyboardAvoidingView: React.FC<Props> = ({ children, style }) => (
  <Wrapper style={style}>{children}</Wrapper>
);

export default KeyboardAvoidingView;
