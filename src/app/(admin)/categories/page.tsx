'use client'

import Breadcrumb from '@/components/elements/Breadcrumb'
import TitleSection from '@/components/elements/TitleSection'
import LoadingScreen from '@/components/layouts/LoadingScreen'
import CreateCategory from '@/components/popups/CreateCategory'
import CategoriesTable from '@/components/tables/CategoriesTable'
import { get } from '@/utils/api'
import { useQuery } from '@tanstack/react-query'

export default function CategoriesPage() {
    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => get(`/categories/get`)
    })

    if (isLoading) return <LoadingScreen />

    const categories = data.data

    return (
        <>
            <Breadcrumb mainpage='home' page="categories" />

            <section className='m-[30px] bg-white border-grey-Grey-2 border rounded-4'>
                <div className='px-4 py-5 flex justify-between items-center'>
                    <TitleSection title='Categories' />
                    <CreateCategory />
                </div>

                <div>
                    {
                        categories.length
                            ?
                            <>
                                <CategoriesTable categories={categories} />
                                <div className='px-5 py-2.5'>
                                    <p className='text-xs text-grey-Grey-1'>Showing 1 to 10 of 12 entries</p>
                                </div>
                            </>
                            :
                            <p className='px-5 pb-5 text-sm'>No data</p>
                    }

                </div>
            </section>
        </>
    )
}
