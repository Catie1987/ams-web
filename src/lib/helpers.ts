
import { Cover, MetaDataData, MetaDataOptions } from './types';

export const formatDate = (inputDate: string) => {
  if (!inputDate) {
    return '';
  }
  const date = new Date(inputDate);
  const monthAbbreviations = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  const month = monthAbbreviations[date.getMonth()];
  const year = date.getFullYear().toString().slice(2);
  return `${month}/${year}`;
};

export const formatDateDay = (inputDate: string) => {
  if (!inputDate) {
    return '';
  }
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const monthAbbreviations = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  const month = monthAbbreviations[date.getMonth()];
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};


export const formatRatio = (fractionString: string | undefined) => {
  if (!fractionString) {
    return 16 / 9;
  }
  const [numerator, denominator] = fractionString.split('/');

  const decimalValue = parseInt(numerator) / parseInt(denominator);

  return decimalValue;
};

export const createMetaDataObject = (
  data: MetaDataData,
  options: MetaDataOptions
) => {
  const {title, description, slug } = data;
  const {type, path = ""} = options || {};
  return {
    title: `${title} | AMS VIETNAM`,
    description,
    openGraph: {
      title,
      type,
      url: `${process.env.NEXT_PUBLIC_URL}${path}${slug && '/'}${slug}`,
    },
    twitter: {
      card: 'summary',
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_URL}${path}${slug && '/'}${slug}`,
    },
  };
};


export default function slugify(text: string) {
  const convertedText = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  return convertedText;
}
