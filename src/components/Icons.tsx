import vn from '/public/flag/vn.svg';
import en from '/public/flag/us.svg';
import globe from '/public/globe.svg';
import errline from '/public/ams-line-dark.svg';
import err from '/public/404.svg';
import arrowRightWhite from '/public/icons/arrow-right-white.svg';
import arrowLeftBlack from '/public/icons/arrow-left-black.svg';
import arrowRightBlack from '/public/icons/arrow-right-black.svg';
import arrowRightBold from '/public/icons/arrow-right-bold.svg';
import Image from 'next/image';

export const Icons = {
    vnflag: ({}) => {
        return(
            <Image alt='vn' src={vn} width={18} height={16}/>
        )
    },
    enflag: ({}) => {
        return(
            <Image alt='en' src={en} width={18} height={16}/>
        )
    },
    globe: ({}) => {
        return(
            <Image alt='globe' src={globe} width={16} height={16}/>
        )
    },
    errline: ({}) => {
        return(
            <Image alt='err' className='opacity-30' src={errline} width={800} height={600}/>
        )
    },
    err: ({}) => {
        return(
            <Image alt='err' src={err} width={434} height={194}/>
        )
    },
    arrowRightWhite: ({}) => {
        return(
            <Image alt='arrow' src={arrowRightWhite} width={50} height={20}/>
        )
    },
    arrowRightBlack: ({}) => {
        return(
            <Image alt='arrow' src={arrowRightBlack} width={50} height={20}/>
        )
    },
    arrowLeftBlack: ({}) => {
        return(
            <Image alt='arrow' src={arrowLeftBlack} width={50} height={20}/>
        )
    },
    arrowRightBold: ({}) => {
        return(
            <Image alt='arrow' src={arrowRightBold} width={20} height={20}/>
        )
    },
}