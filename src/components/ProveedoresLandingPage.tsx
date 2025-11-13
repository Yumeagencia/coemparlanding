import React, { useState, useEffect } from 'react';
import { Package, ShoppingBag, Briefcase, Truck, Building2, Target, Palette, Sparkles, ArrowRight, Menu, X } from 'lucide-react';
import { trackInitiateCheckout } from '../utils/metaPixel';

interface ProveedoresLandingPageProps {
  onBack: () => void;
  onGuiaClick?: () => void;
}

const ProveedoresLandingPage: React.FC<ProveedoresLandingPageProps> = ({ onBack, onGuiaClick }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 z-10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
              <img
                src="/3.png"
                alt="Logo"
                className="h-10 w-auto cursor-pointer"
                onClick={onBack}
              />
            </div>

            <div className="hidden md:flex items-center space-x-8 mx-auto">
              <button
                onClick={onGuiaClick}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Guía de Emprendimiento
              </button>
              <button
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Lista de Proveedores
              </button>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Contacto
              </button>
            </div>

            <div className="md:hidden w-10"></div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-800">
              <button
                onClick={() => {
                  onGuiaClick?.();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium py-2"
              >
                Guía de Emprendimiento
              </button>
              <button
                className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium py-2"
              >
                Lista de Proveedores
              </button>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium py-2"
              >
                Contacto
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="flex justify-center">
              <img
                src="/proveedores.png"
                alt="Lista de Proveedores Paraguay"
                className="w-full max-w-md"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Lista Exclusiva de Proveedores
                </h3>
                <p className="text-sm text-gray-400">Acceso a más de 350 proveedores verificados</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-xl text-gray-200 font-semibold">
                    +350 Proveedores verificados en China, Brasil y CDE
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-xl text-gray-200 font-semibold">
                    +10.000 Productos distintos disponibles
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-xl text-gray-200 font-semibold">
                    15+ Aliados comerciales para desarrollo empresarial
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Accede a una red completa de proveedores confiables y aliados comerciales que te ayudarán a hacer crecer tu negocio de manera efectiva y rentable.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="https://docs.google.com/spreadsheets/d/1MoIyAhLzWRq9SDjN84cMYB0nq2O6yYh-pQHzltKpyYw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Probar Demo Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contenido de la Lista de Proveedores
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Acceso exclusivo a una red completa de proveedores verificados y aliados comerciales para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Package className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">+350</div>
              <div className="text-green-100 font-medium">Proveedores Verificados</div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <ShoppingBag className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">+10.000</div>
              <div className="text-blue-100 font-medium">Productos Distintos</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Briefcase className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-purple-100 font-medium">Aliados Comerciales</div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Aliados Comerciales</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-all group">
                <Truck className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-semibold text-sm">Transportadoras</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-green-500 transition-all group">
                <Building2 className="w-8 h-8 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-semibold text-sm">Importadoras</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all group">
                <Target className="w-8 h-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-semibold text-sm">Agencias de Marketing</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-pink-500 transition-all group">
                <Palette className="w-8 h-8 text-pink-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-semibold text-sm">Gráficas</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-yellow-500 transition-all group">
                <Sparkles className="w-8 h-8 text-yellow-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-semibold text-sm">Papelerías y más</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Categorías de Productos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Electrónicos', items: 'Parlantes, auriculares, celulares, tablets, notebooks, radios, micrófonos' },
                { name: 'Tecnología', items: 'Accesorios tech, cargadores, cables, power banks' },
                { name: 'Audio', items: 'Equipos de sonido, parlantes Bluetooth, audífonos' },
                { name: 'Informática', items: 'Laptops, teclados, mouse, monitores, webcams' },
                { name: 'Bazar', items: 'Artículos para el hogar y decoración' },
                { name: 'Mochilas y Bolsos', items: 'Todo tipo de bolsos, mochilas, carteras' },
                { name: 'Perfumería', items: 'Perfumes, fragancias, colonias' },
                { name: 'Iluminación', items: 'Lámparas, luces LED, luminarias' },
                { name: 'Papelería', items: 'Útiles escolares, oficina, cuadernos' },
                { name: 'Juguetería', items: 'Juguetes, juegos, artículos infantiles' },
                { name: 'Maquillaje', items: 'Todo tipo de maquillaje profesional' },
                { name: 'Cosméticos', items: 'Cuidado personal, cremas, tratamientos' }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-green-500 transition-all duration-300 group hover:shadow-xl"
                >
                  <h4 className="text-white font-bold mb-2 group-hover:text-green-400 transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {category.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://docs.google.com/spreadsheets/d/1MoIyAhLzWRq9SDjN84cMYB0nq2O6yYh-pQHzltKpyYw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Ver Demo de la Lista
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="pricing-section" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accede a la Lista de Proveedores
            </h2>
            <p className="text-gray-400 text-lg">
              Acceso de por vida. Actualizaciones periódicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Lista de Proveedores</h3>
              <p className="text-gray-400 mb-6">
                Accede a más de 350 proveedores verificados en China, Brasil, CDE y aliados comerciales.
              </p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">199.000gs</div>
                <p className="text-gray-500 text-sm">Pago único</p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://docs.google.com/spreadsheets/d/1MoIyAhLzWRq9SDjN84cMYB0nq2O6yYh-pQHzltKpyYw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-gray-400 hover:text-green-400 underline text-sm mb-2"
                >
                  Demo de la lista
                </a>
                <a
                  href="https://pago.pagopar.com/74nui"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInitiateCheckout(199000, 'PYG', 'Lista de Proveedores')}
                  className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Comprar con Tarjeta
                </a>
                <a
                  href="https://wa.me/595973327969?text=Hola!%20Quiero%20comprar%20la%20Lista%20de%20Proveedores..."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInitiateCheckout(199000, 'PYG', 'Lista de Proveedores')}
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Comprar con Transferencia
                </a>
              </div>
              <a
                href="https://wa.me/595973327969?text=Tengo%20dudas%20sobre%20la%20Lista%20de%20Proveedores"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-gray-400 hover:text-white mt-4 underline text-sm"
              >
                ¿Dudas? Contáctanos
              </a>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 relative golden-border md:transform md:hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                MEJOR OFERTA
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Guía + Proveedores</h3>
              <p className="text-gray-400 mb-6">
                Obtén acceso completo a la guía de emprendimiento y la lista de proveedores.
              </p>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                  <span className="text-2xl text-gray-500 line-through">388.000gs</span>
                  <span className="text-4xl font-bold text-white">299.000gs</span>
                </div>
                <p className="text-yellow-400 text-sm font-semibold">Ahorra 89.000gs (23% OFF)</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-center gap-4 mb-2 flex-wrap">
                  <a
                    href="/demo"
                    className="text-gray-400 hover:text-yellow-400 underline text-sm"
                  >
                    Demo de la guía
                  </a>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1MoIyAhLzWRq9SDjN84cMYB0nq2O6yYh-pQHzltKpyYw/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 underline text-sm"
                  >
                    Demo de la lista
                  </a>
                </div>
                <a
                  href="https://pago.pagopar.com/6zpqu"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInitiateCheckout(299000, 'PYG', 'Bundle - Guía + Proveedores')}
                  className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Comprar con Tarjeta
                </a>
                <a
                  href="https://wa.me/595973327969?text=Hola!%20Me%20interesa%20adquirir%20la%20gu%C3%ADa%20de%20emprendimiento%20y%20la%20lista%20de%20proveedores%20en%20combo..."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInitiateCheckout(299000, 'PYG', 'Bundle - Guía + Proveedores')}
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Comprar con Transferencia
                </a>
              </div>
              <a
                href="https://wa.me/595973327969?text=Tengo%20dudas%20sobre%20el%20combo%20de%20Gu%C3%ADa%20%2B%20Proveedores"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-gray-400 hover:text-white mt-4 underline text-sm"
              >
                ¿Dudas? Contáctanos
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes golden-shine {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }

          .golden-border {
            position: relative;
            border: 3px solid transparent;
            background-clip: padding-box;
          }

          .golden-border::before {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: 1rem;
            padding: 3px;
            background: linear-gradient(
              90deg,
              #d4af37 0%,
              #ffd700 25%,
              #ffed4e 50%,
              #ffd700 75%,
              #d4af37 100%
            );
            background-size: 200% 100%;
            animation: golden-shine 3s linear infinite;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: -1;
          }
        `}</style>
      </section>

      <section id="contact-section" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ¿Tienes Dudas?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Háblame directamente por WhatsApp para ayudarte a saber si esta lista es para ti
          </p>

          <a
            href="https://wa.me/595973327969?text=Hola! Tengo dudas sobre la lista de proveedores"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 hover:bg-green-600 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
          >
            <div className="flex items-center justify-center">
              <div className="text-left">
                <span className="text-white font-bold text-lg block">Contactar por WhatsApp</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProveedoresLandingPage;
