import React from 'react'
import { FiPlus } from 'react-icons/fi'

type Props = {
    title: string,
    type?: "submit" | "button",
    onClick?: () => void,
    className?: string,
    isAdd?: boolean
}

export default function ButtonPrimary({ title, type = 'button', onClick, className, isAdd }: Props) {
    return <button type={type} onClick={onClick} className={`bg-primary-Green-1 text-white outline-primary-Green-1 cursor-pointer ${className} ${isAdd && 'flex items-center gap-1'}`}>{isAdd && <FiPlus size={12} />}{title}</button>
}
