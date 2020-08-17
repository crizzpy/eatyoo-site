import React, {useRef} from 'react'
import {v4} from 'uuid'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export const AddList = ({navlinkRoute}) => {   
    const submitList = () => {
        if (true) {
            const data = {
                // dishId: uuid.v4(),
                title,
                description,
                imgUrl,
                // tags,
                // linkedTrends,
            }
            axios.post('/lists/add', data)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
        else {
            return
        }
    }

    const title = useRef('')
    const description = useRef('')
    const imgUrl = useRef('')
    const testRef4 = useRef('')
    const testRef5 = useRef('')
    const testRef6 = useRef('')
    const testRef7 = useRef('') 

    return (
        <React.Fragment>
            <div className="add-x-route-bg" />
            <div className="add-x-route-container">
                <div className="add-x-form-container">
                    <NavLink to={`/admin/${navlinkRoute}`} className="close-add-x">
                        x
                    </NavLink>
                    <div className="exit-save-buffer">Add a new <b>* list *</b></div>
                    <div className="add-x-form-inner">
                        <div className="add-x-labels">
                            <label>Test1</label>
                            <label>Test2</label>
                            <label>Test3</label>
                            <label>Test4</label>
                            <label>Test5</label>
                            <label>Test6</label>
                            <label>Test7</label>
                        </div>
                        <div className="add-x-inputs">

                            <div>
                                <input placeholder="Test1" ref={title} />
                            </div>
                            <div>
                                <input placeholder="Test2" ref={description} />
                            </div>
                            <div>
                                <input placeholder="Test3" ref={imgUrl} />
                            </div>
                            <div>
                                <input placeholder="Test4" ref={testRef4} />
                            </div>
                            <div>
                                <input placeholder="Test5" ref={testRef5} />
                            </div>
                            <div>
                                <input placeholder="Test6" ref={testRef6} />
                            </div>
                            <div>
                                <input placeholder="Test7" ref={testRef7} />
                            </div>
                        </div>
                    </div>
                    <div className="exit-save-buffer" />
                    <button className="save-btn" onClick={() => submitList}>Save</button>
                </div>
            </div>
        </React.Fragment>
    )
}
