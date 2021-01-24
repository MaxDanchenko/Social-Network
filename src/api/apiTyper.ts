export type CurrentItemType = {
  name: string;
  id: number;
  photos: {
    small?: string;
    large?: string;
  };
  status: string;
  followed: boolean;
};
export type ItemsType = {
  items: Array<CurrentItemType>;
  totalCount?: number;
  error?: string;
};
export type UserType = {
  data?: {};
  fieldsErrors?: Array<string>;
  messages: Array<string>;
  resultCode: string;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: {
    small?: string;
    large?: string;
  };
};
export type AuthMeType = {
  resultCode: number;
  messages: Array<string>;
  data: {
    id: number;
    email: string;
    login: string;
  };
};
export type ProfilePhotoType = {
  data: {
    small?: string;
    large?: string;
  };
  resultCode: number;
  messages: Array<string>;
};
export type UserLoginType = {
  resultCode: number;
  messages: Array<string>;
  data?: {
    userId: number;
  };
};
