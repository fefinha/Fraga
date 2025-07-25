import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-blue-900 px-4 py-2 rounded-full" style={{backgroundColor: '#374781'}}>
                <span className="text-3xl font-bold italic text-yellow-400" style={{color: '#FFF200', fontFamily: 'serif'}}>
                  fraga
                </span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Fraga Construções
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors hover:text-yellow-500 ${
                isActive("/") ? "text-yellow-500" : "text-gray-700"
              }`}
              style={{
                color: isActive("/") ? "#FFF200" : "#374781"
              }}
            >
              Home
            </Link>
            <Link
              to="/servicos"
              className={`text-lg font-medium transition-colors hover:text-yellow-500 ${
                isActive("/servicos") ? "text-yellow-500" : "text-gray-700"
              }`}
              style={{
                color: isActive("/servicos") ? "#FFF200" : "#374781"
              }}
            >
              Serviços
            </Link>
            <Link
              to="/projetos"
              className={`text-lg font-medium transition-colors hover:text-yellow-500 ${
                isActive("/projetos") ? "text-yellow-500" : "text-gray-700"
              }`}
              style={{
                color: isActive("/projetos") ? "#FFF200" : "#374781"
              }}
            >
              Projetos
            </Link>
            <Link
              to="/sobre"
              className={`text-lg font-medium transition-colors hover:text-yellow-500 ${
                isActive("/sobre") ? "text-yellow-500" : "text-gray-700"
              }`}
              style={{
                color: isActive("/sobre") ? "#FFF200" : "#374781"
              }}
            >
              Sobre Nós
            </Link>
            <Link
              to="/contato"
              className={`text-lg font-medium transition-colors hover:text-yellow-500 ${
                isActive("/contato") ? "text-yellow-500" : "text-gray-700"
              }`}
              style={{
                color: isActive("/contato") ? "#FFF200" : "#374781"
              }}
            >
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button 
              asChild
              className="text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`,
                border: 'none'
              }}
            >
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
              style={{color: '#374781'}}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-lg font-medium transition-colors`}
                style={{
                  color: isActive("/") ? "#FFF200" : "#374781"
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/servicos"
                className={`text-lg font-medium transition-colors`}
                style={{
                  color: isActive("/servicos") ? "#FFF200" : "#374781"
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                to="/projetos"
                className={`text-lg font-medium transition-colors`}
                style={{
                  color: isActive("/projetos") ? "#FFF200" : "#374781"
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link
                to="/sobre"
                className={`text-lg font-medium transition-colors`}
                style={{
                  color: isActive("/sobre") ? "#FFF200" : "#374781"
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                to="/contato"
                className={`text-lg font-medium transition-colors`}
                style={{
                  color: isActive("/contato") ? "#FFF200" : "#374781"
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button 
                asChild
                className="text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 w-fit"
                style={{
                  background: `linear-gradient(135deg, #374781 0%, #FFF200 100%)`,
                  border: 'none'
                }}
              >
                <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;