import React from 'react';
import { Album } from '../../types';
import { Image, SafeAreaView, useWindowDimensions, View } from 'react-native';
import designTokens from '../../constants/designTokens';
import Paragraph from '../Paragraph/Paragraph';
import { LinearGradient } from 'expo-linear-gradient';
import Gap from '../Gap/Gap';

interface Props {
  album: Album;
}

const AlbumDetails = (props: Props) => {
  const dimensions = useWindowDimensions();

  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ position: 'relative' }}>
        <Image
          source={{ uri: props.album.cover_image }}
          style={{
            width: dimensions.width,
            aspectRatio: 1,
          }}
        />
        <LinearGradient
          colors={[designTokens.colors.black, 'transparent']}
          style={{
            position: 'absolute',
            top: 0,
            width: dimensions.width,
            height: 128,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: designTokens.colors.secondary,
          padding: designTokens.gap.m,
          flexGrow: 1,
        }}
      >
        <Paragraph
          style={{
            fontSize: designTokens.fontSize.l,
            fontWeight: '500',
          }}
        >
          {props.album.title}
        </Paragraph>
        <Gap height={designTokens.gap.m} />
        <Paragraph>Release year: {props.album.year}</Paragraph>
        {props.album.style.length > 0 && (
          <Paragraph>Styles: {props.album.style.join(', ')}</Paragraph>
        )}
        {props.album.genre.length > 0 && (
          <Paragraph>Genres: {props.album.genre.join(', ')}</Paragraph>
        )}
      </View>
    </View>
  );
};

export default AlbumDetails;
