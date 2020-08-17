import React, {useRef, useContext} from 'react'
import {GlobalContext} from '../../App'
import { __RouterContext, NavLink, BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'
import {AddNew} from '../shared/AddNew'
import {AVdish} from '../shared/AVdish'
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
                            <ul>
                                {AVdishes.map(dish => {
                                    {console.log(dish)}
                                    return(
                                        <AVdish 
                                            key={dish.dishId} 
                                            dish={dish}
                                        />
                                    )
                                })}
                            </ul>    
                        )}
                    </div>
                    <button 
                        style={{
                            width: "100%", 
                            height: "20px", 
                            position: "absolute", 
                            bottom: "0px"
                        }}
                        onClick={e => {
                            e.preventDefault()
                            console.log(e)
                            dispatch({
                                type: 'update_admin_loading',
                                loadingStatus: 20
                            })
                            console.log(state.reducerOne)
                            console.log(state.reducerTwo.loadingStatus)
                        }}
                    >
                        Increment
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}
