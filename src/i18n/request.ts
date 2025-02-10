import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  let messages; 
  try { 
    messages = (await import(`../../messages/${locale}.json`)).default; 
  } catch (error) { 
    // Fallback to English if the locale messages are missing 
    console.warn(`Messages for locale ${locale} are missing, falling back to English`); 
    messages = (await import(`../../messages/en.json`)).default; 
  } return { 
    locale, 
    messages 
  };
});