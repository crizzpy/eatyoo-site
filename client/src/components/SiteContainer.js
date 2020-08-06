import React, {useEffect, useContext} from 'react'
import {GlobalContext} from '../App'
import {Header} from './layout/Header'
import {Body} from './layout/Body'
import {Footer} from './layout/Footer'

export const SiteContainer = () => {
    const {
            resizing, setResizing,
            windowHeight, setWindowHeight,
            windowWidth, setWindowWidth
        } = useContext(GlobalContext)
    // let windowWidth
    // let windowHeight
    document.getElementById('root')
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
        setResizing(false)
        console.log('resize complete')
        console.log(windowWidth, windowHeight)
    }, [resizing])

    
    return (
        <React.Fragment>

            <div className="site-bg">
                <div className="site-container">
                    <div className="header-container" style={{ height: `${windowHeight * 0.125 }px` }}>
                        <Header />
                    </div>
                    <div className="body-container" style={{ height: `${windowHeight * 0.75}px` }}>
                        <Body />
                    </div>
                    <div className="footer-container" style={{ height: `${windowHeight * 0.125}px` }}>
                        <Footer />
                    </div>
                </div>
                <div className='site-bg-overlay-lightness' />
            </div>
        </React.Fragment>
    )
}