import React, {useContext, useEffect} from 'react'
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
        })
    }, [])

    return (
        <div className="site-bg">
            {children}
        </div>
    )
}
