import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const ExpandAVDish = ({expanded, setExpanded, editDish, setEditDish}) => {
    return (
        <React.Fragment>
            <div className={expanded ? "expand-btn expanded" : "expand-btn"} onClick={() => {
                setExpanded(!expanded)
                if(editDish) {
                    setEditDish(false)
                }
            }}>
                <FontAwesomeIcon icon="angle-down" class="fa-icon" />
            </div>
        </React.Fragment>
    )
}
