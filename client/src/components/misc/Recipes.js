import React from 'react'
import { NavLink } from 'react-router-dom'
import {AddNew} from '../shared/AV/AddNew'

export const Recipes = () => {
    return (
        <div className="recipes-admin">
            <div className="admin-working-title">
                Recipes
            </div>
            <div className="db-items-aggregated-container">
                <AddNew type="recipes" />
            </div>
        </div>
    )
}
