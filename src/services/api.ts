import { Album } from '../types';
import Constants from 'expo-constants';

export const search = (barcode: string): Promise<Album> =>
  fetch(
    `https://api.discogs.com/database/search?barcode=${barcode}&type=release`,
    {
      headers: {
        Authorization: `Discogs key=${Constants.manifest.extra.CONSUMER_KEY}, secret=${Constants.manifest.extra.CONSUMER_SECRET}`,
      },
    }
  )
    .then((response) => response.json())
    .then(({ results }) => {
      if (results.length === 0) {
        throw new Error('Album not found');
      }
      return results[0] as Album;
    });
