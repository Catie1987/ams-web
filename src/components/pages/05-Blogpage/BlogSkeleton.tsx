"use client"
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface BlogSkeletonProps { count: number; }

export default function BlogSkeleton({count} : BlogSkeletonProps) {
    const array = new Array(count).fill(null);
    const useMobile = useIsMobile();
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 w-full">
    {array.map((_, i) => (
    <div className='md:hover:-translate-y-2 md:transition-all md:duration-300 md:hover:shadow-lg relative flex flex-row md:flex-col justify-between aspect-auto md:aspect-[9/8] lg:aspect-[4/3] w-full overflow-hidden rounded-none md:rounded-2xl md:border' key={i}>
       <div className='overflow-hidden h-[50%] md:h-full flex w-1/3 md:rounded-none rounded-lg md:w-full items-start max-md:mt-1'>     
            <Skeleton className='w-full h-full bg-zinc-200 scale-105'>
            </Skeleton>   
        </div>
        <div className="relative z-10 md:max-h-48 h-auto w-full md:px-4 md:py-4 px-5 py-2 flex flex-col md:justify-between bg-transparent md:bg-white">
            <Skeleton className='bg-zinc-400 h-6 md:h-8 w-[95%] mb-1 md:mb-2'></Skeleton>
            <Skeleton className='bg-zinc-400 h-6 md:h-8 w-[70%]'></Skeleton>
            <div className='mt-3 flex flex-wrap gap-2 mb-4'>
                <Skeleton className='bg-zinc-200 rounded-full h-7 w-20'></Skeleton>
                <Skeleton className='bg-zinc-200 rounded-full h-7 w-28'></Skeleton>
            </div>
            <Skeleton className='bg-zinc-300 h-4 md:h-5 w-full mb-1 rounded-sm'></Skeleton>
            <Skeleton className='bg-zinc-300 h-4 md:h-5 w-full rounded-sm'></Skeleton>
            { useMobile && (<Skeleton className='bg-zinc-400 h-6 w-[50%] rounded-sm mt-3'></Skeleton>)}
        </div>
    </div>
    
    ))}
    { useMobile && (<Separator/>)}
    </div>
  )
}
