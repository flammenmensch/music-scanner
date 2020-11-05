import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import designTokens from '../../constants/designTokens';

const paragraphStyles: TextStyle = {
  fontFamily: designTokens.fontFamily,
  color: designTokens.colors.primary,
  fontSize: designTokens.fontSize.m,
  lineHeight: Math.round(designTokens.fontSize.m * 1.75),
};

const Paragraph = (props: TextProps & React.PropsWithChildren<any>) => (
  <Text {...props} style={[paragraphStyles, props.style]}>
    {props.children}
  </Text>
);

export default React.memo(Paragraph);
