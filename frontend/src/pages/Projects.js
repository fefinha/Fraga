import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Link } from "react-router-dom";
import { projectsData } from "../data/mockData";

const Projects = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["Todos", "Residencial", "Comercial", "Industrial", "Hospitalar"];
  
  const filteredProjects = filter === "Todos" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="grid grid-cols-2 gap-2">
                  {project.gallery.slice(0, 2).map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`${project.title} - ${idx + 2}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                    project.status === 'Em Andamento' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Área</h4>
                    <p className="text-gray-600">{project.area}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Duração</h4>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Status</h4>
                    <p className="text-gray-600">{project.status}</p>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3">Características Principais</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-3"
              >
                <Link to="/contato">Solicitar Projeto Similar</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nossos 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Projetos
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Conheça nossos principais projetos realizados e veja a qualidade e dedicação 
              que colocamos em cada obra que executamos.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                      project.status === 'Em Andamento' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                    <div>
                      <span className="font-semibold">📍 </span>
                      {project.location}
                    </div>
                    <div>
                      <span className="font-semibold">📏 </span>
                      {project.area}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" className="text-orange-600 p-0 font-semibold">
                      Ver detalhes →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Números que Impressionam
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projetos Concluídos" },
              { number: "20+", label: "Anos de Experiência" },
              { number: "100%", label: "Clientes Satisfeitos" },
              { number: "50+", label: "Prêmios Recebidos" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-orange-100 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seu Projeto Pode Ser o
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Próximo Destaque
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e transforme sua ideia em realidade com a qualidade 
            e experiência da Fraga Construções.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/contato">Iniciar Meu Projeto</Link>
          </Button>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Projects;