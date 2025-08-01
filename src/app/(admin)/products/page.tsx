import Breadcrumb from '@/components/elements/Breadcrumb'
import TitleSection from '@/components/elements/TitleSection'
import CreateProduct from '@/components/popups/CreateProduct'

export default function ProductsPage() {
    return (
        <>
            <Breadcrumb mainpage='home' page="products" />

            <section className='m-[30px] bg-white border-grey-Grey-2 border rounded-4'>
                <div className='px-4 py-5 flex justify-between items-center'>
                    <TitleSection title='Products' />
                    <CreateProduct />
                </div>

                <div>
                    {
                        0
                            ?
                            <>
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
