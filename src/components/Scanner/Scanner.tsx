import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import designTokens from '../../constants/designTokens';
import Paragraph from '../Paragraph/Paragraph';

interface Props {
  onScanned: (barcode: string) => void;
}

const Scanner = (props: Props) => {
  const handleScanned = React.useCallback(
    ({ data }) => {
      props.onScanned(data);
    },
    [props.onScanned]
  );

  return (
    <React.Fragment>
      <View
        style={{
          width: 256,
          height: 256,
          borderWidth: 1,
          marginBottom: designTokens.gap.m,
          borderColor: designTokens.colors.accent,
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={handleScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
      <Paragraph
        style={{
          textAlign: 'center',
          marginBottom: designTokens.gap.l,
        }}
      >
        Scan a Barcode to search
      </Paragraph>
    </React.Fragment>
  );
};

export default Scanner;
