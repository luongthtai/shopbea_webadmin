'use client'

import { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import ButtonPrimary from '../elements/ButtonPrimary'
import TitleSection from '../elements/TitleSection'
import Popup from './Popup'
import InputLabel from '../elements/InputLabel'
import InputImage from '../elements/InputImage'
import InputForm from '../elements/InputForm'
import InputArea from '../elements/InputArea'
import ButtonDanger from '../elements/ButtonDanger'
import { useFormik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { post } from '@/utils/api'
import { toast } from 'react-toastify'

interface IInitialValue {
    image: File | string,
    category_name: string,
    category_description: string
}

const initialValues: IInitialValue = {
    image: "",
    category_description: "",
    category_name: ""
}

export default function CreateCategory() {
    const [isShowPopup, setIsShowPopup] = useState(false)

    const notify = () => toast.success('Create category success !!!')

    const mutation = useMutation({
        mutationKey: ['categories'],
        mutationFn: (values: any) => post(`categories/create`, values),
        onSuccess: (response) => {
            const status = response.status

            if (status) {
                notify()
                handleShowPopup()
            }
        }
    })

    const handleShowPopup = () => setIsShowPopup(!isShowPopup)

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            const formData = new FormData()

            formData.append('image', values.image)
            formData.append('category_name', values.category_name)
            formData.append('category_description', values.category_description)

            mutation.mutate(formData)
        }
    })

    const handleChangeImage = (e: any) => {
        const file = e.target.files[0]
        formik.setFieldValue('image', file)
    }

    return (
        <>
            <ButtonPrimary title='Add Category' isAdd className='text-sm font-light px-2.5 py-1 rounded-4' onClick={handleShowPopup} />

            <Popup isShowPopup={isShowPopup} className='flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <TitleSection title='Add Category' />
                    <button type='button' className='cursor-pointer' onClick={handleShowPopup}><MdCancel size={20} /></button>
                </div>

                <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
                    <div>
                        <InputLabel label='Category Image' />
                        <div className='border border-grey-Grey-1 border-dashed rounded-8 py-10 flex justify-center'>
                            <InputImage props={{
                                type: 'file',
                                onChange: (e) => handleChangeImage(e),
                                name: 'image'
                            }} />
                        </div>
                    </div>
                    <div>
                        <InputLabel label='Category Name' />
                        <InputForm props={{
                            type: 'text',
                            onChange: formik.handleChange,
                            name: "category_name"
                        }} />
                    </div>
                    <div>
                        <InputLabel label='Category Description' />
                        <InputArea props={{
                            rows: 6,
                            onChange: formik.handleChange,
                            name: "category_description"
                        }} />
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
