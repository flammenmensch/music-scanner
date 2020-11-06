import { Release, ReleasePreview } from '../types';
import Constants from 'expo-constants';

const BASE_URL = 'https://api.discogs.com';

const createAuthorizationHeader = () => {
  const { CONSUMER_KEY, CONSUMER_SECRET } = Constants.manifest.extra;
  return {
    Authorization: `Discogs key=${CONSUMER_KEY}, secret=${CONSUMER_SECRET}`,
  };
};

const api = (url: string) =>
  fetch(`${BASE_URL}${url}`, {
    headers: {
      ...createAuthorizationHeader(),
    },
  }).then((response) => response.json());

export const search = (barcode: string): Promise<ReleasePreview> =>
  api(`/database/search?barcode=${barcode}&type=release`).then(
    ({ results }) => {
      if (results.length === 0) {
        throw new Error('Album not found');
      }
      return results[0] as Album;
    }
  );

export const releaseInfo = (id: number): Promise<Release> =>
  api(`/releases/${id}`);
