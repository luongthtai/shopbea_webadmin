import React, { ReactNode } from 'react'
import logo from 'public/images/logo.png'
import Image from 'next/image'

type Props = {
    children: ReactNode
}

export default function SignInPage({ children }: Props) {
    return (
        <body>
            <main className='flex h-screen'>
                <article className='w-2/6 h-full bg-white z-10 pt-[100px] px-[58px] text-black-Black-1'>
                    <section className='shadow-popup p-5 rounded-8 flex flex-col gap-8 bg-white border border-transparent'>
                        <Image src={logo} alt='shopbae' />

                        {children}

                        <p className='text-grey-Grey-1  text-center'>© Copyright by  DexignZone All rights reserved.</p>
                    </section>
                </article>
                <div className='bg-[url(public/images/signin.jpg)] h-full bg-amber-50 fixed inset-0'></div>
            </main>
        </body>
    )
}
