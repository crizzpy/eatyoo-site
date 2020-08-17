export const initialStateAdminLoadReducer = {
    loadingStatus: 0,   
    filesLoaded: [],
    AVdishesLoaded: false,
    AVlistsLoaded: false,
    AVrecipesLoaded: false,
}

export const AdminLoadReducer = (state, action) => {
    switch(action.type) {
        case "update_admin_loading":
            return({
                ...state,
                loadingStatus: action.loadingStatus
            })
        case "update_admin_files_loaded":
            return({
                ...state,
                filesLoaded: action.filesLoaded
            })
        case "update_admin_dishes_loaded":
            return({
                ...state,
                dishesLoaded: action.dishesLoaded
            })        
        case "update_admin_lists_loaded":
            return({
                ...state,
                listsLoaded: action.listsLoaded
            })
        case "update_admin_recipes_loaded":
            return({
                ...state,
                recipesLoaded: action.recipesLoaded
            })
        default: return state
    }
}