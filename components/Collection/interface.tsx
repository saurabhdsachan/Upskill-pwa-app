export interface CollectionCardDataInterface {
  slug: string;
  cdnThumbnail: string;
  name: string;
  metaTitle: string;
}

export interface CollectionListInterface {
  feedData: {
    list: CollectionCardDataInterface[];
    count: number;
  };
}
