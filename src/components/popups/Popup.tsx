import React, { ReactNode } from 'react'

type Props = {
    isShowPopup: boolean,
    children: ReactNode,
    className?: string
}

export default function Popup({ children, isShowPopup, className }: Props) {
    return (
        <div className={`bg-black-opacity-1 fixed inset-0 flex duration-300 justify-end ${isShowPopup ? 'visible opacity-100' : 'invisible opacity-0'}`} >
            <div className={`duration-300 bg-grey-Grey-5 w-2/6 h-full px-8 py-5 ${className} ${isShowPopup ? '' : 'translate-x-full'}`}>
                {children}
            </div>
        </div>
    )
}
