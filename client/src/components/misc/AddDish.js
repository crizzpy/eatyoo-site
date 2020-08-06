import React from 'react'
import { NavLink } from 'react-router-dom'

export const AddDish = () => {
    return (
        <React.Fragment>
            <div className="add-x-route-bg" />
            <div className="add-x-route-container">
                <div className="add-x-form-container">
                    <NavLink to="/admin/dishes" className="close-add-x">
                        x
                    </NavLink>
                    <div className="exit-save-buffer">Add a new dish</div>
                    <div className="add-x-form-inner">
                        <div className="add-x-labels">
                            <label>Test</label>
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
                                <input placeholder="Test" />
                            </div>
                            <div>
                                <input placeholder="Test1" />
                            </div>
                            <div>
                                <input placeholder="Test2" />
                            </div>
                            <div>
                                <input placeholder="Test3" />
                            </div>
                            <div>
                                <input placeholder="Test4" />
                            </div>
                            <div>
                                <input placeholder="Test5" />
                            </div>
                            <div>
                                <input placeholder="Test6" />
                            </div>
                            <div>
                                <input placeholder="Test7" />
                            </div>
                        </div>
                    </div>
                    <div className="exit-save-buffer" />
                    <button className="save-btn">Save</button>
                </div>
            </div>
        </React.Fragment>
    )
}
