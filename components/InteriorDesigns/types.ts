export interface AssetInterface {
  asset: {
    _id: string;
    id: string;
    price: number;
    currency: string;
    retailer: string;
    name: string;
    retailLink: string;
    cdn: string;
  };
}

export interface DesignViewInterface {
  design: {
    _id: string;
    name: string;
    longDescription: string;
    metaDescription: string;
    description: string;
    metaTitle: string;
    altTag: string;
    slug: string;
    designCostEstimate: number;
    cdnRender: Array<string>;
    assets: Array<AssetInterface>;
    tags: Array<string>;
    room: {
      roomType: string;
      slug: string;
      _id: string;
    };
    publishedDate: string;
  };
}
