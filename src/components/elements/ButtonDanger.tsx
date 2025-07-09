import React from 'react'

type Props = {
    title: string,
    type?: "submit" | "button",
    onClick?: () => void,
    className?: string,
}

export default function ButtonDanger({ title, type = 'button', onClick, className }: Props) {
    return <button type={type} onClick={onClick} className={`duration-200 bg-red-2 text-red-1 hover:bg-red-1 hover:text-white outline-primary-Green-1 cursor-pointer ${className}`}>{title}</button>
}
