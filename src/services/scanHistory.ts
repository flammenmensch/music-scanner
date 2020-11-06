import { ReleasePreview } from '../types';
import AsyncStorage from '@react-native-community/async-storage';

const KEY = '@history';

export const save = (preview: ReleasePreview): Promise<void> => {
  return getAll().then((history) =>
    AsyncStorage.setItem(
      KEY,
      JSON.stringify([
        preview,
        ...history.filter((item) => item.id !== preview.id),
      ])
    )
  );
};

export const getAll = (): Promise<Array<ReleasePreview>> => {
  return AsyncStorage.getItem(KEY)
    .then((value) => {
      if (value === null) {
        return [];
      }
      return JSON.parse(value);
    })
    .catch(() => []);
};

export const clear = (): Promise<void> => {
  return AsyncStorage.removeItem(KEY);
};
