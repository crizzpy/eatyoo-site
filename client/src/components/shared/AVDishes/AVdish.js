import React, {useState} from 'react'
import {EditDish} from './EditDish'
import {AVDishImgPreview} from './AVDishImgPreview'
import {AVDishBtns} from './AVDishBtns'
import {AVDishTagsListed} from './AVDishTagsListed'


export const AVdish = ({ key, dish }) => {

    const [expanded, setExpanded] = useState(null)
    const {dishTitle, dishDesc, dishTags} = dish

    return (
        <div key={key} className={expanded ? "db-items-item-container expanded" : "db-items-item-container"}>
            <div className="entry-info">
                <div className="entry-title">
                    {dishTitle}
                </div>
                <div className={expanded ? "entry-desc" : "hide"}>
                    Description: 
                    <br />
                    <br />
                    {dishDesc}
                </div>
            </div>
            <div className={expanded ? "entry-images-previews" : "hide"}>
                <AVDishImgPreview title={`Dish Img`} />
                <AVDishImgPreview title={`Meme Img`} />
            </div>
            <div className="entry-actions">
                <AVDishBtns 
                    expanded={expanded} setExpanded={setExpanded} 
                    dishTags={dishTags} dish={dish}
                />
                <AVDishTagsListed expanded={expanded} dish={dish} />
            </div>
        </div>
    )
}
