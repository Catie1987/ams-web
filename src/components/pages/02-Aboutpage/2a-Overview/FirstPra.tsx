"use client"
import { useTranslations } from 'next-intl';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Title from '@/components/shared/Title';

export default function FirstPra() {
  const t = useTranslations('OverviewPage')
  const infos = [
    {
      col1: t('r1col1'),
      col2: t('r1col2'),
    },
    {
      col1: t('r2col1'),
      col2: t('r2col2'),
    },
    {
      col1: t('r3col1'),
      col2: t('r3col2'),
    },
    {
      col1: t('r4col1'),
      col2: t('r4col2'),
    },
    {
      col1: t('r5col1'),
      col2: t('r5col2'),
    },
    {
      col1: t('r6col1'),
      col2: t('r6col2'),
    },
    {
      col1: t('r7col1'),
      col2: t('r7col2'),
    },
  ]
  return (
    <div className='w-full'>
      <Table className='w-full mt-10'>
      <TableBody className='cursor-default text-gray-700 relative border'>
        {infos.map((info, index) => (
          <TableRow key={`${info.col1}-${index}`} className='w-full group'>
            {info.col1 && (
              <TableCell className="w-1/4 bg-[--cta2] text-white group-hover:bg-[--cta] py-4">
                <Title className='text-base md:text-lg font-medium'>{info.col1}</Title>
              </TableCell>
            )}
            {info.col2 && (
              <TableCell className="text-base md:text-lg text-gray-800 hover:text-black">
                {info.col2}
              </TableCell>
              )}
          </TableRow>
        ))}
      </TableBody>
      <TableBody className='cursor-default text-gray-700 relative border'>
        <TableRow  className='w-full group'>
          <TableCell className="w-1/4 bg-[--cta2] text-white group-hover:bg-[--cta] text-base md:text-lg py-4">
            <Title className='text-base md:text-lg font-medium'>{t('r8col1')}</Title>
          </TableCell>
          <TableCell className="text-base md:text-lg text-gray-800 hover:text-black">{t.rich('r8col2', {
                div: (chunks) => (
                    <div className='font-bold'>{chunks}</div>
                ),
                ul: (chunks) => (
                  <ul className='font-normal'>{chunks}</ul>
                ),
                li: (chunks) => (
                  <li className='list-disc ml-8 my-1'>{chunks}</li>
                )
              })}</TableCell>
        </TableRow>
      </TableBody>
      </Table>
    </div>
  )
}
