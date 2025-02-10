import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  alternateLinks: false,
  locales: ['en', 'vn'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      vn: '/gioi-thieu'
    },
    '/about/overview': {
      en: '/about/overview',
      vn: '/gioi-thieu/tong-quan'
    },
    '/about/principle': {
      en: '/about/principle',
      vn: '/gioi-thieu/nguyen-tac'
    },
    '/about/vision': {
      en: '/about/vision',
      vn: '/gioi-thieu/tam-nhin'
    },
    '/about/value': {
      en: '/about/value',
      vn: '/gioi-thieu/gia-tri'
    },
    '/business': {
      en: '/business',
      vn: '/nganh-nghe'
    },
    '/business/automotive': {
      en: '/business/automotive',
      vn: '/nganh-nghe/xe-hoi'
    },
    '/business/speaker': {
      en: '/business/speaker',
      vn: '/nganh-nghe/loa-tai-nghe'
    },
    '/business/camera': {
      en: '/business/camera',
      vn: '/nganh-nghe/mo-dun-camera'
    },
    '/business/semiconductor': {
      en: '/business/semiconductor',
      vn: '/nganh-nghe/chat-ban-dan'
    },
    '/business/electronic': {
      en: '/business/electronic',
      vn: '/nganh-nghe/dien-tu'
    },
    '/business/medical': {
      en: '/business/medical',
      vn: '/nganh-nghe/y-khoa'
    },
    '/business/battery': {
      en: '/business/battery',
      vn: '/nganh-nghe/pin-nang-luong'
    },
    '/business/construction': {
      en: '/business/construction',
      vn: '/nganh-nghe/xay-dung'
    },
    '/product': {
      en: '/product',
      vn: '/san-pham'
    },
    '/product/[id]': {
      en: '/product/[id]',
      vn: '/san-pham/[id]'
    },
    '/product/maker': {
      en: '/product/maker',
      vn: '/san-pham/thuong-hieu'
    },
    '/product/type': {
      en: '/product/type',
      vn: '/san-pham/the-loai'
    },
    '/product/function': {
      en: '/product/function',
      vn: '/san-pham/chuc-nang'
    },
    '/blog': {
      en: '/blog',
      vn: '/bai-viet'
    },
    '/blog/pages': {
      en: 'blog/pages',
      vn: '/bai-viet/trang'
    },
    '/blog/[slug]': { 
      en: '/blog/[slug]', 
      vn: '/bai-viet/[slug]', 
    },
    '/contact': {
      en: '/contact',
      vn: '/lien-he'
    },
    '/legal-compliance': {
      en: '/legal-compliance',
      vn: '/phap-luat-tuan-thu'
    },
    '/job': {
      en: '/job',
      vn: '/ung-tuyen'
    },
    '/site-map': {
      en: '/site-map',
      vn: '/so-do-web'
    },
    '/privacy-statement': {
      en: '/privacy-statement',
      vn: '/chinh-sach-bao-mat'
    },
    '/terms-of-use': {
      en: '/terms-of-use',
      vn: '/dieu-khoan-su-dung'
    },
    '/product/shinetsu-silicone-ke-45': {
      en: '/product/shinetsu-silicone-ke-45',
      vn: '/san-pham/shinetsu-silicone-ke-45'
    },
  }
});


export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);