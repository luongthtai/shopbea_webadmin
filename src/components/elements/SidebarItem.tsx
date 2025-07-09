import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
    title: string,
    to: string,
    icon: ReactNode
}

export default function SidebarItem({ title, to, icon }: Props) {
    return <Link href={to} className='capitalize py-3 flex gap-2.5 items-center text-sm text-black-Black-1'>{icon} {title}</Link>
}
