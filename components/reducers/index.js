import { combineReducers } from 'redux';

function UserLogin(state = [], action) {
    switch (action.type) {
        case 'setUserLogin':
            return Object.assign({}, state, {
                UserId: action.id,
                isLogin: true,
            });
    }
    return state;
}

function AroundBoats(state = [], action) {
    switch (action.type) {
        case 'setAroundBoats':
            return Object.assign({}, state, {
                data: action.data,
            });
    }
    return state;
}

function UserReplyBoats(state = [], action) {
    switch (action.type) {
        case 'setReplyBoats':
            return Object.assign({}, state, {
                data: action.data,
            });
    }
    return state;
}

function UserSendBoats(state = [], action) {
    switch (action.type) {
        case 'setUserSendBoats':
            console.log(action.data);
            return Object.assign({}, state, {
                data: action.data,
            })
    }
    return state;
}

export default combineReducers({
    UserInfo: UserLogin,
    AroundBoats,
    UserReplyBoats,
    UserSendBoats,
});