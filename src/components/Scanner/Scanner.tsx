import React from 'react';
import { StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Paragraph from '../Paragraph/Paragraph';
import Template from '../Template/Template';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

interface Props {
  onScanned: (barcode: string) => void;
  onManualSearch: () => void;
}

const Scanner = (props: Props) => {
  const handleScanned = React.useCallback(
    ({ data }) => {
      props.onScanned(data);
    },
    [props.onScanned]
  );

  return (
    <Template
      renderImage={() => (
        <BarCodeScanner
          onBarCodeScanned={handleScanned}
          style={StyleSheet.absoluteFill}
        />
      )}
      renderLabel={() => (
        <Paragraph
          style={{
            textAlign: 'center',
          }}
        >
          Scan a Barcode to search
        </Paragraph>
      )}
      renderFooter={() => (
        <PrimaryButton label="Manual search" onPress={props.onManualSearch} />
      )}
    />
  );
};

export default Scanner;
