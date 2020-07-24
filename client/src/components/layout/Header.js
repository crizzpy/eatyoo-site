import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header-inner">
            <div className="header-bg">
                <div className="top-tabs-container">
                    <div className="top-tabs-inner">
                        <div className="non-logo">
                            <NavLink activeStyle={{ height: "100%" }} exact to="/">
                                <div className="header-tab" id="home">Test</div>
                            </NavLink>
                            <NavLink activeStyle={{ height: "100%" }} exact to="/list">
                                <div className="header-tab" id="list">List</div>
                            </NavLink>
                            <NavLink activeStyle={{ height: "100%" }} exact to="/search">
                                <div className="header-tab" id="search">Search</div>
                            </NavLink>
                        </div>
                        <div className="logo-container">
                            <img src="https://media.giphy.com/media/igtmRLH661Ohg1gxSp/giphy.gif" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

