import React from 'react';
import { View } from 'react-native';
import designTokens from '../../constants/designTokens';

interface Props {
  renderImage: () => React.ReactNode;
  renderLabel: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
}

const Template = (props: Props) => (
  <React.Fragment>
    <View
      style={{
        width: 256,
        height: 256,
        alignSelf: 'center',
        marginBottom: designTokens.gap.m,
      }}
    >
      {props.renderImage()}
    </View>
    <View
      style={{
        paddingLeft: designTokens.gap.m,
        paddingRight: designTokens.gap.m,
        marginBottom: designTokens.gap.m,
        alignSelf: 'center',
      }}
    >
      {props.renderLabel()}
    </View>
    {props.renderFooter && (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {props.renderFooter()}
      </View>
    )}
  </React.Fragment>
);

export default Template;
