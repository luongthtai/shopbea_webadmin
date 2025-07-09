import React from 'react'

type Props = {
    isActive?: boolean
}

export default function ButtonStatus({ isActive = false }: Props) {
    return (
        <div className={`${isActive ? 'text-primary-Green-1 bg-primary-Green-2' : 'text-red-1 bg-red-2'} w-fit py-[5px] px-3 rounded-4 duration-200`}>
            {isActive ? 'Active' : 'Inactive'}
        </div>
    )
}
