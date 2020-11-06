import React from 'react';
import { View } from 'react-native';
import Paragraph from '../Paragraph/Paragraph';
import designTokens from '../../constants/designTokens';
import IconButton from '../IconButton/IconButton';

interface Props {
  title: string;
  rightIconName: undefined;
}

interface PropsWithRightIcon {
  title: string;
  rightIconName: string;
  onRightIconPress: () => void;
}

const Header = (props: Props | PropsWithRightIcon) => (
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
      {props.title}
    </Paragraph>
    {props.rightIconName && (
      <IconButton
        name={props.rightIconName}
        color={designTokens.colors.primary}
        onPress={props.onRightIconPress}
        style={{
          position: 'absolute',
          right: designTokens.gap.m,
        }}
      />
    )}
  </View>
);

export default Header;
