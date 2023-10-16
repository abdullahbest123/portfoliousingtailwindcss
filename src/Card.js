import React from 'react'

export const Card = ({ image, heading }) =>
{
    return (
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <img src={ image } width={ 100 } height={ 100 } />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
                { heading }
            </h3>
            <p className="py-2">
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
        </div>
    )
}
