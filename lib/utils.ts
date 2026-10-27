import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string, international = false): string {
  if (international) {
    return phone.startsWith('+') ? phone : `+234${phone.slice(1)}`
  }
  return phone
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const formattedPhone = formatPhone(phone, true).replace(/\+/g, '')
  const baseUrl = `https://wa.me/${formattedPhone}`
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl
}
