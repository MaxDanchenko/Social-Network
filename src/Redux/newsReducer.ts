import {newsAPI} from "../api/newsAPI";
import {Dispatch} from "redux";

const GET_WEATHER = 'GET_WEATHER'

const initialState = {
    title: '',
    body: ''
}
export type InitialStateType = typeof initialState

const newsReducer = (state = initialState, action: GetNewsActionType): InitialStateType => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body
      }
    default:
      return state
  }
}
type PayloadType = {
  body: string
  title: string
}
type GetNewsActionType = {
  type: typeof GET_WEATHER
  payload: PayloadType
}
const getNewsAction = (payload: {title: string, body: string}): GetNewsActionType => ({type: GET_WEATHER, payload})
export const getNews = (q: string,
                        pageNumber: number,
                        pageSize: number,
                        autoCorrect: boolean) => async (dispatch: Dispatch<GetNewsActionType>) => {
  const response = await newsAPI.getNews(q, pageNumber, pageSize, autoCorrect)
  dispatch(getNewsAction(response.value[5]))
}
export default newsReducer