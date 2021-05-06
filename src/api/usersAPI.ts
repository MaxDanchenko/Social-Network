import {instance} from './api'
import {ItemsType, ResponseData} from './ApiTypes'


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instance.get<ItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data)
    },
    follow(userId: number) {
        return instance.post<ResponseData>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    findUsers(term: string, currentPage = 1, pageSize = 4) {
        return instance.get<ItemsType>(`users?term=${term}&page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data)
    },
}
