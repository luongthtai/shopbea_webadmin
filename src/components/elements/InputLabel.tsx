import React from 'react'

type Props = {
    label: string,
}

export default function InputLabel({ label }: Props) {
    return <label className='text-[13px] text-grey-Grey-1 font-medium mb-2 block'>{label}</label>
}
