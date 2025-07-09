import Breadcrumb from '@/components/elements/Breadcrumb'
import React from 'react'

export default function page() {
    return (
        <>
            <Breadcrumb mainpage='home' page="dashboard" />

            <section className='p-[30px]'>
                dashboard
            </section>
        </>
    )
}
