import styled from 'styled-components/native';
import DefaultCheckbox from 'react-native-check-box';

import { colors } from '../../theme';

export const Wrapper = styled.View``;

export const defaultLabelStyle = {
  fontSize: 16,
  color: colors.primary.contrast,
  opacity: 0.7,
};

export const containerStyle = {
  marginBottom: 0,
};

type Props = {
  testID: string;
  accessibilityLabel: string;
};

export const CheckBox = styled(DefaultCheckbox)<Props>``;
