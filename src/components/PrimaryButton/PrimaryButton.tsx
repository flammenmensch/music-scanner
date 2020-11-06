import { TouchableOpacity } from 'react-native';
import designTokens from '../../constants/designTokens';
import React from 'react';
import Paragraph from '../Paragraph/Paragraph';

const PrimaryButton = (props: { label: string; onPress: () => void }) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      padding: designTokens.gap.m,
      minWidth: 200,
      borderRadius: designTokens.borderRadius,
      backgroundColor: designTokens.colors.accent,
      marginBottom: designTokens.gap.m,
    }}
  >
    <Paragraph
      style={{
        textAlign: 'center',
        color: designTokens.colors.black,
        fontWeight: '500',
      }}
    >
      {props.label}
    </Paragraph>
  </TouchableOpacity>
);

export default PrimaryButton;
