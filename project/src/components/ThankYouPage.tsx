import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { trackPurchase } from '../utils/metaPixel';

interface ThankYouPageProps {
  onContinue: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onContinue }) => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  useEffect(() => {
    trackPurchase(299000, 'PYG');
  }, []);

  const handlePaymentConfirmed = () => {
    setPaymentConfirmed(true);
  };


  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <button
        onClick={handleBackToHome}
        className="fixed top-6 left-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg z-50 flex items-center gap-2"
      >
        <Home className="w-5 h-5" />
        <span className="font-medium">Volver al Inicio</span>
      </button>
      <div className="max-w-2xl w-full">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center border border-gray-700 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¡Gracias por tu compra!
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Tu pago ha sido procesado exitosamente. Estás a punto de comenzar tu transformación empresarial.
          </p>

          <div className="bg-gray-700/50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">
              ¿Qué sigue ahora?
            </h2>
            <ul className="text-left text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Accede al contenido completo del curso</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Explora y estudia el contenido de los módulos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Comienza tu camino hacia el éxito</span>
              </li>
            </ul>
          </div>

          {!paymentConfirmed ? (
            <div className="space-y-4">
              <p className="text-lg text-white font-semibold mb-4">
                ¿Ya hiciste tu pago?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handlePaymentConfirmed}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Ya hice mi pago
                </button>
                <a
                  href="https://pago.pagopar.com/6zpqu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
                >
                  Aún no
                </a>
              </div>
            </div>
          ) : (
            <button
              onClick={onContinue}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto gap-2"
            >
              Continuar al Curso
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
