import React from 'react';
import { View } from 'react-native';

interface Props {
  width?: number;
  height?: number;
}

const Gap = (props: Props) => (
  <View style={{ width: props.width, height: props.height }} />
);

export default Gap;
