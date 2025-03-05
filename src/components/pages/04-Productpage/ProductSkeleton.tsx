import React from 'react'
import { Skeleton } from '../../../components/ui/skeleton'
import { Separator } from '../../../components/ui/separator';


export default function ProductSkeleton() {
    const array = new Array(1).fill(null);
  return (
    <>
    {array.map((_, i) => (
    <div className='list-none py-4' key={i}>
       <div className='px-2 relative flex flex-row gap-4 overflow-hidden h-full'>
          <Skeleton className='px-0 md:px-2 h-full w-full basis-1/3 relative bg-zinc-300'>
          </Skeleton>
          <div className='basis-2/3 h-full flex flex-col w-full justify-between gap-4'>
            <Skeleton className='bg-zinc-400 h-10 w-[80%]'></Skeleton>
            <ul className='text-sm sm:text-base capitalize flex flex-col gap-2'>
              <li className='flex items-center justify-between flex-wrap gap-2'>
                <Skeleton className='w-[20%] h-7'></Skeleton>
                <Skeleton className='w-[20%] h-7'></Skeleton>
              </li>
              <Skeleton className='w-[40%] h-7 mt-1'></Skeleton>
              <Skeleton className='w-[40%] h-7 mt-1'></Skeleton>
              <Skeleton className='w-[40%] h-7 mt-1'></Skeleton>
              
            </ul>
            <Skeleton className='h-10 w-[40%] bg-[--cta3] rounded-full' >
            </Skeleton>
          </div>
       </div>
       <Separator className='my-4'/>
    </div>
    ))}
    </>
  )
}
