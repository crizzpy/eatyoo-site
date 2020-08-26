import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const AddedTag = (props) => {
    return (
        <React.Fragment>
            <div className="tag">
                <div className="tag-inner">

                    {/* Delete Tag Button */}
                    <div className="del-tag" onClick={e => {
                        // Delete tag logic
                        //check if its sitting within the "Add New" or "Edit" Form
                        if (props.addedTags) {
                            props.setAddedTags([...props.addedTags.filter(addedTag => addedTag.id !== props.tag.id)])
                        } else if (props.newTags) {
                            props.setNewTags([...props.newTags.filter(newTag => newTag.id !== props.tag.id)])
                        }
                    }}>
                        <FontAwesomeIcon icon="times-circle" class="fa-icon" /> 
                    </div>

                    {/* Tag Name */}
                    <div className="tag-name">
                        {props.tag.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
