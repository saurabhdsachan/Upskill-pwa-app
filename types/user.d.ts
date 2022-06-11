interface IUser {
  userId: string;
  role: string;
  profileImgUrl?: string;
  name: string;
  description?: string;
  countryCode: string;
  phoneNumber: string;
  number: string;
  username: string;
  gender?: string;
  dob?: string;
  rating: IRating;
  preferredLanguages: string[];
  createdAt: number;
  updatedAt: number;
  followersCount: number;
  followingCount: number;
  sessionsTaken: number;
  fbUrl?: string;
  instaUrl?: string;
  ytUrl?: string;
  twitterUrl?: string;
  metaTags?: string;
  creator: boolean;
}
