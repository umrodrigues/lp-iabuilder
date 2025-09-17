'use client'

import { motion } from 'framer-motion'
import { BookOpen, Zap, Target, TrendingUp, Download, Gift } from 'lucide-react'
import { sendWhatsAppMessage } from '@/utils/whatsapp'
import { SITE_CONFIG } from '@/constants'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: BookOpen,
      title: "E-book Exclusivo",
      description: "Guia completo com estratégias de IA para empresários",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Templates de Prompts",
      description: "Coleção de prompts prontos para usar em qualquer IA",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Casos Práticos",
      description: "Exemplos reais de implementação de IA em empresas",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "ROI Garantido",
      description: "Aprenda a medir e maximizar o retorno do investimento",
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              O que você vai receber
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Além do conhecimento prático, você ganha materiais exclusivos 
            que vão acelerar sua jornada com IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 px-4 sm:px-0">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Gift className="w-10 h-10" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Bônus Exclusivo: E-book + Templates
            </h3>
            
            <p className="text-xl mb-8 opacity-90">
              Valor total: <span className="line-through opacity-60">R$ {SITE_CONFIG.price.original}</span> 
              <span className="text-3xl font-bold ml-2 text-yellow-300">R$ {SITE_CONFIG.price.current}</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <Download className="w-8 h-8 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">E-book Completo</h4>
                <p className="opacity-90">Estratégias práticas para implementar IA</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <Zap className="w-8 h-8 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Templates de Prompts</h4>
                <p className="opacity-90">Coleção pronta para usar</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => sendWhatsAppMessage()}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Garantir por R$ {SITE_CONFIG.price.current}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
