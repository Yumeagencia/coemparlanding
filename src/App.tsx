import React, { useState, useEffect } from 'react';
import LoginModal from './components/LoginModal';
import LandingPage from './components/LandingPage';
import GuiaLandingPage from './components/GuiaLandingPage';
import ProveedoresLandingPage from './components/ProveedoresLandingPage';
import CourseContent from './components/CourseContent';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Module4 from './components/Module4';
import Module5 from './components/Module5';
import Module6 from './components/Module6';
import HistoriaAgradecimiento from './components/HistoriaAgradecimiento';
import ThankYouPage from './components/ThankYouPage';

type Page = 'landing' | 'guia' | 'proveedores' | 'course' | 'demo' | 'module1' | 'module2' | 'module3' | 'module4' | 'module5' | 'module6' | 'historia' | 'gracias';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/gracias' || path === '/Gracias') {
      setCurrentPage('gracias');
    } else if (path === '/demo') {
      setCurrentPage('demo');
      setIsDemoMode(true);
    } else if (path === '/guia' || path === '/guia-emprendimiento') {
      setCurrentPage('guia');
    } else if (path === '/proveedores' || path === '/lista-proveedores') {
      setCurrentPage('proveedores');
    }

    const handleModuleNavigation = (event: CustomEvent) => {
      const moduleId = event.detail;

      if (moduleId === 'historia-agradecimiento') {
        setCurrentPage('historia');
      } else {
        setCurrentPage(`module${moduleId}` as Page);
      }
    };

    window.addEventListener('navigateToModule', handleModuleNavigation as EventListener);

    return () => {
      window.removeEventListener('navigateToModule', handleModuleNavigation as EventListener);
    };
  }, []);

  const handleLoginSuccess = () => {
    console.log('Login exitoso - mostrando curso');
    setShowLogin(false);
    setCurrentPage('course');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    window.history.pushState({}, '', '/');
  };

  const handleGuiaClick = () => {
    setCurrentPage('guia');
    window.history.pushState({}, '', '/guia-emprendimiento');
  };

  const handleProveedoresClick = () => {
    setCurrentPage('proveedores');
    window.history.pushState({}, '', '/lista-proveedores');
  };

  const handleBackToCourse = () => {
    setCurrentPage('course');
  };

  const handleBackToDemo = () => {
    setCurrentPage('demo');
  };

  // Render based on current page
  if (currentPage === 'guia') {
    return (
      <>
        <GuiaLandingPage onBack={handleBackToLanding} onProveedoresClick={handleProveedoresClick} onLoginClick={() => setShowLogin(true)} />
        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
      </>
    );
  }

  if (currentPage === 'proveedores') {
    return <ProveedoresLandingPage onBack={handleBackToLanding} onGuiaClick={handleGuiaClick} />;
  }

  if (currentPage === 'module1') {
    return <Module1 onBack={isDemoMode ? handleBackToDemo : handleBackToCourse} isDemo={isDemoMode} />;
  }

  if (currentPage === 'module2') {
    return <Module2 onBack={isDemoMode ? handleBackToDemo : handleBackToCourse} isDemo={isDemoMode} />;
  }

  if (currentPage === 'module3') {
    return <Module3 onBack={isDemoMode ? handleBackToDemo : handleBackToCourse} isDemo={isDemoMode} />;
  }

  if (currentPage === 'module4') {
    return <Module4 onBack={isDemoMode ? handleBackToDemo : handleBackToCourse} isDemo={isDemoMode} />;
  }

  if (currentPage === 'module5') {
    return <Module5 onBack={isDemoMode ? handleBackToDemo : handleBackToCourse} isDemo={isDemoMode} />;
  }

  if (currentPage === 'module6') {
    return <Module6 onBack={isDemoMode ? handleBackToDemo : handleBackToCourse} isDemo={isDemoMode} />;
  }

  if (currentPage === 'historia') {
    return <HistoriaAgradecimiento onBack={handleBackToCourse} />;
  }

  if (currentPage === 'gracias') {
    return (
      <>
        <ThankYouPage onContinue={() => setShowLogin(true)} />
        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
      </>
    );
  }

  if (currentPage === 'demo') {
    return <CourseContent onBack={handleBackToLanding} isDemo={true} />;
  }

  if (currentPage === 'course') {
    return <CourseContent onBack={handleBackToLanding} isDemo={false} />;
  }

  // Default: Landing page
  return (
    <>
      <LandingPage
        onLoginClick={() => setShowLogin(true)}
        onThankYouClick={() => setCurrentPage('gracias')}
        onGuiaClick={handleGuiaClick}
        onProveedoresClick={handleProveedoresClick}
      />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}

export default App;
