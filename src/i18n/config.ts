import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// Common

// Page

export const resources = {
  en: {},
} as const

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
})
