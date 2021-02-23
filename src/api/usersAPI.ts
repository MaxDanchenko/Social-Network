import {instance} from './api'
import {AuthMeDataType, ItemsType, ProfileType, ResponseData, UserType} from './commonApiTypes'


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4) {
    return instance.get<ItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data)
  },
  follow(userId: number) {
    return instance.post<UserType>(`follow/${userId}`).then((res) => res.data)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then((res) => res.data)
  },
  profile(userId: number | null) {
    return instance.get<ProfileType>(`profile/${userId}`).then((res) => res.data)
  },
  auth() {
    return instance.get<ResponseData<AuthMeDataType>>('auth/me').then((res) => res.data)
  }
}
