import { instance } from './api'
import { ProfilePhotoType, UserType } from './apiTyper'



export const profileAPI = {
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put<UserType>(`profile/status/`, {status: status})
  },
  setProfilePhoto(photoFile: any) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put<ProfilePhotoType>('profile/photo/', formData)
  }
}
