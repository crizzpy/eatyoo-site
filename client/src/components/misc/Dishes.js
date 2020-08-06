import React, {useRef} from 'react'
import { __RouterContext, NavLink, BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'

export const Dishes = () => {
    return (
        <React.Fragment>
            <div className="dishes-admin">
                <div className="admin-working-title">
                    Dishes
                </div>
                <div className="dishes-aggregated-container">
                    <NavLink to="/admin/dishes/add">
                        <div className="add-dish-btn">Add Dish +</div>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    )
}
