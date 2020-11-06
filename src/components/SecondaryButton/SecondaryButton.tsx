import { TouchableOpacity } from 'react-native';
import designTokens from '../../constants/designTokens';
import React from 'react';
import Paragraph from '../Paragraph/Paragraph';

const SecondaryButton = (props: { label: string; onPress: () => void }) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      borderWidth: 1,
      minWidth: 200,
      height: 64,
      paddingLeft: designTokens.gap.m,
      paddingRight: designTokens.gap.m,
      borderColor: designTokens.colors.accent,
      borderRadius: 64,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Paragraph
      style={{
        textAlign: 'center',
        color: designTokens.colors.accent,
        fontWeight: '500',
      }}
    >
      {props.label}
    </Paragraph>
  </TouchableOpacity>
);

export default SecondaryButton;
