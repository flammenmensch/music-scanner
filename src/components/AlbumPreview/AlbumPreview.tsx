import {
  Animated,
  Image,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import { ReleasePreview } from '../../types';
import Template from '../Template/Template';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import AlbumDetails from '../AlbumDetails/AlbumDetails';
import designTokens from '../../constants/designTokens';
import Gap from '../Gap/Gap';

interface Props {
  album: ReleasePreview;
  onAdd: () => void;
  onClear: () => void;
}

const AlbumPreview = (props: Props) => {
  const [showDetails, setShowDetails] = React.useState(false);

  const animatedValue = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = React.useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0.95,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const handlePressOut = React.useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const handlePress = React.useCallback(() => setShowDetails(true), []);

  return (
    <React.Fragment>
      <Template
        renderImage={() => (
          <TouchableWithoutFeedback
            onPress={handlePress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.Image
              progressiveRenderingEnabled={true}
              loadingIndicatorSource={{ uri: props.album.thumb }}
              source={{ uri: props.album.cover_image }}
              style={[
                StyleSheet.absoluteFill,
                { borderRadius: designTokens.borderRadius },
                {
                  transform: [{ scale: animatedValue }],
                },
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
        <AlbumDetails
          album={props.album}
          onClose={() => setShowDetails(false)}
        />
      </Modal>
    </React.Fragment>
  );
};

export default AlbumPreview;
