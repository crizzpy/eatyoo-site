import React, {useRef, createRef, useState} from 'react'
import {AddedTag} from '../AddedTag'
import * as uuid from 'uuid'

export const EditDishForm = ({dish}) => {

    const {
            dishId, dateAdded, dishTitle, dishDesc, 
            dishImgUrl, dishTags, dishMemeUrl, dishAssociated
    } = dish
    const [newTitle, setNewTitle] = useState(dishTitle)
    const [newDesc, setNewDesc] = useState(dishDesc)
    const [newImgUrl, setNewImgUrl] = useState(dishImgUrl)
    const [newTags, setNewTags] = useState(dishTags)
    const [newDishMemeUrl, setNewDishMemeUrl] = useState(dishMemeUrl)
    const [newDishAssc, setNewDishAssc] = useState(dishAssociated)

    const newTagsRef = createRef(null)

    const handleChange = (e, field) => {
        // console.log(e)
        // console.log(dishId, dateAdded, dishTitle, dishDesc, 
        //     dishImgUrl, dishTags, dishMemeUrl, dishAssociated)
        // setNewTitle(e.target.value)
        switch (e.target.name) {
            case 'newTitle':
                setNewTitle(e.target.value)
                break
            case 'newDesc':
                setNewDesc(e.target.value)
                break
            case 'newImgUrl':
                setNewImgUrl(e.target.value)
                break
            case 'newTags':
                setNewTags(e.target.value)
                break
            case 'newDishMemeUrl':
                setNewDishMemeUrl(e.target.value)
                break
            case 'newDishAssc':
                setNewDishAssc(e.target.value)
                break
            default:
                return
        }
    }


    return (
        <div className="edit-x-form">
            <div className="edit-x-form-inner">
                <div className="edit-x-form-item">
                    <div>
                        <label>Title</label>
                    </div>
                    <div>
                        <input 
                            name="newTitle"
                            value={newTitle}
                            onChange={e => {
                                handleChange(e)
                            }}
                        />
                    </div>
                </div>
                <div className="edit-x-form-item">
                    <div>
                        <label>Description</label>
                    </div>
                    <div>
                        <input 
                            id="long" 
                            name="newDesc"
                            value={newDesc}
                            onChange={e => {
                                handleChange(e)
                            }}  
                        />
                    </div>
                </div>
                <div className="edit-x-form-item">
                    <div>
                        <label>Image URL</label>
                    </div>
                    <div>
                        <input 
                            name="newImgUrl"
                            value={newImgUrl}
                            onChange={e => {
                                handleChange(e)
                            }}    
                        />
                    </div>
                </div>
                <div className="edit-x-form-item">
                    <div>
                        <label>Tags</label>
                    </div>
                    <div>
                        <input placeholder="Tags" ref={newTagsRef} />
                            <button className="add-x-form-btn" onClick={e => {
                                e.preventDefault()
                                // if (!tagsRef == ''){
                                if (newTagsRef.current.value){
                                    setNewTags([...newTags, {
                                        id: uuid.v4(),
                                        name: newTagsRef.current.value
                                    }])
                                    console.log(newTags)
                                    newTagsRef.current.value = ''
                                }
                            }}>
                                Add Tag
                            </button>
                            <div className="add-x-tags-listed">
                                {newTags.map(tag => {
                                    return(
                                        <AddedTag 
                                            tag={tag}
                                            newTags={newTags}
                                            setNewTags={setNewTags}
                                        />
                                    )
                                })}
                            </div>
                    </div>
                </div>
                <div className="edit-x-form-item">
                    <div>
                        <label>Meme Url</label>
                    </div>
                    <div>
                        <input 
                            name="newDishMemeUrl"
                            value={newDishMemeUrl}
                            onChange={e => {
                                handleChange(e)
                            }}
                        />
                    </div>  
                </div>
                <div className="edit-x-form-item">
                    <div>
                        <label>Associated Lists/Trends</label>
                    </div>
                    <div>
                        <input 
                            name="newDishAssc"
                            value={newDishAssc}
                            onChange={e => {
                                handleChange(e)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
