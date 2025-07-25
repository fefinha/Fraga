import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Link } from "react-router-dom";
import { teamData, certificationsData } from "../data/mockData";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Sobre a 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Fraga Construções
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Há mais de 20 anos construindo sonhos e transformando espaços com qualidade, 
                inovação e compromisso com a excelência. Nossa história é feita de projetos 
                únicos e clientes satisfeitos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/contato">Fale Conosco</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/projetos">Ver Projetos</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1694521787193-9293daeddbaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzfGVufDB8fHx8MTc1MzQ1MzI5OXww&ixlib=rb-4.1.0&q=85"
                alt="Fraga Construções"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1638519922476-50688bb1f318?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTM0NTMzMTB8MA&ixlib=rb-4.1.0&q=85"
                alt="Nossa História"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nossa
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  História
                </span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Fundada em 2004 pelo engenheiro Carlos Fraga, a Fraga Construções nasceu do 
                  sonho de transformar projetos em realidade, sempre priorizando a qualidade 
                  e a satisfação do cliente.
                </p>
                <p className="text-lg">
                  Ao longo dos anos, crescemos e nos especializamos em diversos segmentos da 
                  construção civil, desde residências familiares até grandes empreendimentos 
                  comerciais e industriais.
                </p>
                <p className="text-lg">
                  Hoje somos uma das principais construtoras da região, reconhecida pela 
                  excelência técnica, inovação e compromisso com prazos e orçamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Pilares
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600">
                Construir com excelência, transformando sonhos em realidade através de 
                soluções inovadoras, qualidade superior e atendimento personalizado.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a principal referência em construção civil na região, 
                pela qualidade, inovação e sustentabilidade de nossos projetos.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600">
                Integridade, qualidade, inovação, sustentabilidade, responsabilidade social 
                e comprometimento com a satisfação total do cliente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossa Equipe de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Especialistas
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais altamente qualificados e experientes que garantem a excelência 
              em cada projeto executado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamData.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.experience}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Engenheiros" },
              { number: "8+", label: "Arquitetos" },
              { number: "50+", label: "Técnicos" },
              { number: "100+", label: "Operários" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Certificações e
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Qualificações
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Possuímos as principais certificações do mercado que garantem a qualidade 
              e confiabilidade dos nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationsData.map((cert) => (
              <Card key={cert.id} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                <p className="text-orange-600 font-semibold text-sm">{cert.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos Construir Juntos?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como nossa experiência e dedicação 
            podem transformar seu projeto em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/contato">Fale Conosco</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/servicos">Conheça Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;