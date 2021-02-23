export type CurrentItemType = {
  name: string
  id: number
  photos: {
    small?: string
    large?: string
  }
  status: string
  followed: boolean
}
export type ItemsType = {
  items: Array<CurrentItemType>
  totalCount?: number
  error?: string
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  aboutMe: null | string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  };
  photos: {
    small?: string
    large?: string
  };
}
export type ResponseData<D = {}> = {
  data: D
  resultCode: number
  messages: Array<string>
}
export type AuthMeDataType = {
  id: number
  email: string
  login: string
}
export type ProfilePhotoDataType = {
  photos: {
    small: string
    large: string
  }
}
export type UserLoginDataType = {
  data?: {
    userId: number
  }
}
export type CaptchaType = {
  url: string
}