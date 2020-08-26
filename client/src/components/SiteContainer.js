import React, {useEffect, useContext} from 'react'
import {GlobalContext} from '../App'
import {Header} from './layout/Header'
import {Body} from './layout/Body'
import {Footer} from './layout/Footer'
import {Context} from '../Store'

export const SiteContainer = () => {
    const {state, dispatch} = useContext(Context)
    let windowInnerWidth
    let windowInnerHeight
    useEffect(() => {
        //resizing logic
        dispatch({
            type: 'update_window_width',
            windowWidth: window.innerWidth
        })
        dispatch({
            type: 'update_window_height',
            windowHeight: window.innerHeight
        })
      }, [state.reducerThree.windowResizing])

      return (
        <React.Fragment>
                <div className="site-container">
                    <div className="header-container" style={{ height: `${state.reducerThree.windowHeight * 0.05 }%` }}>
                        <Header />
                    </div>
                    <div className="body-container" style={{ height: `${state.reducerThree.windowHeight * 0.5}%` }}>
                        <Body />
                    </div>
                    <div className="footer-container" style={{ height: `${state.reducerThree.windowHeight * 0.05}%` }}>
                        <Footer />
                    </div>
                </div>
                <div className='site-bg-overlay-lightness' />
        </React.Fragment>
    )
}