import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const AddedAssc = (props) => {
    return (
        <React.Fragment>
            <div className="tag">
                <div className="tag-inner">

                    {/* Delete Tag Button */}
                    <div className="del-tag" onClick={e => {

                        // Delete tag logic
                        //check if its sitting within the "Add New" or "Edit" Form
                        
                        if (props.addedAsscs) {
                            props.setAddedAsscs([...props.addedAsscs.filter(addedAssc => addedAssc.id !== props.assc.id)])
                        } else if (props.newAsscs) {
                            props.setNewAsscs([...props.newAsscs.filter(newAssc => newAssc.id !== props.assc.id)])
                        }
                    }}>
                        <FontAwesomeIcon icon="times-circle" class="fa-icon" /> 
                    </div>

                    {/* Tag Name */}
                    <div className="tag-name">
                        {props.assc.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
