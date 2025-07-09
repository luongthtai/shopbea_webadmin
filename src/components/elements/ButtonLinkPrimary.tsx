import Link from 'next/link'
import React from 'react'

type Props = {
    href: string,
    title: string
}

export default function ButtonLinkPrimary({ href, title }: Props) {
    return <Link href={href} className='py-3 px-9 bg-primary-Green-1 rounded-8 text-white font-semibold outline-primary-Green-1 cursor-pointer block text-center'>{title}</Link>
}
