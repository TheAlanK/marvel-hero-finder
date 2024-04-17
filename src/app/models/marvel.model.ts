export interface MarvelThumbnail {
  path: string;
  extension: string;
}

export interface MarvelCollection<T> {
  available: number;
  collectionURI: string;
  items: T[];
}

export interface MarvelComic {
  resourceURI: string;
  name: string;
}

export interface MarvelSeries {
  resourceURI: string;
  name: string;
}

export interface MarvelStory {
  resourceURI: string;
  name: string;
  type: string;
}

export interface MarvelEvent {
  resourceURI: string;
  name: string;
}

export interface MarvelUrl {
  type: string;
  url: string;
}

export interface Marvel {
  id: string;
  name: string;
  description: string;
  modified: string;
  thumbnail: MarvelThumbnail;
  resourceURI: string;
  comics: MarvelCollection<MarvelComic>;
  series: MarvelCollection<MarvelSeries>;
  stories: MarvelCollection<MarvelStory>;
  events: MarvelCollection<MarvelEvent>;
  urls: MarvelUrl[];
  additionalInfo?: string;
}
