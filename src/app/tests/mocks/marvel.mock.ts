import { Marvel } from "src/app/models/marvel.model";

export const marvelMock: Marvel = {
  id: '1',
  name: 'Test Marvel',
  description: 'Test Description',
  modified: '2022-01-01',
  thumbnail: {
    path: 'https://example.com/path',
    extension: 'jpg'
  },
  resourceURI: 'https://example.com/resource',
  comics: {
    available: 1,
    collectionURI: 'https://example.com/comics',
    items: [
      {
        resourceURI: 'https://example.com/comic1',
        name: 'Comic 1'
      }
    ]
  },
  series: {
    available: 1,
    collectionURI: 'https://example.com/series',
    items: [
      {
        resourceURI: 'https://example.com/series1',
        name: 'Series 1'
      }
    ]
  },
  stories: {
    available: 1,
    collectionURI: 'https://example.com/stories',
    items: [
      {
        resourceURI: 'https://example.com/story1',
        name: 'Story 1',
        type: 'Story Type'
      }
    ]
  },
  events: {
    available: 1,
    collectionURI: 'https://example.com/events',
    items: [
      {
        resourceURI: 'https://example.com/event1',
        name: 'Event 1'
      }
    ]
  },
  urls: [
    { type: 'detail', url: 'https://example.com/detail' },
    { type: 'comiclink', url: 'https://example.com/comiclink' },
    { type: 'wiki', url: 'https://example.com/wiki' }
  ],
  additionalInfo: 'Additional Info'
};
