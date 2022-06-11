interface IProfile {
  user: IUser;
  rating: { ratingCount: number; averageRating: string };
  demo: {
    userId: IUser[userId];
    duration: number;
    active: boolean;
  };
  canBookDemo: boolean;
  expertises: IExpertise[];
  chips: IChip[];
  storeLink: string;
  planItems: [];
  groupItems: [
    {
      type: string;
      session: {
        sessionType: string;
        sessionId: string;
        title: string;
        creatorId: string;
        creatorName: string;
        coverImgUrl: string;
        categoryName: string;
        episodeCount: number;
        days?: string;
        numSessions: number;
        duration: number;
        startTime: number;
        endTime: number;
        sessionDate: string;
        sessionSchedule: string;
        displayPrice: string;
        price: number;
        rating: string;
        published: boolean;
        pax: 2;
        metaTags: ['PUBLISHED'];
        numRatings: 0;
      };
      booking?: string;
    }
  ];
  cohortItems: [];
  groupCursor?: string;
  cohortCursor?: string;
  planCursor?: string;
}
