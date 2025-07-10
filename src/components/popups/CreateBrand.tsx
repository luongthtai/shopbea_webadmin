'use client'

import { post } from '@/utils/api'
import { ERROR_REQUIRE } from '@/utils/error'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import ButtonDanger from '../elements/ButtonDanger'
import ButtonPrimary from '../elements/ButtonPrimary'
import InputArea from '../elements/InputArea'
import InputForm from '../elements/InputForm'
import InputImage from '../elements/InputImage'
import InputLabel from '../elements/InputLabel'
import InputTime from '../elements/InputTime'
import TitleSection from '../elements/TitleSection'
import Popup from './Popup'

interface IInitialValue {
    image: File | string,
    brand_name: string,
    brand_email: string,
    brand_password: string,
    mobile: string,
    address: string,
    time_start: string,
    time_end: string,
    brand_description: string
}

const initialValues: IInitialValue = {
    image: "",
    brand_name: "",
    brand_email: "",
    brand_password: "",
    mobile: "",
    address: "",
    time_start: "",
    time_end: "",
    brand_description: "",
}


export default function CreateBrand() {
    const queryClient = useQueryClient()
    const [isShowPopup, setIsShowPopup] = useState(false)

    const notify = () => toast.success('Create brand success !!!')

    const mutation = useMutation({
        mutationKey: ['brands'],
        mutationFn: (values: any) => post(`/brands/create`, values),
        onSuccess: (res) => {
            const status = res.status
            if (status) {
                queryClient.invalidateQueries({ queryKey: ['brands'] })
                formik.resetForm()
                notify()
                handleShowPopup()
            }
        }
    })

    const handleShowPopup = () => setIsShowPopup(!isShowPopup)

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            image: Yup.string().required(ERROR_REQUIRE),
            brand_name: Yup.string().required(ERROR_REQUIRE),
            brand_email: Yup.string().required(ERROR_REQUIRE),
            brand_password: Yup.string().required(ERROR_REQUIRE),
            mobile: Yup.string().required(ERROR_REQUIRE),
            address: Yup.string().required(ERROR_REQUIRE),
            time_start: Yup.string().required(ERROR_REQUIRE),
            time_end: Yup.string().required(ERROR_REQUIRE),
            brand_description: Yup.string().required(ERROR_REQUIRE),
        }),
        onSubmit: values => {
            const formData = new FormData()

            formData.append("image", values.image)
            formData.append("brand_name", values.brand_name)
            formData.append("brand_email", values.brand_email)
            formData.append("brand_password", values.brand_password)
            formData.append("mobile", values.mobile)
            formData.append("address", values.address)
            formData.append("time_start", values.time_start)
            formData.append("time_end", values.time_end)
            formData.append("brand_description", values.brand_description)

            mutation.mutate(formData)
        }
    })

    const handleChangeImage = (e: any) => {
        const file = e.target.files[0]
        formik.setFieldValue('image', file)
    }

    return (
        <>
            <ButtonPrimary title='Add Brand' isAdd className='text-sm font-light px-2.5 py-1 rounded-4' onClick={handleShowPopup} />

            <Popup isShowPopup={isShowPopup} className='flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <TitleSection title='Add Brand' />
                    <button type='button' className='cursor-pointer' onClick={handleShowPopup}><MdCancel size={20} /></button>
                </div>

                <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
                    <div>
                        <InputLabel label='Brand Image' />
                        <div className='border border-grey-Grey-1 border-dashed rounded-8 py-10 flex justify-center'>
                            <InputImage props={{
                                type: 'file',
                                accept: ".png",
                                onChange: (e) => handleChangeImage(e),
                                name: 'image'
                            }} />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <InputLabel label='Brand Name' />
                            <InputForm props={{
                                type: 'text',
                                onChange: formik.handleChange,
                                name: "brand_name"
                            }} />
                        </div>
                        <div>
                            <InputLabel label='Brand Email' />
                            <InputForm props={{
                                type: 'text',
                                onChange: formik.handleChange,
                                name: "brand_email"
                            }} />
                        </div>
                        <div>
                            <InputLabel label='Brand Pasword' />
                            <InputForm props={{
                                type: 'password',
                                onChange: formik.handleChange,
                                name: "brand_password"
                            }} />
                        </div>
                        <div>
                            <InputLabel label='Mobile' />
                            <InputForm props={{
                                type: 'text',
                                onChange: formik.handleChange,
                                name: "mobile"
                            }} />
                        </div>
                    </div>
                    <div>
                        <InputLabel label='Operational Hour' />
                        <div className='flex gap-5 items-center'>
                            <InputTime
                                props={{
                                    name: 'time_start',
                                    onChange: formik.handleChange
                                }}
                            />
                            <span>-</span>
                            <InputTime
                                props={{
                                    name: 'time_end',
                                    onChange: formik.handleChange
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <InputLabel label='Address' />
                        <InputArea props={{
                            rows: 4,
                            onChange: formik.handleChange,
                            name: "address"
                        }} />
                    </div>
                    <div>
                        <InputLabel label='Brand Description' />
                        <InputArea props={{
                            rows: 6,
                            onChange: formik.handleChange,
                            name: "brand_description"
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
