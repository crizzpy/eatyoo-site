import React from 'react'

export const AVDishImgPreview = ({title}) => {
    return (
        <div className="av-dish-img-previews">
            <div style={{height: "40px"}}>{title}</div>
            <img className="av-img-preview" src="https://dc597.4shared.com/img/CPfns5_5iq/s24/173fe654ed8/BErHQY1?async&rand=0.6064510185891594" alt="meme"/>
        </div>
    )
}
