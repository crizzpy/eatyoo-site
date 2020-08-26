import React from 'react'

export const CancelEditDish = ({setEditDish}) => {
    return (
        <button className="close-edit-dish" onClick={() => {
            // setExpanded(false)
            setEditDish(false)
        }}>
            Cancel
        </button>
    )
}
