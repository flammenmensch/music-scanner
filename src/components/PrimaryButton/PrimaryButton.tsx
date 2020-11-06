import { TouchableOpacity } from 'react-native';
import designTokens from '../../constants/designTokens';
import React from 'react';
import Paragraph from '../Paragraph/Paragraph';

const PrimaryButton = (props: { label: string; onPress: () => void }) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      height: 64,
      minWidth: 200,
      backgroundColor: designTokens.colors.accent,
      borderRadius: 64,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
