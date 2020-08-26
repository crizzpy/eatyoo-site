import React from 'react'
import { NavLink } from 'react-router-dom'

export const AddNew = ({ type }) => {
    let typeName
    switch (type) {
        case "dishes":
            typeName = "Dish"
            break
        case "lists":
            typeName = "List"
            break
        case "recipes":
            typeName = "Recipe"
    }
    return (
            <NavLink to={`/admin/${type}/add`} className="add-x-route-link">
                <div className="add-item-btn">Add {typeName} +</div>
            </NavLink>
    )
}
