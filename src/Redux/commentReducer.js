const addPostAction = 'ADD-POST'
const newCommentAction = 'NEW-COMMENT-UPDATE'

let initialState = {
    commentPage: {
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
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPostAction:
            let newPost = {
                id: 7,
                post: state.newCommentAdd
            }
            state.commentaryList.push(newPost);
            state.newCommentAdd = '';
            return state
        case newCommentAction:
            state.newCommentAdd = action.newText;
            return state
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: addPostAction
    }
}
export const newCommentActionCreator = (text) => {
    return {
        type: newCommentAction,
        newText: text
    }
}

export default commentReducer;