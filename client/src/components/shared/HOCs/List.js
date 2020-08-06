import React from 'react'
import {Dish} from '../Dish'

export const List = ({title, dishes}) => {
    return (
        <React.Fragment>
            <div className="list-header">
                <div id="blank" />
                <div id="list-title">
                    <b>{title}</b>
                </div>
            </div>
            <div className="list-body">
                
                {/* dishes.map(({})) */}
                <Dish title={"Romanian Gypsy Bagels"} desc={"FUCK YOU BALTIMORE"} />
                <Dish title={"Wild West Roadkill"} desc={"SHEEEEEEEEIT"} />
                


            </div>
        </React.Fragment>
    )
}
