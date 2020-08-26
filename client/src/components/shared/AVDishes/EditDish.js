import React, {useState} from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {EditingDish} from './EditingDish'

export const EditDish = ({expanded, setExpanded, dishTags, editDish, setEditDish, dish}) => {
    return (
        <React.Fragment>
            <div className="entry-edit-btn" onClick={() => {
                setExpanded(true)
                setEditDish(true)
            }}>
                <FontAwesomeIcon icon="edit" class="fa-icon" />
            </div>
            {editDish &&(
                <EditingDish editDish={editDish} expanded={expanded} setExpanded={setExpanded} setEditDish={setEditDish} dish={dish} />
            )}
        </React.Fragment>

    )
}
