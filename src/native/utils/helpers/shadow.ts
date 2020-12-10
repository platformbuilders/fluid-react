import { moderateScale } from 'react-native-size-matters';

const shadowRadius = `${moderateScale(4)}px`;

export const getShadow = (): string => `
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: ${shadowRadius};
  elevation: 3;
`;
