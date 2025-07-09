import React from 'react'

type Props = {
    title: string
}

export default function TitleSection({ title }: Props) {
    return <h3 className='font-medium text-black-Black-1'>{title}</h3>
}
