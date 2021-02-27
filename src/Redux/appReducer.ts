import {auth} from './authUserReducer'
import {CommonActionsType, InferActionsTypes} from './reduxStore'


const initialState = {
  initialStatus: false
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP_INITIALIZE_SUCCESSFULLY':
      return {
        ...state,
        initialStatus: true
      }
    default:
      return state
  }
}

const actions = {
  initializeSuccessfully: () => ({type: 'APP_INITIALIZE_SUCCESSFULLY'}) as const
}
export const initialize = (): ThunkType => async (dispatch) => {
  const promise = dispatch(auth())
  Promise.all([promise]).then(() => {
    dispatch(actions.initializeSuccessfully())
  })
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonActionsType<ActionsType>


export default appReducer
