import React, {useContext, useReducer, useEffect} from 'react'
import {Context} from '../Store'


export const EventListeners = ({children}) => {

    const {state, dispatch} = useContext(Context)

    useEffect(() => {
        // resize event
        window.addEventListener('resize', () => {
            dispatch({
                type: 'update_window_resizing',
                windowResizing: state.reducerThree.windowResizing ? false : true,
            })
            console.log(
                state.reducerThree.windowResizing, 
                state.reducerThree.windowWidth,
                state.reducerThree.windowHeight,
                'test'
            )
            console.log(state.reducerTwo.loadingStatus)
        })
    }, [])



    return (
        <div className="site-bg">
            <div className="site-container">
                {children}
            </div>
        </div>
    )
}
