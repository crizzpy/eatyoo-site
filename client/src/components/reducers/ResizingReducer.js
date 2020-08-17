export const initialStateResizingReducer = {
    windowWidth: null,
    windowHeight: null,
    windowResizing: null
}

export const ResizingReducer = (state, action) => {

    switch(action.type) {
        case "update_window_width":
            return({
                ...state,
                windowWidth: action.windowWidth
            })
        case "update_window_height":
            return({
                ...state,
                windowHeight: action.windowHeight
            })
        case "update_window_resizing":
            return({
                ...state,
                windowResizing: action.windowResizing
            })
        default: return state
    }
}