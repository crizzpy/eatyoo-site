import React, {useRef, createRef, useState} from 'react'
import {AddedTag} from '../AddedTag'
import {AddedAssc} from '../AddedAssc'
import axios from 'axios'
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
    const [newAsscs, setNewAsscs] = useState(dishAssociated)

    const newTagsRef = createRef(null)
    const newAsscsRef = createRef(null)
    const handlePatch = e => {
        const dishData = {
            dishId: dish.dishId,
            dishTitle: newTitle,
            dishDesc: newDesc,
            dishImgUrl: newImgUrl,
            dishTags: newTags,
            dishMemeUrl: newDishMemeUrl,
            dishAssociated: newAsscs
        }
        console.log(dishData)

        

        // axios.patch('/dishes/edit', dishData)
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch(err => console.log(err))

    }
    const handleChange = (e, field) => {
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
            case 'newAsscs':
                setNewAsscs(e.target.value)
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
                <div className="edit-x-form-item" id="tags">
                    <div style={{display: "flex"}}>
                        <label>Tags</label>
                    </div>
                    <div className="edit-tags-container">
                        <div className="edit-tags-top">
                            <input placeholder="Tags" ref={newTagsRef} id="edit" />
                            <button className="add-x-form-btn" onClick={e => {
                                e.preventDefault()
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
                        </div>
                        <div className="add-x-tags-listed" id="edit">
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
                    <div className="edit-tags-container">
                        <div className="edit-tags-top">
                            <input placeholder="Add" ref={newAsscsRef} id="edit" />
                            <button className="add-x-form-btn" onClick={e => {
                                e.preventDefault()
                                if (newAsscsRef.current.value){
                                    setNewAsscs([...newAsscs, {
                                        id: uuid.v4(),
                                        name: newAsscsRef.current.value
                                    }])
                                    console.log(newAsscs)
                                    newAsscsRef.current.value = ''
                                }
                            }}>
                                Add Association
                            </button>
                        </div>
                        <div className="add-x-tags-listed" id="edit">
                            {newAsscs.map(assc => {
                                return(
                                    <AddedAssc 
                                        assc={assc}
                                        newAsscs={newAsscs}
                                        setNewAsscs={setNewAsscs}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="edit-x-form-item" id="send-edit">
                    <button onClick={e => handlePatch(e)}>Update Dish</button>
                </div>
            </div>
        </div>
    )
}
