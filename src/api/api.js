import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'cae4a8ba-60a1-42a2-b2ca-f2528ae16743'}
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    profile(userId) {
        return instance.get(`profile/${userId}`)
    },
    auth() {
        return instance.get('auth/me')
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`,  {status: status})
    }
}
export const authAPI = {
    auth() {
        return instance.get('auth/me')
    },
    logIn(email, password, rememberMe = false) {
        return instance.post(`auth/login`,  {email, password, rememberMe})
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}