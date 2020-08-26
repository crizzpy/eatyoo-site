import React, {useRef, useContext} from 'react'
import {GlobalContext} from '../../App'
import { __RouterContext, NavLink, BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'
import {AddNew} from '../shared/AV/AddNew'
import {AVDishes} from '../shared/AVDishes/AVDishes'
import {Context} from '../../Store'

export const Dishes = () => {
    const {state, dispatch} = useContext(Context)
    const {
        AVdishes,
        AVdishesLoaded
    } = useContext(GlobalContext)
    return (
        <React.Fragment>
            <div className="dishes-admin">
                <div className="admin-working-title">
                    Dishes
                </div>
                <div className="db-items-aggregated-container">
                    <AddNew type="dishes" />
                    <div className="items-list-container">
                        {AVdishesLoaded && (
                            <AVDishes />  
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
