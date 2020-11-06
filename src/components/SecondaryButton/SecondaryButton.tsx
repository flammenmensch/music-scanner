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
      padding: designTokens.gap.m,
      borderColor: designTokens.colors.accent,
      borderRadius: designTokens.borderRadius,
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
