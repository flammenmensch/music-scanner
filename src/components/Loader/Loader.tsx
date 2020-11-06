import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import designTokens from '../../constants/designTokens';
import Template from '../Template/Template';
import FakeButton from '../FakeButton/FakeButton';
import Gap from '../Gap/Gap';
import Paragraph from '../Paragraph/Paragraph';

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
            borderRadius: designTokens.borderRadius,
            backgroundColor: designTokens.colors.tertiary,
          },
        ]}
      >
        <ActivityIndicator size="small" />
      </View>
    )}
    renderLabel={() => (
      <Paragraph
        style={{
          textAlign: 'center',
        }}
      >
        Searching...
      </Paragraph>
    )}
    renderFooter={() => (
      <React.Fragment>
        <FakeButton />
        <Gap height={designTokens.gap.m} />
        <FakeButton />
      </React.Fragment>
    )}
  />
);

export default Loader;
