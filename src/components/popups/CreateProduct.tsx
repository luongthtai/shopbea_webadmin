'use client'

import { useFormik } from 'formik'
import { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import ButtonDanger from '../elements/ButtonDanger'
import ButtonPrimary from '../elements/ButtonPrimary'
import TitleSection from '../elements/TitleSection'
import Popup from './Popup'
import InputLabel from '../elements/InputLabel'
import InputImage from '../elements/InputImage'

interface IInitialValue {
    image: File | string,
    brand_name: string,
    time_start: string,
    time_end: string,
    brand_description: string
}

const initialValues: IInitialValue = {
    image: "",
    brand_name: "",
    time_start: "",
    time_end: "",
    brand_description: "",
}

export default function CreateProduct() {
    const [isShowPopup, setIsShowPopup] = useState(false)

    const handleShowPopup = () => setIsShowPopup(!isShowPopup)

    const formik = useFormik({
        initialValues,
        onSubmit: values => console.log(values)
    })

    const handleChangeImage = (e: any) => {
        const file = e.target.files[0]
        formik.setFieldValue('image', file)
    }

    return (
        <>
            <ButtonPrimary title='Add Product' isAdd className='text-sm font-light px-2.5 py-1 rounded-4' onClick={handleShowPopup} />

            <Popup isShowPopup={isShowPopup} className='flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <TitleSection title='Add Product' />
                    <button type='button' className='cursor-pointer' onClick={handleShowPopup}><MdCancel size={20} /></button>
                </div>

                <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
                    <div>
                        <InputLabel label='Product Image' />
                        <div className='border border-grey-Grey-1 border-dashed rounded-8 py-10 flex justify-center'>
                            <InputImage props={{
                                type: 'file',
                                onChange: (e) => handleChangeImage(e),
                                name: 'image'
                            }} />
                        </div>
                    </div>
                    <div className='flex gap-2.5'>
                        <ButtonPrimary title='Submit' className='px-8 py-3 rounded-4 text-sm' onClick={formik.handleSubmit} />
                        <ButtonDanger title='Cancel' className='px-8 py-3 rounded-4 text-sm' onClick={handleShowPopup} />
                    </div>
                </form>
            </Popup>
        </>
    )
}
