import React, {useRef} from 'react'
import * as uuid from 'uuid'
import {AddedTag} from '../AddedTag'


// const AddOREditTags = React.forwardRef((props, ref)) (
    const AddOREditTags = React.forwardRef((props, ref) =>  {
        return(
            <React.Fragment>
                <div className="add-x-form-tags-associated">
                    <input placeholder="Tags" ref={ref} />
                    <button className="add-x-form-btn" onClick={e => {
                        e.preventDefault()
                        // if (!tagsRef == ''){
                        if (ref.current.value){
                            props.setAddedTags([...props.addedTags, {
                                id: uuid.v4(),
                                name: ref.current.value
                            }])
                            console.log(props.addedTags)
                            ref.current.value = ''
                        }
                    }}>Add Tag</button>
                    <div className="add-x-tags-listed">
                        {props.addedTags.map(tag => {
                            return(
                                <AddedTag 
                                    tag={tag}
                                    addedTags={props.addedTags}
                                    setAddedTags={props.setAddedTags}
                                />
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    })

// )


export default React.forwardRef(AddOREditTags);