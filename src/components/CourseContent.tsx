import React from 'react';
import { ArrowLeft, CheckCircle, BarChart3, Lightbulb, Palette, TrendingUp, Target, Settings, Rocket, Users } from 'lucide-react';

interface CourseContentProps {
  onBack: () => void;
  isDemo?: boolean;
}

const modules = [
  {
    id: '1',
    title: 'Módulo 1: Principios del Emprendimiento',
    description: 'Fundamentos sólidos para empezar y mantenerse en el camino empresarial, con una mentalidad fuerte y estable.',
    duration: '22 Páginas',
    icon: Lightbulb
  },
  {
    id: '2',
    title: 'Módulo 2: Branding e Imagen del Negocio',
    description: 'Crear una Imagen que venda, no quemarse la cabeza con ideas y pasar a la ejecución de manera eficiente.',
    duration: '11 Páginas',
    icon: Palette
  },
  {
    id: '3',
    title: 'Módulo 3: Embudo de Ventas',
    description: 'Optimizar el Camino del cliente desde el primer contacto hasta la venta y la fidelización.',
    duration: '16 Páginas',
    icon: TrendingUp
  },
  {
    id: '4',
    title: 'Módulo 4: Meta ADS',
    description: 'Campañas publicitarias que venden y pueden ser escaladas.',
    duration: '17 Páginas',
    icon: Target
  },
  {
    id: '5',
    title: 'Módulo 5: Sistema de Trabajo',
    description: 'Cómo llevar el orden dentro del negocio, tanto en la operativa cómo en el control de métricas.',
    duration: '14 Páginas',
    icon: Settings
  },
  {
    id: '6',
    title: 'Módulo 6: Guía de Inicio',
    description: 'Cómo elegir un producto, cómo definir herramientas iniciales y proyectarse con objetivos iniciales.',
    duration: '17 Páginas',
    icon: Rocket
  },
  {
    id: '7',
    title: 'Módulo 7: Lista de Proveedores',
    description: 'Proveedores de distintos rubros en China, Brasil y CDE, verificados y de confianza.',
    duration: 'Especial',
    icon: Users
  }
];

const CourseContent: React.FC<CourseContentProps> = ({ onBack, isDemo = false }) => {
  const handleModuleClick = (moduleId: string) => {
    window.dispatchEvent(new CustomEvent('navigateToModule', { detail: moduleId }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isDemo ? 'Demo - Vista Previa del Curso' : 'Contenido del Curso'}
          </h1>
          <p className="text-xl text-gray-300">
            {isDemo ? 'Explora el contenido limitado de cada módulo' : 'Accede a todos los módulos de la guía completa'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={module.id !== '7' ? () => handleModuleClick(module.id) : undefined}
              className={`bg-gray-800 rounded-xl p-6 transition-all duration-300 border border-gray-700 ${
                module.id !== '7'
                  ? 'hover:bg-gray-750 cursor-pointer transform hover:scale-105 hover:shadow-2xl'
                  : 'opacity-90 cursor-default'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <module.icon className="w-8 h-8 text-blue-400" />
                <span className="text-sm text-gray-400">{module.duration}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {module.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {module.description}
              </p>

              <div className="flex items-center text-green-400">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">Disponible</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="border-t border-gray-700 mb-8"></div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <a
              href="https://pago.pagopar.com/73zr4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl block"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">📚</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Pack de 3 Libros Digitales
                  </h3>
                  <p className="text-xl font-semibold text-blue-100">
                    50.000gs
                  </p>
                </div>
              </div>
              <p className="text-blue-50 leading-relaxed">
                Los Secretos de la mente Millonaria, El Lider que no tenía Cargo y Vendes o Vendes... Los Libros que transformaron mi mentalidad y me prepararon para el éxito.
              </p>
            </a>

            <a
              href="https://pago.pagopar.com/73zr4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl block"
            >
              <div className="flex items-start gap-4 mb-4">
                <BarChart3 className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Modelo de Caja en Google Sheets
                  </h3>
                  <p className="text-xl font-semibold text-emerald-100">
                    50.000gs
                  </p>
                </div>
              </div>
              <p className="text-emerald-50 leading-relaxed">
                La planilla exacta que uso para administrar mis negocios de forma sencilla y práctica, controlando fácilmente ingresos, egresos y métricas de avance
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
