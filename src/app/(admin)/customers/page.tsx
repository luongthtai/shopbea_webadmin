import Breadcrumb from '@/components/elements/Breadcrumb'
import React from 'react'

export default function CustomersPage() {
    return (
        <>
            <Breadcrumb mainpage='home' page="customers" />

            <section className='p-[30px]'>
                customers
            </section>
        </>
    )
}
