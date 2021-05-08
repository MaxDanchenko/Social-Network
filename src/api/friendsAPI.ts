import {instance} from './api'
import {ItemsType} from './ApiTypes'


export const friendsAPI = {
  getFriends(currentPage = 1, pageSize = 4, friend: boolean) {
    return instance.get<ItemsType>(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`)
      .then((res) => res.data)
  },
}
