
export const initialStateUserLoadReducer = {
    loadingStatus: 0,
    filesLoaded: []
}

export const UserLoadReducer = (state, action) => {
    switch(action.type) {
        case 'update_user_loading':
            return({
                ...state,
                loadingStatus: action.payload
            })
            default: return state
    }
}
