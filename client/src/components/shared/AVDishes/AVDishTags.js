import React from 'react'

export const AVDishTags = ({title, dish}) => {
    const {dishTags, dishAssociated} = dish
    return (
        <React.Fragment>
            <div className="tags-trends-header">
                {title}
            </div>
            
            <div className="tags-listed">
                <React.Fragment>
                    {title == "Tags" && (
                        <>
                            {dishTags.map(tag => {
                                return(
                                    <div key={tag.id}>
                                        {tag.name}
                                    </div>
                                )
                            })}
                        </>
                    )}
                    {title == "Trends" && (
                        <>
                        {dishAssociated.map(tag => {
                                return(
                                    <div key={tag.id}>
                                        {tag.name}
                                    </div>
                                )
                            })}
                        </>
                    )}
                </React.Fragment>
            </div>
        </React.Fragment>
    )
}
