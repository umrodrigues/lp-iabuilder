import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/constants'

export const sendWhatsAppMessage = (message: string = '') => {
  const finalMessage = message || WHATSAPP_MESSAGE
  const encodedMessage = encodeURIComponent(finalMessage)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  
  window.open(whatsappUrl, '_blank')
}
