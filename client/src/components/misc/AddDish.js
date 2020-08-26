import React, {useRef, useState} from 'react'
import * as uuid from 'uuid'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {AddedTag} from '../shared/AddedTag'
import AddOREditTags from '../shared/AV/AddOREditTags'


export const AddDish = ({navlinkRoute}) => {
    const submitDish = async e => {
        e.preventDefault()
        // if (titleRef && descriptionRef && imgUrlRef) {
            const dishData = {
                dishTitle: titleRef.current.value,
                dishDesc: descriptionRef.current.value,
                dishImgUrl: imgUrlRef.current.value,
                dishTags: addedTags,
                dishMemeUrl: memeUrlRef.current.value,
                dishAssociated: addedAsscs
            }
            console.log(dishData)
            axios.post('/dishes/add', dishData)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        // }
        // else {
        //     return
        // }
    }
    
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const imgUrlRef = useRef(null)
    const tagsRef = useRef(null)
    const memeUrlRef = useRef(null)
    const associatedRef = useRef(null)

    const [addedTags, setAddedTags] = useState([])
    const [addedAsscs, setAddedAsscs] = useState([])

    return (
        <React.Fragment>
            <div className="add-x-route-bg" />
            <div className="add-x-route-container">
                <div className="add-x-form-container">
                    <NavLink to={`/admin/${navlinkRoute}`} className="close-add-x">
                        x
                    </NavLink>
                    <div className="exit-save-buffer">Add a new <b>* dish *</b></div>
                    <div className="add-x-form-inner">
                        <div className="add-x-labels">
                            <label>Title</label>
                            <label>Description</label>
                            <label>Image URL</label>
                            <label>Tags</label>
                            <label>Meme URL</label>
                            <label>Associated Trends / Lists</label>
                        </div>
                        <div className="add-x-inputs">
                            <div>
                                <input placeholder="FuckBoy Soup" ref={titleRef} />
                            </div>
                            <div>
                                <input id="long" placeholder="THIS IS SOUP FOR FUCCBOIS" ref={descriptionRef} />
                            </div>
                            <div>
                                <input placeholder="Image URL" ref={imgUrlRef} />
                            </div>
                            {/* <AddOREditTags 
                            addedTags={addedTags}
                            setAddedTags={setAddedTags}
                            ref={tagsRef} /> */}
                            <div className="add-x-form-tags-associated">
                                <input placeholder="Tags" ref={tagsRef} />
                                <button className="add-x-form-btn" onClick={e => {
                                    e.preventDefault()
                                    // if (!tagsRef == ''){
                                    if (tagsRef.current.value){
                                        setAddedTags([...addedTags, {
                                            id: uuid.v4(),
                                            name: tagsRef.current.value
                                        }])
                                        console.log(addedTags)
                                        tagsRef.current.value = ''
                                    }
                                }}>
                                    Add Tag
                                </button>
                                <div className="add-x-tags-listed">
                                    {addedTags.map(tag => {
                                        return(
                                            <AddedTag 
                                                tag={tag}
                                                addedTags={addedTags}
                                                setAddedTags={setAddedTags}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <input placeholder="Meme URL" ref={memeUrlRef} />
                            </div>
                            <div className="add-x-form-tags-associated">
                                <input placeholder="Associated Trends / Lists" ref={associatedRef} />
                                <button className="add-x-form-btn">Add Associated Trend / Lists</button>
                                <div className="tags-listed">
                                {/* Associated Trends / Lists */}


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exit-save-buffer" />
                    <button className="save-btn" onClick={submitDish}>Save</button>
                </div>
            </div>
        </React.Fragment>
    )
}
