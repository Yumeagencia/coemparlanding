import React from 'react';
import { Lock } from 'lucide-react';

interface DemoContentWrapperProps {
  children: React.ReactNode;
  isDemo?: boolean;
}

const DemoContentWrapper: React.FC<DemoContentWrapperProps> = ({ children, isDemo = false }) => {
  const handleUnlock = () => {
    window.location.href = '/';
    setTimeout(() => {
      const pricingSection = document.getElementById('precio');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!isDemo) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="relative max-h-[400px] overflow-hidden">
        {children}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-800 via-gray-800/95 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <button
          onClick={handleUnlock}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg"
        >
          <Lock className="w-6 h-6" />
          Desbloquear contenido completo
        </button>
      </div>
    </div>
  );
};

export default DemoContentWrapper;
