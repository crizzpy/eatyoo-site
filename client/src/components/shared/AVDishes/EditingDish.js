import React from 'react'
import {ExpandAVDish} from './ExpandAVDish'
import {CancelEditDish} from './CancelEditDish'
import {EditDishForm} from './EditDishForm'

export const EditingDish = ({editDish, expanded, setExpanded, setEditDish, dish}) => {
    return (
        <React.Fragment>
            <div className="edit-dish-view">
                <div className="btns-top">
                    <CancelEditDish 
                        setEditDish={setEditDish}
                    />
                    <ExpandAVDish 
                        expanded={expanded} 
                        setExpanded={setExpanded} 
                        editDish={editDish}
                        setEditDish={setEditDish}
                    />
                </div>
                <EditDishForm dish={dish} />
            </div>
        </React.Fragment>
    )
}
