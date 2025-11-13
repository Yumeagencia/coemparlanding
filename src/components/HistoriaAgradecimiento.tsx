import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';

interface HistoriaAgradecimientoProps {
  onBack: () => void;
}

const HistoriaAgradecimiento: React.FC<HistoriaAgradecimientoProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al curso
        </button>

        <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 border border-yellow-700 rounded-xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-yellow-400" />
          </div>

          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Mi Historia y Agradecimiento
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4 text-lg">
              Quiero compartir contigo mi historia personal y agradecerte por confiar en esta guía.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mi Historia</h2>
            <p className="text-gray-300 mb-4">
              Empecé desde cero, sin conocimientos previos de negocios, enfrentando múltiples desafíos
              en el camino. Cada obstáculo me enseñó lecciones valiosas que hoy comparto contigo en
              esta guía.
            </p>

            <p className="text-gray-300 mb-4">
              Aprendí que el emprendimiento no es solo sobre ganar dinero, sino sobre resolver problemas,
              crear valor y construir algo significativo. A lo largo de los años, he cometido errores,
              celebrado victorias y, sobre todo, he crecido como persona y profesional.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Agradecimiento</h2>
            <p className="text-gray-300 mb-4">
              Gracias por elegir esta guía para tu viaje emprendedor. Tu decisión de invertir en tu
              educación y desarrollo demuestra que tienes lo necesario para tener éxito.
            </p>

            <p className="text-gray-300 mb-4">
              Recuerda que el camino del emprendimiento no es fácil, pero es increíblemente gratificante.
              Cada paso que des, por pequeño que sea, te acerca a tus objetivos.
            </p>

            <div className="bg-yellow-900/40 border border-yellow-600 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Palabras Finales</h3>
              <p className="text-gray-300">
                Cree en ti mismo, sé persistente, aprende de tus errores y nunca dejes de innovar.
                El éxito está al alcance de quienes están dispuestos a trabajar por él.
              </p>
              <p className="text-gray-300 mt-4 font-semibold">
                ¡Mucho éxito en tu emprendimiento!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaAgradecimiento;
