import { instance } from './api'
import { AuthMeType, UserType, ItemsType, ProfileType } from './apiTyper'

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4) {
    return instance
      .get<ItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
  },
  follow(userId: number) {
    return instance.post<UserType>(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete<UserType>(`follow/${userId}`)
  },
  profile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`)
  },
  auth() {
    return instance.get<AuthMeType>('auth/me')
  },
}
