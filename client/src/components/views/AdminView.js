import React, {useEffect, useContext, useReducer, createContext} from 'react'
import {GlobalContext} from '../../App'
import {Context} from '../../Store'
import { __RouterContext, NavLink, BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import {Dishes} from '../misc/Dishes'
import {Lists} from '../misc/Lists'
import {Recipes} from '../misc/Recipes'
import {AddDish} from '../misc/AddDish'
import {AddList} from '../misc/AddList'
import {AddRecipe} from '../misc/AddRecipe'

export const AdminView = () => {
    
    // const [state, dispatch] = useReducer(AdminLoadReducer, initialState)
    const {state, dispatch} = useContext(Context)
    useEffect(() => {
        loadArchive()
    }, [])
    const {
            AVdishes, setAVdishes,
            AVdishesLoaded, setAVdishesLoaded    
        } = useContext(GlobalContext)

    const loadArchive = async () => {
        console.log('fetching archive')
        if (!state.AVdishesLoaded) {
            console.log('fetching dishes')
            axios
                .get('/dishes/retrieve')
                .then(res => {
                    res.data.map(dish => {
                        AVdishes.push(dish)
                    });
                    dispatch({
                        type: 'update_admin_dishes_loaded',
                        AVdishesLoaded: true
                    })
                    setAVdishesLoaded(true)
                    return
                })
                .catch(err =>{
                    console.log(err)
                    alert(err)
                });
        }
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
                            <AddDish navlinkRoute={"dishes"} />
                        </Route>
                        <Route path="/admin/lists">
                            <Lists />
                        </Route>
                        <Route path="/admin/lists/add">
                            <AddList navlinkRoute={"lists"} />
                        </Route>
                        <Route path="/admin/recipes">
                            <Recipes />
                        </Route>
                        <Route path="/admin/recipes/add">
                            <AddRecipe navlinkRoute={"recipes"} />
                        </Route>
                    </div>
                </div>
            </div>
        </div>
    )
}
