import Breadcrumb from '@/components/elements/Breadcrumb'
import React from 'react'

export default function EmployeesPage() {
    return (
        <>
            <Breadcrumb mainpage='home' page="employees" />

            <section className='p-[30px]'>
                employees
            </section>
        </>
    )
}
