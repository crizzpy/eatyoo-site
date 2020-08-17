import React, {useRef} from 'react'
// import uuid from 'uuid'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
export const AddDish = ({navlinkRoute}) => {
    const submitDish = async e => {
        e.preventDefault()
        // if (titleRef && descriptionRef && imgUrlRef) {
            const dishData = {
                dishTitle: titleRef.current.value,
                dishDesc: descriptionRef.current.value,
                dishImgUrl: imgUrlRef.current.value,
                dishTags: tagsRef.current.value,
                dishMemeUrl: memeUrlRef.current.value,
                dishAssociated: associatedRef.current.value
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
                            <div>
                                <input placeholder="Tags" ref={tagsRef} />
                            </div>
                            <div>
                                <input placeholder="Meme URL" ref={memeUrlRef} />
                            </div>
                            <div>
                                <input placeholder="Associated Trends / Lists" ref={associatedRef} />
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
