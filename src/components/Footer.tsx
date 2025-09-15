'use client'

import { motion } from 'framer-motion'
import { Brain, MessageCircle } from 'lucide-react'
import { sendWhatsAppMessage } from '@/utils/whatsapp'
import { SITE_CONFIG } from '@/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold">{SITE_CONFIG.name}</span>
          </div>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Transforme sua empresa com inteligência artificial. 
            Aprenda as melhores práticas e ferramentas para implementar IA no seu negócio.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => sendWhatsAppMessage()}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Falar no WhatsApp
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 mb-2">
            © 2024 {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Desenvolvido por{' '}
            <a 
              href="https://www.lunaristech.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Lunaris Tech
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
