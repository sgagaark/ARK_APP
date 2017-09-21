// export const selectLibarary = (libraryId) => {
//     return {
//         type: 'select_libarary',
//         payload: libraryId
//     }
// }

// export const setAccount = (id, passwd) => {
//     return {
//         type: 'setAccount',
//         id,
//         passwd
//     }
// }

//使用者回覆過的船
export const setReplyBoats = (data) => {
    return {
        type: 'setReplyBoats',
        data,
    }
}

// export const setSelectedReplyBoat = (Boat) => {
//     return {
//         type: 'setSelectedReplyBoat',
//         data: Boat
//     }
// }

export const setUserSendBoats = (data) => {
    return {
        type: 'setUserSendBoats',
        data,
    }
}

export const setUserLogin = (id) => {
    return {
        type: 'setUserLogin',
        id,
    }
}

export const setAroundBoats = (data) => {
    return {
        type: 'setAroundBoats',
        data,
    }
}