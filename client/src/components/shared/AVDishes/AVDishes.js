import React, {useContext} from 'react'
import {AVdish} from './AVdish'
import {GlobalContext} from '../../../App'

export const AVDishes = () => {

    const {
        AVdishes,
        AVdishesLoaded
    } = useContext(GlobalContext)

    return (
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
    )
}
