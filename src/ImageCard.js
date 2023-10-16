import React from 'react'

export const ImageCard = ({ img }) =>
{
    return (
        <div className="basis-1/3 flex-1 ">
            <img
                className="rounded-lg object-cover"
                width={ "100%" }
                height={ "100%" }
                layout="responsive"
                src={ img }
            />
        </div>
    )
}
