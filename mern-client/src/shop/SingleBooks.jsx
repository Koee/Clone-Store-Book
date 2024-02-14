import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBooks = () => {
    const { _id, bookTitle, imageURL ,} = useLoaderData();
    return (
        <div className='mt-28 px-4 lg:px-24'>
            <img src={imageURL} alt="" className='min-h-80 max-h-80' />
            <h2>{bookTitle}</h2>
        </div>
    )
}

export default SingleBooks