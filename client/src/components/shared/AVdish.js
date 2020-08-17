import React, {useEffect} from 'react'

export const AVdish = ({ key, dish }) => {

    return (
        <div key={key} className="db-items-item-container">

            {dish.dishTitle}
        </div>
    )
}
