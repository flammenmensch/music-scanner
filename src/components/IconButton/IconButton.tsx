import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  name: string;
  color: string;
  onPress: () => void;
  style?: ViewStyle;
}

const IconButton = (props: Props) => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <MaterialIcons name={props.name} size={32} color={props.color} />
  </TouchableOpacity>
);

export default IconButton;
