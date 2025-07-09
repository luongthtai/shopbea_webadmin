'use client'

import HeaderAdmin from '@/components/layouts/HeaderAdmin'
import SidebarAdmin from '@/components/layouts/SidebarAdmin'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

type Props = {
    children: ReactNode
}

export default function layout({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            <body className='flex w-full h-screen'>
                <SidebarAdmin />

                <article className='flex-grow h-full overflow-y-auto flex flex-col'>
                    <HeaderAdmin />
                    <div className='bg-grey-Grey-3 overflow-y-auto flex-grow flex flex-col'>
                        {children}
                    </div>
                </article>
                <ToastContainer
                    hideProgressBar={false}
                />
            </body>
        </QueryClientProvider>
    )
}
