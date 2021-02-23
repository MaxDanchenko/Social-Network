import {instance} from './api'
import {ProfilePhotoDataType, ProfileType, ResponseData} from './ApiTypes'


export const profileAPI = {
  getStatus(userId: number | null) {
    return instance.get('profile/status/' + userId)
      .then((res) => res.data)
  },
  updateStatus(status: string) {
    return instance.put<ResponseData>('profile/status/', {status: status})
      .then((res) => res.data)
  },
  setProfilePhoto(photoFile: File) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put<ResponseData<ProfilePhotoDataType>>('profile/photo/', formData)
      .then((res) => res.data)
  },
  profile(userId: number | null) {
    return instance.get<ProfileType>(`profile/${userId}`).then((res) => res.data)
  }
}
