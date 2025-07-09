import ButtonPrimary from '@/components/elements/ButtonPrimary'
import InputCheckbox from '@/components/elements/InputCheckbox'
import InputForm from '@/components/elements/InputForm'
import { FaFacebookF } from 'react-icons/fa'

export default function LoginPage() {
    return (
        <>
            <form className='flex flex-col gap-4'>
                <div>
                    <h2 className='text-h3 font-semibold mb-2'>Personal Information</h2>
                    <p className='text-grey-Grey-1'>Enter your e-mail address and your password.</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <InputForm props={{ placeholder: "Enter your email" }} />
                    <InputForm props={{ placeholder: "Enter your password", type: "password" }} />

                    <div className='flex items-center gap-2'>
                        <ButtonPrimary title='login' className='px-6 py-2.5' />
                        <InputCheckbox label='Remember me' />
                    </div>
                </div>
            </form>

            <div className='flex items-center justify-between'>
                <h3 className='text-h4 font-semibold'>Sign In With</h3>

                <div>
                    <button type='button' className='text-sm text-[#3b5998] cursor-pointer'><FaFacebookF /></button>
                </div>
            </div>
        </>
    )
}
