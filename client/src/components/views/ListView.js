import React, {useContext} from 'react'
import {GlobalContext} from '../../App'
import {List} from '../shared/HOCs/List'

export const ListView = () => {
    const {lists, listsLoaded} = useContext(GlobalContext)
    return (
        <div className="list-view-container">
            <div className="list-view-inner">
                <div className="list-view-grid-window">
                    {listsLoaded && (
                        <ul>
                            {lists.map(list => {
                            // if (userId.id == post.userId) {
                            //     delBtn = "delbutton";
                            // } else {
                            //     delBtn = "hide";
                            // }
                                return(
                                    <List 
                                        key={list.id} 
                                        list={list} 
                                        // delBtn={delBtn} 
                                        // setActiveComponent={setActiveComponent} 
                                        // setRenderUserProfile={setRenderUserProfile} 
                                        listsLoaded={listsLoaded}
                                    />
                            )})}
                        </ul>
                    )}
                    <List title={"Top 10 Banned Foods Around the World"} />
                </div>
            </div>
        </div>
    )
}