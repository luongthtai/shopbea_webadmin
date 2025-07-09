import Image from 'next/image'
import logo from 'public/images/logo.png'
import { ReactNode } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiCategory, BiFoodMenu } from 'react-icons/bi'
import { BsBox } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { RiFolderUserLine } from 'react-icons/ri'
import SidebarItem from '../elements/SidebarItem'
import { TbBrandAirtable } from 'react-icons/tb'

interface ISidebarItem {
    id: string | number,
    title: string,
    icon: ReactNode,
    href: string
}

const listLink: Array<ISidebarItem> = [
    {
        id: 1,
        title: "dashboard",
        icon: <AiOutlineHome className='text-lg' />,
        href: '/dashboard'
    },
    {
        id: 2,
        title: "orders",
        icon: <BiFoodMenu className='text-lg' />,
        href: '/orders'
    },
    {
        id: 3,
        title: "products",
        icon: <BsBox className='text-lg' />,
        href: '/products'
    },
    {
        id: 4,
        title: "customers",
        icon: <FaUsers className='text-lg' />,
        href: '/customers'
    },
    {
        id: 5,
        title: "Employees",
        icon: <RiFolderUserLine className='text-lg' />,
        href: '/employees'
    },
    {
        id: 6,
        title: "Brand",
        icon: <TbBrandAirtable className='text-lg' />,
        href: '/brands'
    },
    {
        id: 7,
        title: "Categories",
        icon: <BiCategory className='text-lg' />,
        href: '/categories'
    },
]

export default function SidebarAdmin() {
    return (
        <aside className='w-2/12 h-full overflow-y-auto border-r border-grey-Grey-2'>
            <header className='bg-black-Black-2 h-[44px] flex items-center pl-5'>
                <Image src={logo} alt='Shopea' />
            </header>

            <section className='pt-4 pb-2.5 pl-8 flex flex-col gap-4'>
                <h2 className='text-primary-Green-1 text-sm'>YOUR COMPANY</h2>

                <div >
                    {
                        listLink.map(item => <SidebarItem key={item.id} title={item.title} icon={item.icon} to={item.href} />)
                    }
                </div>
            </section>
        </aside>
    )
}
