import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { FiMessageSquare, FiSearch } from 'react-icons/fi'
import { IoMdMenu, IoMdNotificationsOutline } from 'react-icons/io'
import ButtonPrimary from '../elements/ButtonPrimary'
import Image from 'next/image'
import avatar from 'public/images/signin.jpg'

export default function HeaderAdmin() {
    return (
        <header className='bg-black-Black-2 flex justify-between items-center'>
            <div className='flex gap-0.5'>
                <button className='text-grey-Grey-1 bg-black-Black-1 p-1 flex justify-center items-center'><IoMdMenu className='text-3xl' /></button>
                <form className='flex items-center gap-2.5 bg-black-Black-1 px-5 py-3'>
                    <FiSearch className='text-white' />
                    <input placeholder='Search' className='text-white text-sm' />
                </form>
            </div>

            <div className='flex gap-10'>
                <div className='flex gap-5 text-white'>
                    <button type='button' className='text-2xl'><CiSettings /></button>
                    <button type='button' className='text-2xl'><IoMdNotificationsOutline /></button>
                    <button type='button' className='text-2xl'><FiMessageSquare /></button>
                </div>

                <div className='flex px-10 gap-5'>
                    <ButtonPrimary title='Logout' className='!py-1.5 !px-5 !font-normal text-sm !rounded-4' />

                    <div className='h-full w-[1px] bg-grey-Grey-1'></div>

                    <div className='flex items-center gap-1.5'>
                        <Image src={avatar} alt='avatar shopbea' className='w-8 h-8 rounded-full' />

                        <div className='text-white'>
                            <p className='text-sm font-medium leading-none'>Luong Tai</p>
                            <p className='text-xs'>luongthetai@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
