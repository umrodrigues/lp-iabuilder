'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle, Star, Award, Brain, Target } from 'lucide-react'
import { sendWhatsAppMessage } from '@/utils/whatsapp'
import { SITE_CONFIG, COURSE_INFO } from '@/constants'

export default function CourseDetailsSection() {
  const modules = [
    {
      title: "Fundamentos da IA",
      description: "Entenda como a IA funciona e suas aplicações no mundo empresarial",
      duration: "30 min"
    },
    {
      title: "Criação de Prompts Eficazes",
      description: "Domine a arte de criar prompts que geram resultados incríveis",
      duration: "45 min"
    },
    {
      title: "Implementação Prática",
      description: "Veja casos reais e aprenda a implementar IA na sua empresa",
      duration: "30 min"
    },
    {
      title: "Q&A e Networking",
      description: "Tire suas dúvidas e conecte-se com outros empresários",
      duration: "15 min"
    }
  ]

  const features = [
    {
      icon: Brain,
      title: "Conteúdo Prático",
      description: "100% focado em aplicações reais para seu negócio"
    },
    {
      icon: Target,
      title: "Resultados Imediatos",
      description: "Aplique o que aprender no mesmo dia"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Conecte-se com outros empresários inovadores"
    }
  ]

  return (
    <section id="curso" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Detalhes do Curso
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Um curso intensivo e prático para empresários que querem dominar a IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Informações do Evento</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Data</h4>
                  <p className="text-gray-600">Quinta-feira, 18 de Setembro</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horário</h4>
                  <p className="text-gray-600">19:30 às 21:30 (Brasília)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Formato</h4>
                  <p className="text-gray-600">Online ao vivo + Gravação</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">O que você vai aprender</h3>
            
            <div className="space-y-4">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{module.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{module.description}</p>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {module.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Star className="w-10 h-10" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Garantia de Satisfação
            </h3>
            
            <p className="text-xl mb-8 opacity-90">
              Investimento: <span className="line-through opacity-60">R$ {SITE_CONFIG.price.original}</span> 
              <span className="text-3xl font-bold ml-2 text-yellow-300">R$ {SITE_CONFIG.price.current}</span>
            </p>
            <p className="text-lg mb-8 opacity-90">
              Se você não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento. 
              Mas sabemos que você vai amar!
            </p>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendWhatsAppMessage()}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Garantir Minha Vaga
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
