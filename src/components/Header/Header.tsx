import React from 'react';
import { View } from 'react-native';
import Paragraph from '../Paragraph/Paragraph';
import designTokens from '../../constants/designTokens';
import IconButton from '../IconButton/IconButton';

const Header = () => (
  <View
    style={{
      padding: designTokens.gap.m,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      position: 'relative',
    }}
  >
    <Paragraph
      style={{
        fontWeight: '500',
        fontSize: designTokens.fontSize.l,
      }}
    >
      music scanner
    </Paragraph>
    <IconButton
      name="history"
      color={designTokens.colors.primary}
      onPress={console.log}
      style={{
        position: 'absolute',
        right: designTokens.gap.m,
      }}
    />
  </View>
);

export default Header;
