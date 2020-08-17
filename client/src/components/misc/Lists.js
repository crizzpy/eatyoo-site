import React from 'react'
import { NavLink } from 'react-router-dom'
import {AddNew} from '../shared/AddNew'

export const Lists = () => {
    return (
        <div className="lists-admin">
            <div className="admin-working-title">
                Lists
            </div>
            <div className="db-items-aggregated-container">
                <AddNew type="lists" />
            </div>
        </div>
        
    )
}
