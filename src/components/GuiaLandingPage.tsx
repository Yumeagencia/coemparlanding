import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Target, Palette, Users, Settings, ChevronDown, ChevronUp, Star, TrendingUp, Lightbulb, Rocket, Menu, X } from 'lucide-react';
import { trackInitiateCheckout } from '../utils/metaPixel';

const modules = [
  {
    id: 1,
    title: "Principios del Emprendimiento",
    description: "Fundamentos sólidos para empezar y mantenerse en el camino empresarial, con una mentalidad fuerte y estable.",
    icon: Lightbulb,
    color: "from-blue-500 to-blue-700",
    iconColor: "bg-blue-500",
    contentBgColor: "bg-blue-400/20",
    content: [
      {
        subtitle: "1.1 ¿Qué es realmente un negocio?",
        items: [
          "¿Qué es REALMENTE un emprendimiento?",
          "¿Por qué enfocarse en el dinero y no en la estética?",
          "La diferencia entre emprender por hobby vs. emprender para vivir de ello.",
          "El cliente como núcleo de todo sistema comercial."
        ]
      },
      {
        subtitle: "1.2 Diferencia entre negocios, autoempleos y emprendimientos comunes",
        items: [
          "¿Qué es un autoempleo y por qué no garantiza libertad?",
          "Características de un negocio bien construido.",
          "La importancia de Delegar y en que momento delegar.",
          "Mentalidad de crecimiento vs. Mentalidad de estancamiento."
        ]
      },
      {
        subtitle: "1.3 B2C vs. B2B, productos vs. servicios",
        items: [
          "¿Qué es B2C y qué es B2B?",
          "¿Qué cambia en la comunicación, precios y tiempos según el modelo?",
          "¿Cómo atrapamos la atención de cada tipo de cliente?",
          "Parámetros para elegir el modelo más funcional para vos."
        ]
      },
      {
        subtitle: "1.4 Introducción al 'Buyer Persona'",
        items: [
          "¿Qué es un Buyer Persona y por qué importa?",
          "Qué datos y características debes conocer sí o sí.",
          "Cómo recopilar esa información (aunque no tengas clientes aún).",
          "Error común al definirlo."
        ]
      },
      {
        subtitle: "1.5 Crear una oferta irresistible para tu Buyer Persona",
        items: [
          "Método NOVA."
        ]
      },
      {
        subtitle: "1.6 Niveles de conciencia del Buyer Persona",
        items: [
          "Las 3 etapas de conciencia de un cliente."
        ]
      },
      {
        subtitle: "1.7 Temperatura y sofisticación del público",
        items: [
          "Diferencias entre públicos fríos, tibios y calientes.",
          "Cómo hablarle a cada tipo para generar atención.",
          "Qué es la sofisticación de un mercado.",
          "Cómo destacar cuando todos dicen lo mismo."
        ]
      },
      {
        subtitle: "1.8 Bases legales para emprender en Paraguay",
        items: [
          "No ser contribuyente: beneficios, riesgos y limitaciones.",
          "Empresa Unipersonal vs. EAS.",
          "Requisitos, costos aproximados y pasos para legalizarse."
        ]
      },
      {
        subtitle: "1.9 Introducción al sistema de trabajo y administración",
        items: [
          "Qué es un sistema de trabajo y cómo organizar uno."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Branding e Imagen del Negocio",
    description: "Crear una Imagen que venda, no quemarse la cabeza con ideas y pasar a la ejecución de manera eficiente.",
    icon: Palette,
    color: "from-purple-500 to-purple-700",
    iconColor: "bg-purple-500",
    contentBgColor: "bg-purple-400/20",
    content: [
      {
        subtitle: "2.1 ¿Qué es el Branding y por qué es importante?",
        items: [
          "Diferencia entre manual de marca e identidad.",
          "¿Qué siente el cliente cuando ve tu negocio?",
          "Por qué el alcance influye más que el producto."
        ]
      },
      {
        subtitle: "2.2 Elementos fundamentales del Branding",
        items: [
          "Cómo elegir el nombre correcto."
        ]
      },
      {
        subtitle: "2.3 Diferenciación visual en un mercado saturado",
        items: [
          "Branding emocional: conectar con valores y causas."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Embudo de Ventas",
    description: "Optimizar el Camino del cliente desde el primer contacto hasta la venta y la fidelización.",
    icon: TrendingUp,
    color: "from-pink-500 to-pink-700",
    iconColor: "bg-pink-500",
    contentBgColor: "bg-pink-400/20",
    content: [
      {
        subtitle: "3.1 ¿Qué es un embudo de ventas y para qué sirve?",
        items: [
          "Qué es un embudo y cómo se aplica a cualquier negocio.",
          "Mensaje de Venta para cada fase del embudo.",
          "Por qué vender sin embudo es como tirar volantes al viento.",
          "Etapas clave: Atracción, Interés, Interacción, Venta y Fidelización."
        ]
      },
      {
        subtitle: "3.2 Etapa de Captación",
        items: [
          "Captación orgánica vs. captación paga: diferencias y combinaciones efectivas.",
          "La importancia del primer impacto: ganchos reales, mensajes de venta y llamados a la acción.",
          "Cómo definir objetivos claros para tus anuncios o publicaciones."
        ]
      },
      {
        subtitle: "3.3 – Etapa de Interés",
        items: [
          "El sentimiento humano más fuerte. El sentido de pertenencia.",
          "Creación de comunidad cómo pilar de la conexión con el cliente.",
          "Estrategias de generación de comunidad e interacción."
        ]
      },
      {
        subtitle: "3.4 – Etapa de Interacción",
        items: [
          "Cómo responder mensajes de forma profesional.",
          "Los detalles qué más importan: tiempo de respuesta, claridad, tono.",
          "Cómo mantener conversaciones con intención de venta sin presionar."
        ]
      },
      {
        subtitle: "3.5 – Etapa de Fidelización",
        items: [
          "Tipos de fidelización según el Ticket",
          "Fidelización de ventas con CLV corto.",
          "Fidelización de ventas con CLV largo."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Meta ADS",
    description: "Campañas publicitarias que venden y pueden ser escaladas.",
    icon: Target,
    color: "from-green-500 to-green-700",
    iconColor: "bg-green-500",
    contentBgColor: "bg-green-400/20",
    content: [
      {
        subtitle: "4.1 ¿Qué es Meta ADS?",
        items: [
          "¿Qué es Meta ADS y para qué sirve?",
          "¿Cómo se usa Meta ADS?",
          "¿Cómo está compuesta una campaña de Anuncios?",
          "¿Cuánto cuesta una publicidad y cómo se cobra?",
          "¿Cómo se si me conviene pagar pautas publicitarias?"
        ]
      },
      {
        subtitle: "4.1 Campañas: Cual elegir según el objetivo",
        items: [
          "Tipos de Objetivos"
        ]
      },
      {
        subtitle: "4.2 Públicos: Segmentación e intención",
        items: [
          "¿Qué es una segmentación?",
          "¿Qué tipos de segmentación podemos usar en Meta ADS?"
        ]
      },
      {
        subtitle: "4.3 Creativos: Qué mostrar y cómo decirlo",
        items: [
          "Tipos de Creativos: Fotos vs Videos… ¿O Ambos?",
          "El Copy de un video, pero primero… ¿Qué es un Copy?"
        ]
      },
      {
        subtitle: "4.4 Destinos y Píxel: Dónde llevamos al usuario",
        items: [
          "¿Qué es un destino?",
          "Landing Page vs Ecommerce",
          "Página Web vs Mensajería"
        ]
      },
      {
        subtitle: "4.5 Estrategias de Test: ¿Qué es un Test?",
        items: [
          "¿Cómo se hace un Test?",
          "Como definir un presupuesto para una estrategia de Test.",
          "Como prepararse para una fase de Test: Horarios y fechas.",
          "Estrategias de Testeo funcionales hasta la fecha (25/09/2025)"
        ]
      },
      {
        subtitle: "4.6 Glosario Básico",
        items: [
          "CTR (Click Through Rate)",
          "CPC (Costo por Clic)",
          "CPA (Costo por Adquisición o Acción)",
          "ROAS (Return on Ad Spend)",
          "Alcance (Reach)",
          "Impresiones (Impressions)",
          "Frecuencia (Frequency)",
          "Engagement (Interacción)",
          "Conversiones (Conversions)",
          "CPCO o CPM (Costo por Mil Impresiones)",
          "Píxel de Meta",
          "TOFU, MOFU y BOFU",
          "Ultimas Recomendaciones"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Sistema de Trabajo",
    description: "Cómo llevar el orden dentro del negocio, tanto en la operativa cómo en el control de métricas.",
    icon: Settings,
    color: "from-orange-500 to-orange-700",
    iconColor: "bg-orange-500",
    contentBgColor: "bg-orange-400/20",
    content: [
      {
        subtitle: "5.1 Filosofía de Trabajo: Eficiencia Adaptativa",
        items: [
          "¿Qué es un sistema de trabajo y para qué sirve?",
          "Por qué lo simple, si está bien pensado, siempre gana.",
          "Cómo construir una rutina de tareas sin depender de herramientas caras o complicadas.",
          "Aprender de la prueba y error: documentar lo que funciona y lo que no.",
          "Cómo adaptar un sistema a tu realidad (solo o con equipo)."
        ]
      },
      {
        subtitle: "5.2 Organización de Tareas y Prioridades",
        items: [
          "Herramientas simples de organización: agendas, Google Calendar, Google Sheets, Notion.",
          "Cómo delegar sin perder el control."
        ]
      },
      {
        subtitle: "5.3 Administración Semanal del Dinero",
        items: [
          "Por qué manejar el dinero semanalmente mejora tu visión y control."
        ]
      },
      {
        subtitle: "5.4 Resolución de Problemas y Autonomía Operativa",
        items: [
          "Qué tipo de problemas pueden resolverse sin intervención del dueño.",
          "Qué reportes simples se pueden pedir para mantener el control sin estar encima."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Guía de Inicio",
    description: "Cómo elegir un producto, cómo definir herramientas iniciales y proyectarse con objetivos iniciales.",
    icon: Rocket,
    color: "from-cyan-500 to-cyan-700",
    iconColor: "bg-cyan-500",
    contentBgColor: "bg-cyan-400/20",
    content: [
      {
        subtitle: "6.1 Como elegir correctamente qué emprender",
        items: [
          "Cómo definir un producto o servicio alineado a tu realidad.",
          "Errores comunes al elegir un rubro: intuición sin validación."
        ]
      },
      {
        subtitle: "6.2 En qué poner el foco al iniciar",
        items: [
          "¿Qué es urgente y qué es accesorio al comenzar?",
          "Cuándo y por qué invertir en imagen, stock, uniformes y otros."
        ]
      },
      {
        subtitle: "6.3 Filosofía de Planificación Estratégica",
        items: [
          "Planificación basada en objetivos: Cuánto quiero ganar.",
          "El arte de proyectar tu crecimiento sin endeudarte."
        ]
      },
      {
        subtitle: "6.4 Reunión de Planificación Estratégica Personalizada (Post-módulo)",
        items: [
          "Información de Contacto"
        ]
      }
    ]
  }
];

interface ModuleCardProps {
  module: typeof modules[0];
  index: number;
  moduleRef: React.RefObject<HTMLDivElement>;
  nextModuleRef?: React.RefObject<HTMLDivElement>;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index, moduleRef, nextModuleRef }) => {
  const Icon = module.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMinimize = () => {
    setIsExpanded(false);
    if (nextModuleRef && nextModuleRef.current) {
      setTimeout(() => {
        nextModuleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else if (moduleRef.current) {
      setTimeout(() => {
        moduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <div
      ref={moduleRef}
      className="group bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
      }}
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>

      <div className="mb-2">
        <span className="text-sm font-semibold text-gray-400">Módulo {module.id}</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {module.title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-4">
        {module.description}
      </p>

      {module.content && module.content.length > 0 && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
              isExpanded ? module.iconColor : 'bg-gray-700 hover:bg-gray-600'
            } text-white font-medium`}
          >
            <span>Ver Contenido</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {isExpanded && (
            <div className={`mt-4 p-4 rounded-lg ${module.contentBgColor} space-y-4 animate-fadeIn`}>
              {module.content.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-bold text-white text-sm">{section.subtitle}</h4>
                  <ul className="space-y-1 ml-4">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-200 text-sm flex items-start">
                        <span className="mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <button
                onClick={handleMinimize}
                className={`w-full mt-4 flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ${module.iconColor} hover:opacity-90 text-white font-medium`}
              >
                <span>Minimizar</span>
                <ChevronDown className="w-5 h-5 ml-2 rotate-180" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

interface GuiaLandingPageProps {
  onBack: () => void;
  onProveedoresClick?: () => void;
}

const GuiaLandingPage: React.FC<GuiaLandingPageProps> = ({ onBack, onProveedoresClick }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const moduleRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    modules.map(() => React.createRef<HTMLDivElement>())
  );

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
                src="/2.png"
                alt="Logo"
                className="h-10 w-auto cursor-pointer"
                onClick={onBack}
              />
            </div>

            <div className="hidden md:flex items-center space-x-8 mx-auto">
              <button
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Guía de Emprendimiento
              </button>
              <button
                onClick={onProveedoresClick}
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
                className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium py-2"
              >
                Guía de Emprendimiento
              </button>
              <button
                onClick={() => {
                  onProveedoresClick?.();
                  setMobileMenuOpen(false);
                }}
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

      <section className="pt-32 pb-20 bg-blue-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="flex justify-center">
              <img
                src="/guia-libro.png"
                alt="Guía de Emprendimiento Paraguay"
                className="w-full max-w-md"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Guía Completa de Emprendimiento en Paraguay
                </h3>
                <p className="text-sm text-gray-400">Formato Textual en 6 módulos especializados</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-xl text-gray-200 font-semibold">
                    +95 Páginas de información sobre emprendimiento
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-xl text-gray-200 font-semibold">
                    Estrategias probadas para crear negocios rentables
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-xl text-gray-200 font-semibold">
                    Herramientas de gestión y planificación estratégica
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Aprende las estrategias exactas para construir un negocio exitoso desde los fundamentos hasta técnicas avanzadas de crecimiento, gestión y escalabilidad.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Target className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Estrategias Probadas</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Casos Reales</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Resultados Garantizados</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => window.location.href = '/demo'}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Probar Demo Gratuita
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="modules-section" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contenido Completo del Curso
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              6 Módulos educativos pensados estratégicamente para llevarte desde la idea inicial hasta un negocio próspero y escalable en Paraguay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                index={index}
                moduleRef={moduleRefs.current[index]}
                nextModuleRef={index < modules.length - 1 ? moduleRefs.current[index + 1] : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-section" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accede a la Guía de Emprendimiento
            </h2>
            <p className="text-gray-400 text-lg">
              Acceso de por vida. Actualizaciones periódicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Guía de Emprendimiento</h3>
              <p className="text-gray-400 mb-6">
                Accede a los 6 módulos completos sobre cómo empezar, rentabilizar y escalar un negocio desde cero.
              </p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">189.000gs</div>
                <p className="text-gray-500 text-sm">Pago único</p>
              </div>
              <div className="space-y-3">
                <a
                  href="/demo"
                  className="block text-center text-gray-400 hover:text-yellow-400 underline text-sm mb-2"
                >
                  Demo de la guía
                </a>
                <a
                  href="https://pago.pagopar.com/74nuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInitiateCheckout(189000, 'PYG', 'Guía de Emprendimiento')}
                  className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Comprar con Tarjeta
                </a>
                <a
                  href="https://wa.me/595973327969?text=Hola!%20Quiero%20comprar%20la%20gu%C3%ADa%20de%20Emprendimiento..."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInitiateCheckout(189000, 'PYG', 'Guía de Emprendimiento')}
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Comprar con Transferencia
                </a>
              </div>
              <a
                href="https://wa.me/595973327969?text=Tengo%20dudas%20sobre%20la%20Gu%C3%ADa%20de%20Emprendimiento"
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

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Lo que lograrás con esta Guía...
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="space-y-8 relative" style={{ zIndex: 1 }}>
              {/* Fase 1 */}
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600 group-hover:border-blue-500 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:transform group-hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    1
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      Fundamentos y Bases Legales
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Aprender todos los conceptos del emprendimiento y bases legales de forma fácil y rápida
                    </p>
                  </div>
                </div>
              </div>

              {/* Fase 2 */}
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600 group-hover:border-purple-500 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-purple-500/30 group-hover:transform group-hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    2
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      Selección y Diferenciación de Producto
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Conocer las bases para elegir un buen producto y promocionarlo de forma correcta y cómo diferenciarse de la competencia
                    </p>
                  </div>
                </div>
              </div>

              {/* Fase 3 */}
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600 group-hover:border-green-500 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-green-500/30 group-hover:transform group-hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    3
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      Captación de Clientes y Canales de Venta
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Aprender sobre los métodos de captación de clientes y canales de venta
                    </p>
                  </div>
                </div>
              </div>

              {/* Fase 4 */}
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600 group-hover:border-red-500 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-red-500/30 group-hover:transform group-hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    4
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      Proceso Logístico Completo
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Aprender sobre el proceso logístico desde la venta hasta la entrega y el cobro
                    </p>
                  </div>
                </div>
              </div>

              {/* Fase 5 */}
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600 group-hover:border-teal-500 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-teal-500/30 group-hover:transform group-hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    5
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      Red de Proveedores Exclusiva
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Contactar a uno de los +300 proveedores nacionales e internacionales para elegir un nicho
                    </p>
                  </div>
                </div>
              </div>

              {/* Fase 6 */}
              <div className="group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="relative bg-gradient-to-br from-yellow-600 via-yellow-500 to-amber-600 rounded-2xl p-6 border-2 border-yellow-400 transition-all duration-500 shadow-2xl shadow-yellow-500/50 animate-golden-shine">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    6
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <Star className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    META
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                      Lanzamiento y Facturación Recurrente
                    </h3>
                    <p className="text-white text-base leading-relaxed drop-shadow">
                      Montar tu primer emprendimiento para facturar +10.000.000gs de manera recurrente desde tus primeros meses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-golden-shine {
            animation: golden-shine 2.5s ease-in-out infinite;
          }
        `}</style>
      </section>

      <section id="contact-section" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ¿Tienes Dudas?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Háblame directamente por WhatsApp para ayudarte a saber si esta guía es para ti
          </p>

          <a
            href="https://wa.me/595973327969?text=Hola! Tengo dudas sobre la guía de emprendimiento"
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

export default GuiaLandingPage;
