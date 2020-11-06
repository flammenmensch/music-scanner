import {
  Image,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import { Album } from '../../types';
import Template from '../Template/Template';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import AlbumDetails from '../AlbumDetails/AlbumDetails';
import designTokens from '../../constants/designTokens';
import Gap from '../Gap/Gap';
import IconButton from '../IconButton/IconButton';

interface Props {
  album: Album;
  onAdd: () => void;
  onClear: () => void;
}

const AlbumPreview = (props: Props) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <React.Fragment>
      <Template
        renderImage={() => (
          <TouchableWithoutFeedback onPress={() => setShowDetails(true)}>
            <Image
              progressiveRenderingEnabled={true}
              loadingIndicatorSource={{ uri: props.album.thumb }}
              source={{ uri: props.album.cover_image }}
              style={[
                StyleSheet.absoluteFill,
                { borderRadius: designTokens.borderRadius },
              ]}
            />
          </TouchableWithoutFeedback>
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
            <Gap height={designTokens.gap.m} />
            <SecondaryButton label="Scan again" onPress={props.onClear} />
          </React.Fragment>
        )}
      />
      <Modal
        visible={showDetails}
        animationType="slide"
        style={{
          position: 'relative',
          backgroundColor: designTokens.colors.secondary,
        }}
      >
        <AlbumDetails album={props.album} />
        <IconButton
          name="close"
          color={designTokens.colors.primary}
          onPress={() => setShowDetails(false)}
          style={{
            position: 'absolute',
            top: designTokens.gap.l * 2,
            right: 24,
          }}
        />
      </Modal>
    </React.Fragment>
  );
};

export default AlbumPreview;
