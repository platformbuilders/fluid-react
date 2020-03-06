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

const Shadow: FC = ({ children }) => (
  <View style={shadowStyle}>{children}</View>
);

export default Shadow;
