const SetAuthUser = 'SetAuthUser'

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false
}


const loginUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetAuthUser:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const SetUserData = (id, email, login, isFetching) => ({type: SetAuthUser, data: {id, email, login, isFetching}})
export default loginUserReducer;