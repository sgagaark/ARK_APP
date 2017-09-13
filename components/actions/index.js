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

// export const setReplyBoat = (Boats) => {
//     return {
//         type: 'setReplyBoat',
//         data: Boats,
//     }
// }

// export const setSelectedReplyBoat = (Boat) => {
//     return {
//         type: 'setSelectedReplyBoat',
//         data: Boat
//     }
// }

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