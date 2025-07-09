import React from 'react'

export default function LoadingScreen() {
    return (
        <div className='fixed inset-0 bg-black-opacity-1 flex justify-center items-center'>
            <div className='w-10 h-10 border-grey-Grey-2 border-4 border-t-primary-Green-1 rounded-[50%] animate-spin'></div>
        </div>
    )
}
