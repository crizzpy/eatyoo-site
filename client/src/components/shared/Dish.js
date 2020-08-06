import React from 'react'

export const Dish = ({title, desc, recipes}) => {
    return (
        <div className="list-entry-container">
            <div className="list-entry-title-image-desc">
                <div className="list-entry-title"><b>{title}</b></div>
                <div className="list-entry-image"></div>
                <div className="list-entry-desc">{desc}</div>
            </div>
            <div className="list-item-recipes-container">
                <div className="list-item-recipes-inner">
                    
                </div>
            </div>
        </div>
    )
}
