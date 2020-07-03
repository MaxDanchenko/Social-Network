import commentReducer from "./commentReducer";
import messageReducer from "./messageReducer";

let store = {
    _state: {
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
            myDialogsListNew: 'Message Send'
        },
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
            newCommentAdd: 'Leave your comment'
        }
    },
    _callSubscriber() {
        console.log('just function')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.commentPage = commentReducer(this._state.commentPage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    }
}

export default store
window.store = store