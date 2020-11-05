import { Image, TextStyle, TouchableOpacity, View } from 'react-native';
import React from 'react';
import designTokens from '../../constants/designTokens';
import Paragraph from '../Paragraph/Paragraph';
import { Album } from '../../types';

interface Props {
  album: Album;
  onAdd: () => void;
  onClear: () => void;
}

const Label = (props: { text: string; style?: TextStyle }) => (
  <Paragraph
    style={[
      {
        textAlign: 'center',
        color: designTokens.colors.black,
        fontWeight: '500',
      },
      props.style,
    ]}
  >
    {props.text}
  </Paragraph>
);

const AddToCollectionButton = (props: { onPress: () => void }) => (
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
    <Label text="Add to Collection" />
  </TouchableOpacity>
);

const ClearButton = (props: { onPress: () => void }) => (
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
    <Label text="Scan again" style={{ color: designTokens.colors.accent }} />
  </TouchableOpacity>
);

const AlbumPreview = (props: Props) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
    }}
  >
    <Image
      progressiveRenderingEnabled={true}
      loadingIndicatorSource={{ uri: props.album.thumb }}
      source={{ uri: props.album.cover_image }}
      style={{ width: 256, height: 256, marginBottom: designTokens.gap.m }}
    />
    <Paragraph
      style={{
        textAlign: 'center',
        marginBottom: designTokens.gap.m,
      }}
    >
      {props.album.title}
    </Paragraph>
    <AddToCollectionButton onPress={props.onAdd} />
    <ClearButton onPress={props.onClear} />
  </View>
);

export default AlbumPreview;
