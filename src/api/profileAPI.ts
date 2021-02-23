import {instance} from './api'
import {ProfilePhotoDataType, ResponseData, UserType} from './commonApiTypes'


export const profileAPI = {
  getStatus(userId: number | null) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status: string) {
    return instance.put<UserType>('profile/status/', {status: status})
  },
  setProfilePhoto(photoFile: File) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put<ResponseData<ProfilePhotoDataType>>('profile/photo/', formData)
  }
}
