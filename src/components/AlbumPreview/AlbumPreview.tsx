import { Image, StyleSheet } from 'react-native';
import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import { Album } from '../../types';
import Template from '../Template/Template';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

interface Props {
  album: Album;
  onAdd: () => void;
  onClear: () => void;
}

const AlbumPreview = (props: Props) => (
  <Template
    renderImage={() => (
      <Image
        progressiveRenderingEnabled={true}
        loadingIndicatorSource={{ uri: props.album.thumb }}
        source={{ uri: props.album.cover_image }}
        style={StyleSheet.absoluteFillObject}
      />
    )}
    renderLabel={() => (
      <Paragraph
        style={{
          textAlign: 'center',
        }}
      >
        {props.album.title}
      </Paragraph>
    )}
    renderFooter={() => (
      <React.Fragment>
        <PrimaryButton label="Add to Collection" onPress={props.onAdd} />
        <SecondaryButton label="Scan again" onPress={props.onClear} />
      </React.Fragment>
    )}
  />
);

export default AlbumPreview;
