import registerRootComponent from 'expo/build/launch/registerRootComponent';

import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import designTokens from './constants/designTokens';
import Logo from './components/Logo/Logo';
import AlbumPreview from './components/AlbumPreview/AlbumPreview';
import { search } from './services/api';
import Scanner from './components/Scanner/Scanner';
import Loader from './components/Loader/Loader';
import { Album } from './types';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';

const requestCameraAccess = () =>
  BarCodeScanner.requestPermissionsAsync().then(
    ({ status }) => status === 'granted'
  );

const App = () => {
  const [searching, setSearching] = React.useState(false);
  const [album, setAlbum] = React.useState<Album | null>(null);
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(
    null
  );

  React.useEffect(() => {
    requestCameraAccess().then((granted) => setHasPermission(granted));
  }, []);

  const handleAccessRequest = React.useCallback(() => {
    requestCameraAccess().then((granted) => setHasPermission(granted));
  }, []);

  const handleBarCodeScanned = React.useCallback((barcode) => {
    setSearching(true);
    search(barcode)
      .then((response) => setAlbum(response))
      .catch(console.error)
      .finally(() => setSearching(false));
  }, []);

  const handleClear = React.useCallback(() => {
    setAlbum(null);
    setSearching(false);
  }, []);

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: designTokens.colors.secondary,
      }}
    >
      <Header />
      <View
        style={{
          paddingTop: designTokens.gap.l,
          display: 'flex',
          flexShrink: 0,
          flexGrow: 1,
          flexDirection: 'column',
        }}
      >
        {hasPermission === false && (
          <React.Fragment>
            <Paragraph>Access to Camera is denied</Paragraph>
            <Button title="Request access" onPress={handleAccessRequest} />
          </React.Fragment>
        )}
        {hasPermission === true && (
          <React.Fragment>
            {!album && !searching && (
              <Scanner onScanned={handleBarCodeScanned} />
            )}
            {album && (
              <AlbumPreview
                album={album}
                onClear={handleClear}
                onAdd={console.log}
              />
            )}
            {searching && <Loader />}
          </React.Fragment>
        )}
      </View>
      <Logo />
    </SafeAreaView>
  );
};

registerRootComponent(App);
