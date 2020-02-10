import React, { FC } from 'react';
import { View } from 'react-native';

const shadowStyle = {
  shadowColor: '#212121',
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.28,
  shadowRadius: 2,
  elevation: 2,
  width: '100%',
};

type Props = {
  children: JSX.Element;
};

const Shadow: FC<Props> = ({ children }) => (
  <View style={shadowStyle}>{children}</View>
);

export default Shadow;
