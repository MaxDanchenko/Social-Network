import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '423a99c6-9db2-4edc-a2b0-3fcc90632f08'}
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
        return instance.put(`profile/status/`, {status: status})
    },
    setProfilePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo/', formData)
    }
}
export const authAPI = {
    auth() {
        return instance.get('auth/me')
    },
    logIn(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('/security/get-captcha-url')
    }
}