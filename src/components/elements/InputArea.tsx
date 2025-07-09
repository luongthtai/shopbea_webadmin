import React, { TextareaHTMLAttributes } from 'react'

type Props = {
    props: TextareaHTMLAttributes<HTMLTextAreaElement>
}

export default function InputArea({ props }: Props) {
    return (
        <div>
            <textarea {...props} className='py-2.5 px-3 border border-grey-Grey-2 bg-white rounded-4 focus:border-primary-Green-1 outline-0 w-full text-13 resize-none' />
        </div>
    )
}
