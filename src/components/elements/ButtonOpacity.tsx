import React from 'react'

type Props = {
    title: string,
    onClick?: () => void
}

export default function ButtonOpacity({ title, onClick }: Props) {
    return <button onClick={onClick} type='button' className='text-sm text-primary-Green-1'>{title}</button>
}
