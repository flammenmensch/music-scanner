import React from 'react';
import { View } from 'react-native';
import Paragraph from '../Paragraph/Paragraph';
import designTokens from '../../constants/designTokens';

const Header = () => (
  <View
    style={{
      paddingTop: designTokens.gap.m,
      paddingBottom: designTokens.gap.m,
    }}
  >
    <Paragraph style={{ fontWeight: '500', fontSize: designTokens.fontSize.l }}>
      music scanner
    </Paragraph>
  </View>
);

export default Header;
