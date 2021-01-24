import {auth} from './authUserReducer'


const INITIALIZE_SUCCESSFULLY = 'INITIALIZE_SUCCESSFULLY'

type InitialStateType = {
  initialStatus: boolean;
};
const initialState = {
  initialStatus: false
} as InitialStateType

const appReducer = (
  state = initialState,
  action: InitializeActionType
): InitialStateType => {
  switch (action.type) {
    case INITIALIZE_SUCCESSFULLY:
      return {
        ...state,
        initialStatus: true
      }
    default:
      return state
  }
}
type InitializeActionType = {
  type: typeof INITIALIZE_SUCCESSFULLY;
};
export const initializeSuccessfully = (): InitializeActionType => ({
  type: INITIALIZE_SUCCESSFULLY
})

export const initialize = () => async (dispatch: any) => {
  const promise = dispatch(auth())
  Promise.all([promise]).then(() => {
    dispatch(initializeSuccessfully())
  })
}

export default appReducer
