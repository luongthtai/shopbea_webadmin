import { IBrandItem } from '@/models/brans.model'
import { URL_SERVER_IMAGE } from '@/utils/api'
import moment from 'moment'
import Image from 'next/image'
import ButtonStatus from '../elements/ButtonStatus'

type Props = {
    brands: Array<IBrandItem>
}

export default function BrandsTable({ brands }: Props) {
    return (
        <table className='w-full text-black-Black-1'>
            <thead>
                <tr className='bg-grey-Grey-4 text-start'>
                    <th className='font-medium text-[13px] px-5 py-2 w-[200px] text-start'>Brand ID</th>
                    <th className='font-medium text-[13px] px-5 py-2 text-start'>Brand Name</th>
                    <th className='font-medium text-[13px] px-5 py-2'>Description</th>
                    <th className='font-medium text-[13px] px-5 py-2 w-[200px]'>Operational Hour</th>
                    <th className='font-medium text-[13px] px-5 py-2 w-[150px]'>Rating</th>
                    <th className='font-medium text-[13px] px-5 py-2 w-[150px]'>Create At</th>
                    <th className='font-medium text-[13px] px-5 py-2 text-end w-[200px]'>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    brands.map((item, index) => <RowBrandItem
                        key={item._id}
                        id={item._id}
                        index={index + 1}
                        name={item.name}
                        image={item.avatar}
                        description={item.brand_description}
                        rating={item.rating}
                        createdAt={item.createdAt}
                        timeStart={item.start_time}
                        timeEnd={item.end_time}
                        isActive={item.isActive}
                    />)
                }
            </tbody>
        </table>)
}

type BrandProps = {
    id: string,
    index: number,
    name: string,
    image: string,
    description: string,
    rating: string,
    timeStart: string,
    timeEnd: string,
    createdAt: string,
    isActive: boolean
}

const RowBrandItem = ({ id, index, name, image, description, rating, timeStart, timeEnd, createdAt, isActive }: BrandProps) => {
    return (
        <tr className='border-b border-grey-Grey-2 text-sm'>
            <td className='px-5 py-2 text-grey-Grey-1'>{index}</td>
            <td className='px-5 py-2'>
                <div className='flex items-center gap-2.5'>
                    <Image src={`${URL_SERVER_IMAGE}${image}`} alt='category avatar' width={40} height={40} className='w-10 h-10 rounded-4 object-cover block' />
                    <p className='capitalize'>{name}</p>
                </div>
            </td>
            <td className='px-5 py-2 text-center text-grey-Grey-1'>{description}</td>
            <td className='px-5 py-2 text-center text-grey-Grey-1'>{timeStart} - {timeEnd}</td>
            <td className='px-5 py-2 text-center text-grey-Grey-1'>{rating}</td>
            <td className='px-5 py-2 text-center text-grey-Grey-1'>{moment(createdAt).format('DD/MM/YYYY')}</td>
            <td className='px-5 py-2 text-end'><div className='flex justify-end'><ButtonStatus isActive={isActive} /></div></td>
        </tr>
    )
}
