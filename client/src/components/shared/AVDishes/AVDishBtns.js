import React, {useState} from 'react'
import {EditDish} from './EditDish'
import {ExpandAVDish} from './ExpandAVDish'

export const AVDishBtns = ({expanded, setExpanded, dishTags, dish}) => {
    const [editDish, setEditDish] = useState(false)

    return (
        <React.Fragment>
            <div className="btns-top">
                <EditDish 
                    expanded={expanded} 
                    setExpanded={setExpanded} 
                    dishTags={dishTags} 
                    editDish={editDish} 
                    setEditDish={setEditDish} 
                    dish={dish}
                />
                <ExpandAVDish 
                    expanded={expanded} 
                    setExpanded={setExpanded} 
                    editDish={editDish}
                    setEditDish={setEditDish} 
                />
            </div>
        </React.Fragment>
    )
}
