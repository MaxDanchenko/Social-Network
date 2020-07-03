const addMessageAction = 'ADD-MESSAGE'
const myMessageAction = 'MY-MESSAGE-UPDATE'

let initialState = {
    messagesPage: {
        friendsList: [
            {id: 1, name: "John Williams", src: require('../images/avatars/1.png')},
            {id: 2, name: "Chak Robertson", src: require('../images/avatars/2.png')},
            {id: 3, name: "James Smith", src: require('../images/avatars/3.png')},
            {id: 4, name: "Joe Rogan", src: require('../images/avatars/4.png')},
            {id: 5, name: "Francis Ngannou", src: require('../images/avatars/5.png')},
            {id: 6, name: "Daniel Cormrier", src: require('../images/avatars/6.png')},
            {id: 7, name: "Khabib Nurmagomedov", src: require('../images/avatars/7.png')},
            {id: 8, name: "Kamaru Usman", src: require('../images/avatars/8.png')},
            {id: 9, name: "Horhe Masidal", src: require('../images/avatars/9.png')},
            {id: 10, name: "Dustin Porier", src: require('../images/avatars/10.png')}
        ],
        dialogsList: [
            {
                dialogId: 1, FriendMessage: ' John: "How are you doing man?"\n' +
                    'I think we can do it'
            },
            {
                dialogId: 2, FriendMessage: ' Chak: "Wats up"\n'
            },
            {
                dialogId: 3, FriendMessage: 'Not too bad.'
            },
            {
                dialogId: 4, FriendMessage: 'How about you?"\n'
            }
        ],
        myDialogsList: [
            {
                id: 1, my: ' no problem '
            },
            {
                id: 1, my: ' i think so '
            },
            {
                id: 1, my: ' ok man'
            },
            {
                id: 1, my: ' it is are good idea '
            }
        ],
        myDialogsListNew: 'Dialog ya ya'
    }
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessageAction: {
            let newMessage = {
                id: 7,
                my: state.myDialogsListNew
            }
            let stateCopy = {...state}
            stateCopy.myDialogsList = {...state.myDialogsList}
            stateCopy.myDialogsList.push(newMessage);
            stateCopy.myDialogsListNew = '';
            return stateCopy;
        }
        case myMessageAction: {
            let stateCopy = {...state}
            stateCopy.myDialogsListNew = action.newMessage;
            return stateCopy;
        }
        default:
            return state
        }

}

export const addMessageActionCreator = () => {
    return {
        type: addMessageAction
    }
}
export const newPostActionCreator = (text) => {
    return {
        type: myMessageAction,
        newMessage: text
    }
}


export default messageReducer;