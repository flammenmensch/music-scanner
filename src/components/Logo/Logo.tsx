import { Image } from 'react-native';
import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import designTokens from '../../constants/designTokens';

const Logo = () => (
  <React.Fragment>
    <Paragraph
      style={{
        fontSize: designTokens.fontSize.s,
      }}
    >
      Powered by
    </Paragraph>
    <Image
      source={require('../../../assets/discogs-logo-white.png')}
      style={{
        width: 140,
        height: 50,
      }}
    />
  </React.Fragment>
);

export default Logo;
