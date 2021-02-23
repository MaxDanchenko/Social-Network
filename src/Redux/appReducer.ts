import {Dispatch} from 'redux'
import {auth} from './authUserReducer'
import {InferActionsType} from './reduxStore'


const initialState = {
  initialStatus: false
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
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
  initializeSuccessfully: () => ({
    type: 'APP_INITIALIZE_SUCCESSFULLY'
  })
}
export const initialize = () => async (dispatch: Dispatch<any>) => {
  const promise = dispatch(auth())
  Promise.all([promise]).then(() => {
    dispatch(actions.initializeSuccessfully())
  })
}

export default appReducer
