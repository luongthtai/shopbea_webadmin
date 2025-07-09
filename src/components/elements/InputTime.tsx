import React, { InputHTMLAttributes } from 'react'

type Props = {
    props: InputHTMLAttributes<HTMLInputElement>
}

export default function InputTime({ props }: Props) {
    return (
        <div>
            <input type='time' {...props} className='bg-white px-2.5 py-0.5 rounded-4' />
        </div>
    )
}

