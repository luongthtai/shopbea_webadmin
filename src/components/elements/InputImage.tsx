import React, { InputHTMLAttributes } from 'react'

type Props = {
    props: InputHTMLAttributes<HTMLInputElement>
}

export default function InputImage({ props }: Props) {
    return (
        <div>
            <input {...props} className='border border-black-Black-1 bg-grey-Grey-2 text-sm px-2 py-1 rounded-4' />
        </div>
    )
}
