import React from 'react'
import ButtonOpacity from './ButtonOpacity'
import { AiOutlineHome } from 'react-icons/ai'

type Props = {
    mainpage: string,
    page: string
}

export default function Breadcrumb({ page, mainpage }: Props) {
    return (
        <header className='flex justify-between items-center px-8 py-2.5 text-black-Black-1 border-b border-b-grey-Grey-2 bg-white'>
            <div className='capitalize flex items-center gap-8'>
                <h2 className='text-lg font-semibold'>{page}</h2>

                <div className='flex gap-2.5 items-center text-sm'>
                    <AiOutlineHome />
                    <span>
                        {mainpage}
                    </span>
                    /
                    <span className='text-primary-Green-1'>{page}</span>
                </div>
            </div>

            <ButtonOpacity title='Add Task' />
        </header>
    )
}
