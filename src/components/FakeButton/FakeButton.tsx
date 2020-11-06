import { View } from 'react-native';
import designTokens from '../../constants/designTokens';
import React from 'react';

const FakeButton = () => (
  <View
    style={{
      height: 64,
      width: 200,
      backgroundColor: designTokens.colors.tertiary,
      borderRadius: 64,
    }}
  />
);

export default FakeButton;
