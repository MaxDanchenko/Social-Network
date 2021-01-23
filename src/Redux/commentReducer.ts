const ADD_POST = 'ADD_POST'

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
        {id: 2, post: 'Lorem ipsum dolor sit amet'},
        {id: 3, post: 'Lorem ipsum dolor sit amet, consectetur elit.'},
        {id: 4, post: 'Lorem ipsum '},
        {id: 5, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: 6, post: 'Lorem ipsum dolor sit adipisicing elit.'}
    ]
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let body = action.newCommentAdd
            return {
                ...state,
                commentaryList: [...state.commentaryList,{id: 7, post: body}]
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newCommentAdd) => ({type: ADD_POST, newCommentAdd})

export default commentReducer;