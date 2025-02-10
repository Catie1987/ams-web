"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
    image: StaticImageData;
    text: string;
}

const CustomerCard: React.FC<CardProps> = ({image, text}) => {
    const [showText, setShowText] = useState(false);
    return (
        <motion.div
        onHoverStart={() =>setShowText(true)}
        onHoverEnd={()=>setShowText(false)} 
        className='w-fit relative flex justify-center group'>
            <div className='h-32 min-w-40 sm:min-w-56 flex justify-center items-center relative'>
                <Image src={image} alt={text} width={400} height={200} 
                className='object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300'/>
            </div>
            {showText && (
                <motion.div
                initial={{
                    opacity:0,
                    y:-20,
                    scale: 0.5
                }}
                animate={{
                    opacity:1,
                    y:0,
                    scale: 1
                }}
                exit={{
                    opacity:0,
                    y:-20
                }}
                transition={{
                    duration: 0.3,
                    stiffness: 1
                }}
                className='absolute -bottom-6 bg-[--cta2] rounded-full py-1 px-3 shadow-lg'>
                    <p className='text-white text-sm font-light'>{text}</p>
                </motion.div>
            )}
        </motion.div>
    )
}

export default CustomerCard;
