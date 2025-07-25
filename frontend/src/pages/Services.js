import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Link } from "react-router-dom";
import { servicesData } from "../data/mockData";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nossos 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Serviços
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em construção civil, reformas e projetos arquitetônicos 
              com qualidade, segurança e inovação em cada detalhe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-full">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{service.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {service.title}
                          </h3>
                          <p className="text-orange-600 font-semibold">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold"
                    >
                      <Link to="/contato">Solicitar Orçamento</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Por Que Escolher a 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Fraga Construções?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Qualidade Garantida",
                description: "Materiais premium e mão de obra especializada em todos os projetos"
              },
              {
                icon: "⏰",
                title: "Prazo Cumprido",
                description: "Cronograma rigoroso e entregas sempre no prazo acordado"
              },
              {
                icon: "💡",
                title: "Inovação",
                description: "Técnicas modernas e tecnologia de ponta na construção"
              },
              {
                icon: "🏆",
                title: "Experiência",
                description: "Mais de 20 anos no mercado com centenas de projetos realizados"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e receba uma proposta personalizada para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/projetos">Ver Projetos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;