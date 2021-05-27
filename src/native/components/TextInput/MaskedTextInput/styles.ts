import styled from 'styled-components/native';
import { TextInputMask } from '@platformbuilders/react-native-masked-text';
import { TextInput as TextInputStyle } from '../styles';

const Input = TextInputStyle.withComponent(TextInputMask);

type Props = {
  placeholderTextColor?: string;
};

export const TextInput = styled(Input).attrs((props: Props) => ({
  placeholderTextColor: props.placeholderTextColor
    ? props.placeholderTextColor
    : '#72727260',
}))`
  max-width: 100%;
`;
