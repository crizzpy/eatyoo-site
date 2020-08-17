import React, {useEffect, useContext} from 'react'
import {GlobalContext} from '../../App'
import { __RouterContext, BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'
import {HomeView} from '../views/HomeView'
import {ListView} from '../views/ListView'
import {AdminView} from '../views/AdminView'
import {ArchiveView} from '../views/ArchiveView'
import {SearchView} from '../views/SearchView'
import {useTransition, animated} from 'react-spring'

export const Body = () => {

    return (
        <div className="body-inner">
            <div className="body-bg">
                <Route path="/list">
                    <ListView />
                </Route>
                <Route path="/search">
                    <SearchView />
                </Route>
                <Route path="/archive">
                    <ArchiveView />
                </Route>
                <Route path="/admin">
                    <AdminView />
                </Route>
            </div>
        </div>
    )
}