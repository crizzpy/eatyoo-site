import React, { createContext, useReducer } from 'react'
import combineReducers from 'react-combine-reducers'
import {
    UserLoadReducer, 
    AdminLoadReducer,
    ResizingReducer,
    initialStateUserLoadReducer,
    initialStateAdminLoadReducer,
    initialStateResizingReducer,
} from './components/reducers'




export const Context = createContext();

const Store = ({children}) => {
    const [rootReducer, initialStateCombined] = combineReducers({ 
      reducerOne: [UserLoadReducer, initialStateUserLoadReducer], 
      reducerTwo: [AdminLoadReducer, initialStateAdminLoadReducer],
      reducerThree: [ResizingReducer, initialStateResizingReducer] 
    });
    const [state, dispatch] = useReducer(rootReducer, initialStateCombined);
    return(
        <Context.Provider value = { { state, dispatch } }> 
            {children} 
        </Context.Provider>
    )
}


export default Store