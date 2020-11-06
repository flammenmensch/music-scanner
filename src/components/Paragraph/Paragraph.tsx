import React from 'react';
import { Text, TextProps } from 'react-native';
import designTokens from '../../constants/designTokens';

const paragraphStyles = {
  fontFamily: designTokens.fontFamily,
  color: designTokens.colors.primary,
  fontSize: designTokens.fontSize.m,
};

const Paragraph = (props: TextProps & React.PropsWithChildren<any>) => {
  const { fontSize = designTokens.fontSize.m } = {
    ...paragraphStyles,
    ...props.style,
  };
  const lineHeight = Math.round(fontSize * 1.65);
  return (
    <Text {...props} style={[paragraphStyles, props.style, { lineHeight }]}>
      {props.children}
    </Text>
  );
};

export default React.memo(Paragraph);
