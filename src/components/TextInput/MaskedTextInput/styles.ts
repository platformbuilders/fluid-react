import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

import { TextInput as TextInputStyle } from '../styles';

const Input = TextInputStyle.withComponent(TextInputMask);

export const TextInput = styled(Input)``;
