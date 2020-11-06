import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import designTokens from '../../constants/designTokens';
import Template from '../Template/Template';

const Loader = () => (
  <Template
    renderImage={() => (
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: designTokens.colors.tertiary,
          },
        ]}
      >
        <ActivityIndicator size="small" />
      </View>
    )}
    renderLabel={() => (
      <View
        style={{
          width: 256,
          height: designTokens.fontSize.m,
          backgroundColor: designTokens.colors.tertiary,
        }}
      />
    )}
  />
);

export default Loader;
