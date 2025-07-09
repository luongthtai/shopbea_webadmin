import React, { InputHTMLAttributes } from 'react'

type Props = {
    props: InputHTMLAttributes<HTMLInputElement>
}

export default function InputForm({ props }: Props) {
    const { type } = props

    return (
        <div>
            <input {...props} className='py-2.5 px-3 border border-grey-Grey-2 bg-white rounded-4 focus:border-primary-Green-1 outline-0 w-full text-13' />

            {
                type === "password" && <span></span>
            }
        </div>
    )
}
