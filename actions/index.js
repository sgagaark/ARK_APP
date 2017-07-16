export const selectLibarary = (libraryId) => {
    return {
        type: 'select_libarary',
        payload: libraryId
    }
}