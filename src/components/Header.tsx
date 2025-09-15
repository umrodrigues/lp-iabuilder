'use client'

import { motion } from 'framer-motion'
import { Brain, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { sendWhatsAppMessage } from '@/utils/whatsapp'
import { SITE_CONFIG } from '@/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
              <span className="sm:hidden">{SITE_CONFIG.shortName}</span>
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            <a href="#curso" className="text-gray-700 hover:text-purple-600 transition-colors">
              Curso
            </a>
            <a href="#beneficios" className="text-gray-700 hover:text-purple-600 transition-colors">
              Benefícios
            </a>
            <a href="#ebook" className="text-gray-700 hover:text-purple-600 transition-colors">
              E-book
            </a>
            <a href="#inscricao" className="text-gray-700 hover:text-purple-600 transition-colors">
              Inscrição
            </a>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => sendWhatsAppMessage()}
            className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Garantir Vaga
          </motion.button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#curso" className="text-gray-700 hover:text-purple-600 transition-colors">
                Curso
              </a>
              <a href="#beneficios" className="text-gray-700 hover:text-purple-600 transition-colors">
                Benefícios
              </a>
              <a href="#ebook" className="text-gray-700 hover:text-purple-600 transition-colors">
                E-book
              </a>
              <a href="#inscricao" className="text-gray-700 hover:text-purple-600 transition-colors">
                Inscrição
              </a>
              <button 
                onClick={() => sendWhatsAppMessage()}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold w-full"
              >
                Garantir Vaga
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
