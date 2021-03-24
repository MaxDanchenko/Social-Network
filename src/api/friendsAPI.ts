import {instance} from './api'
import {ItemsType} from './ApiTypes'


export const friendsAPI = {
  getFriends(friend: boolean) {
    return instance.get<ItemsType>(`users?friend=${friend}`)
      .then((res) => res.data)
  },
}
