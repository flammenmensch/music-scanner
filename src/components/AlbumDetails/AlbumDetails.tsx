import React from 'react';
import { Album, Release } from '../../types';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import designTokens from '../../constants/designTokens';
import Paragraph from '../Paragraph/Paragraph';
import { LinearGradient } from 'expo-linear-gradient';
import Gap from '../Gap/Gap';
import { releaseInfo } from '../../services/api';

interface Props {
  album: Album;
}

const getArtists = (release: Release) =>
  release.artists.map((a) => a.name).join(', ');

const getGenres = (release: Release) => release.genres.join(', ');

const AlbumDetails = (props: Props) => {
  const dimensions = useWindowDimensions();
  const [loading, setLoading] = React.useState(false);
  const [release, setRelease] = React.useState<Release | null>(null);
  const { id } = props.album;

  React.useEffect(() => {
    setLoading(true);
    releaseInfo(id)
      .then((response) => {
        setRelease(response);
      })
      .finally(() => setLoading(false));
  }, [id]);

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
          colors={['rgba(0, 0, 0, 0.1)', designTokens.colors.secondary]}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: dimensions.width,
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
        {loading && <ActivityIndicator />}
        {release && (
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <Paragraph
              style={{
                fontSize: designTokens.fontSize.l,
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              {release.title}
            </Paragraph>
            <Paragraph
              style={{
                textAlign: 'center',
                color: designTokens.colors.accent,
                fontSize: designTokens.fontSize.m,
              }}
            >
              {getArtists(release)}
            </Paragraph>
            <Gap height={designTokens.gap.s} />
            <Paragraph
              style={{
                textTransform: 'uppercase',
                textAlign: 'center',
                fontSize: designTokens.fontSize.s,
              }}
            >
              {getGenres(release)} ・ {release.year}
            </Paragraph>
            <Gap height={designTokens.gap.l} />
            <Paragraph
              style={{
                fontSize: designTokens.fontSize.s,
              }}
            >
              {release.notes}
            </Paragraph>
            <Gap height={designTokens.gap.l} />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default AlbumDetails;
