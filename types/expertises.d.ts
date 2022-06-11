interface IExpertise {
  expertiseId: string;
  expertiseName: string;
  minSessionDuration: number;
  price: number;
  currencyCode: string;
  preferredLanguages: string[];
  description: string;
  rating?: string;
  numRatings: number;
  coverImageUrl: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  subLabel: string;
}
