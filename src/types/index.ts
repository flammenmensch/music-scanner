export interface ReleasePreview {
  id: number;
  title: string;
  thumb: string;
  cover_image: string;
}

export interface Artist {
  id: number;
  name: string;
}

export interface Image {
  width: number;
  height: number;
  type: string;
  uri: string;
}

export interface Release {
  id: number;
  title: string;
  artists: Array<Artist>;
  images: Array<Image>;
  thumb: string;
  country: string;
  year: number;
  notes: string;
  styles: Array<string>;
  genres: Array<string>;
  uri: string;
}
