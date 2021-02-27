import {newsAPI} from "../api/newsAPI";
import {CommonActionsType, InferActionsTypes} from "./reduxStore";


const initialState = {
  title: '',
  body: ''
}

const newsReducer = (state = initialState, action: newsActionType): InitialStateType => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body
      }
    default:
      return state
  }
}

const actions = {
  getNewsAction: (payload: { title: string, body: string }) => ({type: 'GET_WEATHER', payload}) as const
}

export const getNews = (q: string,
                        pageNumber: number,
                        pageSize: number,
                        autoCorrect: boolean): ThunkType => async (dispatch) => {
  const response = await newsAPI.getNews(q, pageNumber, pageSize, autoCorrect)
  dispatch(actions.getNewsAction(response.value[5]))
}
export default newsReducer

export type InitialStateType = typeof initialState
type newsActionType = InferActionsTypes<typeof actions>
type ThunkType = CommonActionsType<newsActionType>