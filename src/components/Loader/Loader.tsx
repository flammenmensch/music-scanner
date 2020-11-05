import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import designTokens from '../../constants/designTokens';

const Loader = () => (
  <React.Fragment>
    <View
      style={{
        width: 256,
        height: 256,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: designTokens.colors.tertiary,
        marginBottom: designTokens.gap.m,
      }}
    >
      <ActivityIndicator size="small" />
    </View>
    <View
      style={{
        width: 256,
        height: designTokens.fontSize.m,
        backgroundColor: designTokens.colors.tertiary,
        marginBottom: designTokens.gap.s,
      }}
    />
  </React.Fragment>
);

export default Loader;
