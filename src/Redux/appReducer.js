import {auth} from "./authUserReducer";

const INITIALIZE_SUCCESSFULLY = 'INITIALIZE_SUCCESSFULLY'

let initialState = {
    initialStatus: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESSFULLY:
            return {
                ...state,
                initialStatus: true
            }
        default:
            return state;
    }
}
export const initializeSuccessfully = () => ({type: INITIALIZE_SUCCESSFULLY})

export const initialize = () => (dispatch) => {
    let promise = dispatch(auth())
    Promise.all([promise])
        .then(() => {
            dispatch(initializeSuccessfully())
        })
}

export default appReducer;