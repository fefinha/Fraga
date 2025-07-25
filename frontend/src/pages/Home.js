import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const Home = () => {
  const services = [
    {
      title: "Construção Civil",
      description: "Construção de casas, prédios e empreendimentos comerciais com alta qualidade e tecnologia.",
      icon: "🏗️"
    },
    {
      title: "Reformas",
      description: "Reformas completas ou parciais para renovar e modernizar seus espaços.",
      icon: "🔧"
    },
    {
      title: "Arquitetura",
      description: "Projetos arquitetônicos personalizados que atendem suas necessidades e sonhos.",
      icon: "📐"
    },
    {
      title: "Engenharia",
      description: "Soluções de engenharia estrutural e consultorias técnicas especializadas.",
      icon: "⚙️"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária Residencial",
      content: "Excelente trabalho! A Fraga Construções transformou nossa casa dos sonhos em realidade. Qualidade impecável e prazo respeitado.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Empresário",
      content: "Contratei para construção do meu galpão comercial. Profissionais competentes e resultado superou minhas expectativas.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Arquiteta",
      content: "Parceria excepcional! Trabalham com precisão e sempre buscam a excelência na execução dos projetos.",
      rating: 5
    }
  ];

  const projects = [
    {
      title: "Edifício Residencial Vista Verde",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1638519922476-50688bb1f318?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTM0NTMzMTB8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Centro Comercial ModernShop",
      category: "Comercial", 
      image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTM0NTMzMTB8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Casa Premium Alphaville",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1693639385915-d7a7ddefe8e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTM0NTMzMTB8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1694521787193-9293daeddbaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzfGVufDB8fHx8MTc1MzQ1MzI5OXww&ixlib=rb-4.1.0&q=85')`
          }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Construindo o
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200" style={{WebkitBackgroundClip: 'text', color: '#FFF200'}}>
                  Futuro
                </span>
                com Você
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Somos especialistas em construção civil, reformas e projetos arquitetônicos. 
                Transformamos sonhos em realidade com qualidade, segurança e inovação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-0"
                  style={{backgroundColor: '#FFF200', color: '#374781'}}
                >
                  <Link to="/contato">Solicitar Orçamento</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  style={{'&:hover': {backgroundColor: 'white', color: '#374781'}}}
                >
                  <Link to="/projetos">Ver Projetos</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-gray-200">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-200">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-200">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Construímos Tudo o Que Você
              <span className="block text-transparent bg-clip-text" style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`, WebkitBackgroundClip: 'text', color: 'transparent'}}>
                Precisa
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em construção civil, desde o planejamento até a entrega final, 
              sempre com foco na qualidade e satisfação do cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0" style={{background: `linear-gradient(135deg, #374781 5%, #FFF200 95%)`}}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-100">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 border-0"
              style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`, color: 'white'}}
            >
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossos Projetos em
              <span className="block text-transparent bg-clip-text" style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`, WebkitBackgroundClip: 'text', color: 'transparent'}}>
                Destaque
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos principais projetos e veja a qualidade e dedicação 
              que colocamos em cada obra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-white px-3 py-1 rounded-full text-sm font-semibold" style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`}}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <Button variant="link" className="p-0 font-semibold" style={{color: '#374781'}}>
                    Ver detalhes →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 border-0"
              style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`, color: 'white'}}
            >
              <Link to="/projetos">Ver Todos os Projetos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nossa Equipe de
                <span className="block text-transparent bg-clip-text" style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`, WebkitBackgroundClip: 'text', color: 'transparent'}}>
                  Especialistas
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contamos com profissionais altamente qualificados, engenheiros, arquitetos e técnicos 
                especializados que garantem a excelência em cada projeto.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold" style={{color: '#374781'}}>15+</div>
                  <div className="text-sm text-gray-600">Engenheiros</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{color: '#374781'}}>8+</div>
                  <div className="text-sm text-gray-600">Arquitetos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{color: '#374781'}}>50+</div>
                  <div className="text-sm text-gray-600">Técnicos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{color: '#374781'}}>100+</div>
                  <div className="text-sm text-gray-600">Operários</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzfGVufDB8fHx8MTc1MzQ1MzI5OXww&ixlib=rb-4.1.0&q=85"
                alt="Nossa Equipe"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg" style={{background: `linear-gradient(135deg, rgba(55, 71, 129, 0.2) 0%, rgba(255, 242, 0, 0.2) 100%)`}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{background: `linear-gradient(135deg, rgba(55, 71, 129, 0.1) 0%, rgba(255, 242, 0, 0.1) 100%)`}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O Que Nossos Clientes
              <span className="block text-transparent bg-clip-text" style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`, WebkitBackgroundClip: 'text', color: 'transparent'}}>
                Falam de Nós
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos 
              de quem já teve a experiência Fraga Construções.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{color: '#FFF200'}}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Começar Seu Projeto?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos transformar 
            seus sonhos em realidade com qualidade e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 border-0"
              style={{backgroundColor: 'white', color: '#374781'}}
            >
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{'&:hover': {backgroundColor: 'white', color: '#374781'}}}
            >
              <Link to="/contato">Falar com Especialista</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;