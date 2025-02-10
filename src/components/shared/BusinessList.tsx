import React from 'react'

interface BusinessListProps {
    title: string;
    href: string;
    description?: string;
};

export const BusinessList = ():BusinessListProps[] => [
    {
        title: 'business1',
        href: "/business/automotive",
        description: 'businessdes1',
    },
    {
        title: 'business2',
        href: "/business/speaker",
        description: 'businessdes2',
    },
    {
        title: 'business3',
        href: "/business/camera",
        description: 'businessdes3',
    },
    {
        title: 'business4',
        href: "/business/semiconductor",
        description: 'businessdes4',
    },
    {
        title: 'business5',
        href: "/business/electronic",
        description: 'businessdes5',
    },
    {
        title: 'business6',
        href: "/business/medical",
        description: 'businessdes6',
    },
    {
        title: 'business7',
        href: "/business/battery",
        description: 'businessdes7',
    },
    {
        title: 'business8',
        href: "/business/construction",
        description: 'businessdes8',
    },
]


