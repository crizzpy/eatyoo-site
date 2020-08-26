import React from 'react'
import {AVDishTags} from './AVDishTags'

export const AVDishTagsListed = ({expanded, dish}) => {
    return (
        <React.Fragment>
            <div className={expanded ? "tags-trends" : "hide"}>
                <AVDishTags title={`Tags`} dish={dish} />
                <AVDishTags title={`Trends`} dish={dish} />
            </div>
        </React.Fragment>
    )
}
