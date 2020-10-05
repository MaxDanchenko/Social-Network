const ADD_POST = 'ADD_POST'
const NEW_COMMENT_UPDATE = 'NEW_COMMENT_UPDATE'

let initialState = {
    personsList: [
        {id: 1, name: "Liam"},
        {id: 2, name: "Noah"},
        {id: 3, name: "William"},
        {id: 4, name: "James"},
        {id: 5, name: "Oliver"},
        {id: 6, name: "Benjamin"}
    ],
    commentaryList: [
        {id: 1, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: 2, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: 3, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: 4, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: 5, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: 6, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
    ],
    newCommentAdd: 'Comment bla bla'
}
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                post: state.newCommentAdd
            }
            return {
                ...state,
                commentaryList: [...state.commentaryList, newPost],
                newCommentAdd: ''
            }
        }
        case NEW_COMMENT_UPDATE: {
            return {
                ...state,
                newCommentAdd: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const newCommentActionCreator = (text) => {
    return {
        type: NEW_COMMENT_UPDATE,
        newText: text
    }
}

export default commentReducer;