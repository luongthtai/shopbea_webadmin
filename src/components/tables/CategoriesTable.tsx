import Image from 'next/image'

import { ICategories } from '@/models/categories.model'
import { URL_SERVER_IMAGE } from '@/utils/api'
import moment from 'moment'
import ButtonStatus from '../elements/ButtonStatus'

type Props = {
    categories: Array<ICategories>
}

export default function CategoriesTable({ categories }: Props) {
    return (
        <table className='w-full text-black-Black-1'>
            <thead>
                <tr className='bg-grey-Grey-4 text-start'>
                    <th className='font-medium text-[13px] px-5 py-2 w-[200px] text-start'>Category ID</th>
                    <th className='font-medium text-[13px] px-5 py-2 text-start'>Category Name</th>
                    <th className='font-medium text-[13px] px-5 py-2 w-[200px]'>Product Count</th>
                    <th className='font-medium text-[13px] px-5 py-2 w-[200px]'>Create At</th>
                    <th className='font-medium text-[13px] px-5 py-2 text-end w-[250px]'>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((item, index) => <RowCategoryItem
                        key={item._id}
                        id={item._id}
                        name={item.category_name}
                        image={item.category_image}
                        description={item.category_description}
                        createdAt={item.createdAt}
                        index={index + 1}
                    />)
                }
            </tbody>
        </table>
    )
}

type CategoryProps = {
    id: string,
    index: number,
    name: string,
    image: string,
    description: string,
    createdAt: string
}

const RowCategoryItem = ({ id, index, name, image, description, createdAt }: CategoryProps) => {
    return (
        <tr className='border-b border-grey-Grey-2 text-sm'>
            <td className='px-5 py-2 text-grey-Grey-1'>{index}</td>
            <td className='px-5 py-2'>
                <div className='flex items-center gap-2.5'>
                    <Image src={`${URL_SERVER_IMAGE}${image}`} alt='category avatar' className='w-10 h-10 rounded-4 object-cover block' />
                    <p className='capitalize'>{name}</p>
                </div>
            </td>
            <td className='px-5 py-2 text-center text-grey-Grey-1'>10</td>
            <td className='px-5 py-2 text-center text-grey-Grey-1'>{moment(createdAt).format('DD/MM/YYYY')}</td>
            <td className='px-5 py-2 text-end'><div className='flex justify-end'><ButtonStatus isActive /></div></td>
        </tr>
    )
}