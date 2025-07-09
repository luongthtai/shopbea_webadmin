import React from 'react'

type Props = {
    label: string
}

export default function InputCheckbox({ label }: Props) {
    return (
        <div className='flex items-center gap-1.5'>
            <div className='border border-primary-Green-1 w-5 h-5 rounded-4'></div>
            <p className='text-sm font-semibold text-grey-Grey-1'>{label}</p>
        </div>
    )
}
