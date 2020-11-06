import React from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { getAll } from '../../services/scanHistory';
import { ReleasePreview } from '../../types';
import Paragraph from '../Paragraph/Paragraph';
import designTokens from '../../constants/designTokens';
import Header from '../Header/Header';

interface Props {
  onSelect: (release: ReleasePreview) => void;
  onClose: () => void;
}

const ScanHistory = (props: Props) => {
  const [data, setData] = React.useState<ReleasePreview[]>([]);

  React.useEffect(() => {
    getAll()
      .then((history) => setData(history))
      .catch(() => setData([]));
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: designTokens.colors.secondary,
        flexGrow: 1,
      }}
    >
      <Header
        title="history"
        rightIconName="close"
        onRightIconPress={props.onClose}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.onSelect(item)}>
            <View style={{ padding: designTokens.gap.m }}>
              <Paragraph numberOfLines={1}>{item.title}</Paragraph>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ScanHistory;
