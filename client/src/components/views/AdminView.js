import React, {useEffect} from 'react'
import { __RouterContext, NavLink, BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import {Dishes} from '../misc/Dishes'
import {Lists} from '../misc/Lists'
import {Recipes} from '../misc/Recipes'
import {AddDish} from '../misc/AddDish'
import {AddList} from '../misc/AddList'
import {AddRecipe} from '../misc/AddRecipe'


export const AdminView = () => {
    useEffect(() => {
        loadArchive()
    })

    const loadArchive = () => {
        console.log('fetching archive')
    }

    return (
        <div className="admin-view-container">
            <div className="admin-inner">
                <div className="admin-tabs">
                    <NavLink to="/admin/dishes" className="admin-tab">Dishes</NavLink>
                    <NavLink to="/admin/lists" className="admin-tab">Lists</NavLink>
                    <NavLink to="/admin/recipes" className="admin-tab">Recipes</NavLink>
                </div>
                <div className="admin-working-container">
                    <div className="admin-working-inner">
                        <Route path="/admin/dishes">
                            <Dishes />
                        </Route>
                        <Route path="/admin/dishes/add">
                            <AddDish />
                        </Route>
                        <Route path="/admin/lists">
                            <Lists />
                        </Route>
                        <Route path="/admin/lists/add">
                            <AddList />
                        </Route>
                        <Route path="/admin/recipes">
                            <Recipes />
                        </Route>
                        <Route path="/admin/recipes/add">
                            <AddRecipe />
                        </Route>
                    </div>
                </div>
            </div>
        </div>
    )
}
