import React from 'react';
import { ArrowLeft } from 'lucide-react';
import DemoContentWrapper from './DemoContentWrapper';

interface Module4Props {
  onBack: () => void;
  isDemo?: boolean;
}

const Module4: React.FC<Module4Props> = ({ onBack, isDemo = false }) => {
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

        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-6">
            Módulo 4: Meta ADS - Estrategias de Captación Digital
          </h1>

          <DemoContentWrapper isDemo={isDemo}>
            <div className="prose prose-invert max-w-none text-gray-300">
            <p className="text-lg mb-6">
              En este módulo quiero darte todo lo que se sobre Meta ADS no solo como una herramienta técnica, sino como una estrategia integral de captación. Se enseña a construir campañas efectivas, específicamente en fases de Test, optimizar cada elemento y leer los datos de forma práctica y accionable para escalar los resultados.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold">
                Advertencia: Si ya tenes cierta experiencia, los submódulos hasta el 4.3 o 4.4 te parecerán muy básicos y simples, pero si no estás familiarizado/a con la herramienta, es tu puerta de entrada y es información que debes dominar al 100% antes de poner un solo guaraní en anuncios.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">4.1 ¿Qué es Meta ADS?</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es Meta ADS y para qué sirve?</h3>

            <p className="mb-4">
              Básicamente, Meta Ads es la herramienta publicitaria digital de Facebook, Instagram y WhatsApp. Imagínate que tienes un negocio en San Lorenzo o en Ciudad el Este o en cualquier lado y vos como tenes redes sociales para tu negocio, publicaste la foto en tu Instagram, pero seamos sinceros, ¿A quién le llega? A tus primos, a tu tía que siempre comenta "qué rico" y a uno que otro amigo que capaz ni compra, y ahí se queda, chiquitito.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">El poder de Meta ADS:</h4>
              <p className="text-blue-200 mb-3">
                Con Meta Ads podemos decirle a la plataforma: "Quiero que la imagen de mi chipa le llegue a mujeres de 20 a 35 años que viven en Luque y que tienen interés en lugares de comida", y pum, de repente tu chipa aparece en el celular de alguien que nunca te conoció en su vida, pero justo cuando ve, tiene hambre y dice "Qué rico se ve, quiero probar".
              </p>
              <p className="text-blue-200 font-semibold">
                Meta Ads te permite dejar de depender solo de conocidos o un local físico visible y empezar a mostrar tu negocio a personas que realmente pueden ser tus clientes.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Cómo se usa Meta ADS?</h3>

            <p className="mb-4">
              Meta Ads se usa a través de algo que se llama Administrador Comercial o "Meta Business Suite", que es como la oficina virtual donde se maneja todo. Para entrar necesitas:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-400 mb-2">1. Página de Facebook</h4>
                <p className="text-sm">OJO, no sirve tu perfil personal, tiene que ser una página de negocio.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-400 mb-2">2. Instagram Profesional</h4>
                <p className="text-sm">Conectar tu cuenta de Instagram a esa página (debe estar configurada como cuenta profesional).</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-400 mb-2">3. Portfolio Comercial</h4>
                <p className="text-sm">Es como tu "carpeta del negocio" dentro de Meta, donde guardas tu página e Instagram.</p>
              </div>
            </div>

            <p className="mb-4">
              Respecto a los dispositivos, podes usar Meta Ads tanto desde la computadora (lo más cómodo porque tenes más opciones y es la única forma de acceder de forma profesional para usarlo enserio) como desde el celular a través de la app Meta Business Suite.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Cómo está compuesta una campaña de Anuncios?</h3>

            <p className="mb-4">
              Una campaña en Meta Ads es como un combo de tres pisos:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">1. Campaña (Arriba)</h4>
                <p>Donde definís el objetivo: qué buscas lograr con la publicidad (mensajes, visitas, ventas).</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">2. Conjunto de Anuncios (Medio)</h4>
                <p>Donde decidís a quién le vas a mostrar, en qué lugares y cuánto dinero vas a invertir.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">3. Anuncios (Abajo)</h4>
                <p>Las piezas visibles: la foto, el video, el texto, lo que la gente realmente va a ver.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Cuánto cuesta una publicidad y cómo se cobra?</h3>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-green-300 mb-3">Costos en Paraguay:</h4>
              <ul className="list-disc list-inside text-green-200 space-y-2">
                <li><strong>Mínimo:</strong> G. 8.000 por día</li>
                <li><strong>Con G. 20.000/día:</strong> 1.500 a 3.000 personas</li>
                <li><strong>Con G. 100.000/día:</strong> 8.000 a 15.000 personas</li>
                <li><strong>Impuestos:</strong> 10% adicional sobre tu presupuesto</li>
              </ul>
            </div>

            <p className="mb-4">
              En cuanto al cobro, Meta no te pide que pagues antes de empezar, sino que acumula lo que vas gastando y luego te cobra cuando alcanzas cierto monto o en una fecha de corte mensual. El cobro se hace directamente en dólares, aunque vos veas tus presupuestos en guaraníes.
            </p>

            <p className="mb-4">
              Para pagar necesitas una tarjeta de crédito o débito internacional, o también podés usar tarjetas virtuales y prepagas que estén habilitadas para compras online en el exterior, como Ueno, vaquita u otras que son gratis de habilitar.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Cómo se si me conviene pagar pautas publicitarias?</h3>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Ventajas:</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2 mb-4">
                <li>Llegar a personas que no te conocen</li>
                <li>Medir todo: vistas, clics, conversaciones, ventas</li>
                <li>Acelerar tu crecimiento sin esperar el boca a boca</li>
              </ul>

              <h4 className="text-lg font-bold text-red-300 mb-3">Desventajas:</h4>
              <ul className="list-disc list-inside text-red-200 space-y-2">
                <li>Si no tenes claro tu cliente, es un gasto sin retorno</li>
                <li>Requiere constancia y seguimiento, no es "poner y olvidar"</li>
                <li>Sin conocimiento, 99% probable que pierdas dinero</li>
              </ul>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold mb-2">
                Te conviene pagar publicidad cuando:
              </p>
              <ul className="list-disc list-inside text-yellow-200 space-y-2">
                <li>Ya tenes un producto probado (vendiste orgánicamente)</li>
                <li>Tenes identificado a qué tipo de cliente querés llegar</li>
                <li>Estás dispuesto a aprender y ajustar constantemente</li>
              </ul>
            </div>

            <p className="mb-4">
              Meta Ads no es algo mágico y milagroso en donde pones plata y la duplicas, pero en manos de alguien que sabe lo que hace, se convierte en una herramienta que realmente si puede multiplicar resultados.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">4.2 Campañas: Cual elegir según el objetivo</h2>

            <p className="mb-4">
              Elegir bien el objetivo de una campaña es el primer paso para tener buenos resultados. Muchos creen que por alguna razón saben más que Facebook, el error más común.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Tipos de Objetivos</h3>

            <div className="space-y-3 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-1">Reconocimiento</h4>
                <p className="text-sm">Para que más personas conozcan tu marca. Es el menos eficaz y más barato, solo sirve para visibilidad.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-1">Tráfico</h4>
                <p className="text-sm">Diseñado para llevar gente a un lugar específico, como tu página web o un link de WhatsApp.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-1">Interacción</h4>
                <p className="text-sm">Pensado para conseguir más mensajes al WhatsApp, me gusta, comentarios o compartidos.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-1">Clientes potenciales</h4>
                <p className="text-sm">Permite generar formularios dentro de Facebook o Instagram para que la gente deje sus datos.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-400 mb-1">Ventas (Recomendado)</h4>
                <p className="text-sm">Enfocado en que las personas compren directamente en tu página web o que te escriban por WhatsApp para comprar.</p>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold">
                La campaña es lo primero que ajustamos y es simple: Ten en cuenta que debes poner el objetivo que realmente busques, pues Meta tiene un algoritmo MUY fuerte y eficaz.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">4.3 Públicos: Segmentación e intención</h2>

            <p className="mb-4">
              Aquí siempre empezamos con los errores, aquí hay mucho margen de error y en especial aquí en Paraguay, porque nunca nadie habla de la situación que se experimenta con Anuncios en Paraguay, pues es muy distinta a otros lados del mundo.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es una segmentación?</h3>

            <p className="mb-4">
              La segmentación es básicamente elegir a qué tipo de personas buscas mostrarle tus anuncios. Imagina que vendes uniformes escolares: no tendría lógica mostrar tu anuncio a alguien de 18 años que ya terminó el colegio, pero sí a madres y padres de 25 a 45 años que viven en tu ciudad y tienen hijos pequeños. Eso es segmentar, filtrar al público.
            </p>

            <p className="mb-4">
              En pocas palabras, segmentar es decirle a Meta: "No quiero hablar con todos, quiero hablar solo con los que realmente podrían ser mis clientes".
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué tipos de segmentación podemos usar en Meta ADS?</h3>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">En Paraguay, la segmentación geográfica es la más clave:</h4>
              <p className="text-yellow-200 mb-3">
                No tiene mucho sentido gastar dinero mostrando anuncios en zonas rurales donde la conexión a internet es limitada y donde quizás no haya tanta demanda para tu producto.
              </p>
              <p className="text-yellow-200 font-semibold">
                Lo más estratégico suele ser concentrarse en Asunción, Central, Ciudad del Este, Encarnación y otras ciudades grandes.
              </p>
            </div>

            <p className="mb-4">
              Además de la ubicación, tenes la segmentación demográfica (edad, género, idioma), la segmentación por intereses (aunque hoy es mejor dejar a Meta buscar con Advantage+), y la segmentación por comportamientos.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">4.4 Creativos: Qué mostrar y cómo decirlo</h2>

            <p className="mb-4">
              Probablemente lo más importante hasta la fecha (25/09/2025) son los creativos. Los creativos son las imágenes o videos lo que la gente ve. De que sirve que miles de personas te vean si no saben lo que estás vendiendo, de nada.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Tipos de Creativos: Fotos vs Videos... ¿O Ambos?</h3>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Fotos:</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2 mb-4">
                <li>Rápidas de producir, más fáciles de diseñar</li>
                <li>Funcionan bien para mensaje claro y directo</li>
                <li>Menos efectivas que los videos en general</li>
              </ul>

              <h4 className="text-lg font-bold text-blue-300 mb-3">Videos:</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2">
                <li>Permiten contar más historia</li>
                <li>Transmiten emociones y generan conexión</li>
                <li>En Paraguay funcionan cada vez mejor (Reels e Historias)</li>
              </ul>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold">
                La mejor estrategia suele ser combinar: usar fotos para destacar promociones rápidas o productos específicos, y videos para generar confianza, mostrar testimonios o darle más vida a tu marca.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">El Copy... ¿Qué es un Copy?</h3>

            <p className="mb-4">
              Un Copy es básicamente el texto que acompaña tu anuncio, ya sea en foto o en video. Si el video o la foto es lo que atrae la mirada, el Copy es lo que convence a quedarse o a hacer clic.
            </p>

            <p className="mb-4">
              Imagina que subís un video mostrando tus remeras Oversize: Sin Copy, la gente puede mirar el video, pero quizá no entienda si las vendes, si haces envíos, cuánto cuestan o cómo pedirlas. El Copy viene a resolver eso: "Remeras Oversize desde G. 75.000, envíos en Asunción y Central, pedí la tuya al WhatsApp".
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">4.5 Destinos y Píxel: Dónde llevamos al usuario</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es un destino?</h3>

            <p className="mb-4">
              Un destino es el lugar concreto al que mandas a la persona cuando toca tu anuncio: puede ser un enlace a tu sitio web o Landing page, tu WhatsApp Business, Instagram Direct, Messenger, tu tienda de Facebook/Instagram, un formulario instantáneo de Meta, la tienda de apps o incluso un mapa si buscas que lleguen a tu local.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 mb-2">
                <strong>Destinos "dentro de Meta":</strong> Mensajes, formularios, tienda - cargan rápido y suelen convertir mejor en móviles.
              </p>
              <p className="text-blue-200">
                <strong>Destinos "fuera de Meta":</strong> Web/landing - te dan más control de marca y medición avanzada con el píxel, pero exigen que tu página sea veloz y responsive.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Landing Page vs Ecommerce</h3>

            <p className="mb-4">
              Una Landing page es una página única y enfocada en una sola acción; funciona muy bien para campañas con una oferta específica, lanzamientos, servicios o productos de decisión más consultiva.
            </p>

            <p className="mb-4">
              Un Ecommerce es una tienda completa con catálogo, búsquedas, carrito y opción de pago; es ideal para vender múltiples productos de forma directa y escalar, pero requiere más mantenimiento.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Página Web vs Mensajería</h3>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 mb-3">
                <strong>Página web:</strong> Muestra información completa, educa, procesa compras 24/7, pero exige que cargue rápido en celular.
              </p>
              <p className="text-yellow-200 font-semibold">
                <strong>Mensajería (WhatsApp):</strong> Excelente para Paraguay porque la gente confía y compra conversando; sirve para tickets altos, pedidos a medida, pero depende de que respondas rápido (idealmente en menos de 5 minutos).
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">4.6 Estrategias de Test: ¿Qué es un Test?</h2>

            <p className="mb-4">
              Llegamos a la parte más importante. Un Test es básicamente una campaña o conjunto de campañas a las cuales le ponemos un monto mínimo para probar su rendimiento, analizar resultados y escalar presupuesto a las campañas o conjuntos o creativos que mejor resultado dieron.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Cómo se hace un Test?</h3>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <p className="text-red-200 font-semibold mb-3">
                REGLA DE ORO: Cuando vamos a probar que funciona y que no, debemos SIEMPRE, repito, SIEMPRE probar una variable a la vez.
              </p>
              <p className="text-red-200">
                Los test se hacen de arriba para abajo: primero a nivel de campaña (objetivo), luego conjunto de anuncios (segmentación), y finalmente anuncios (creativos).
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Como definir un presupuesto para una estrategia de Test</h3>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold mb-3">
                Regla simple:
              </p>
              <p className="text-green-200 mb-3">
                Agarra un dinero que estés dispuesto a perder 2 veces, porque el primer test puede salirte mal y aprender para el segundo.
              </p>
              <p className="text-green-200">
                <strong>Ejemplo:</strong> Tengo 2.000.000gs, estoy dispuesto a perder 500.000gs por test, entonces pon 1.000.000gs separados y usa 500.000gs en el primer test.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Como prepararse para una fase de Test: Horarios y fechas</h3>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Reglas para un Test efectivo:</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2">
                <li>Duración: 7 a 14 días (no menos, no más)</li>
                <li>Inicio: Lunes a las 00:30</li>
                <li>Fin: Domingo a las 23:30</li>
                <li>Fechas: Inicio, mitad o final de mes (más movimiento)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Estrategias de Testeo funcionales hasta la fecha (25/09/2025)</h3>

            <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">LA ESTRATEGIA DEFINITIVA:</h4>

              <div className="space-y-4 text-yellow-200">
                <div>
                  <p className="font-semibold mb-2">1. Objetivo: SIEMPRE usa VENTAS</p>
                  <p className="text-sm">Puedes elegir el destino de WhatsApp, donde se pueden cerrar todas las ventas de cualquier tipo de producto.</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Meta necesita 50 resultados mínimo</p>
                  <p className="text-sm">Por conjunto de anuncios en un periodo mínimo de 7 días enteros (sin pausar de noche).</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">3. Costo por conversación objetivo:</p>
                  <p className="text-sm">Para productos normales (ticket menor a 1.000.000gs): entre 500gs y 5.000gs por conversación.</p>
                  <p className="text-sm">En fase de test puede ser hasta 12.000gs (normal, no te asustes).</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">4. Qué testear: SOLO el creativo</p>
                  <p className="text-sm">Copy igual o muy similar, 2-5 videos distintos (no uses fotos de entrada).</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">5. Cálculo de presupuesto:</p>
                  <p className="text-sm">50 conversaciones × 12.000gs = 600.000gs por conjunto por semana.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cronograma de Test (7 días):</h3>

            <div className="space-y-3 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400">Día 1-2: Lanzamiento</h4>
                <p className="text-sm">Dejar correr, no hacer nada</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400">Día 3: Primera optimización</h4>
                <p className="text-sm">Cortar los que no dieron mensajes</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400">Día 4-5: Segunda optimización</h4>
                <p className="text-sm">Dejar solo el mejor o los 2 mejores</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-400">Día 7: Escalar</h4>
                <p className="text-sm">Subir presupuesto 25% cada 72h hasta que el costo por conversación sea más alto del deseado</p>
              </div>
            </div>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-red-300 mb-3">MUY IMPORTANTE:</h4>
              <ul className="list-disc list-inside text-red-200 space-y-2">
                <li>No uses Messenger como destino (nadie lo usa enserio)</li>
                <li>Solo WhatsApp e Instagram Direct</li>
                <li>Segmentación geográfica: Solo ciudades principales donde puedes entregar</li>
                <li>Edad recomendada: 21-65+ (jóvenes preguntan mucho y compran poco)</li>
                <li>No testees producto vs producto (son públicos distintos)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Estrategia para servicios (Calidad sobre cantidad):</h3>

            <p className="mb-4">
              Para servicios, no evalúes solo el costo por conversación sino la calidad de mensajes. Anota en un cuaderno, Excel o CRM:
            </p>

            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Cuántas conversaciones trae cada uno desde el día 5-6</li>
              <li>De esas, cuántas fueron de clientes interesados</li>
              <li>Cuántas no te respondieron más</li>
              <li>Cuántas compraron</li>
            </ul>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold">
                Solo escalarás las que tuvieron más de 40% de buenas conversaciones. Si de 10 conversaciones, 4 o más son de gente que si mostró interés real (compren o no), escalarás.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cronograma de Test (14 días):</h3>

            <p className="mb-4">
              Si decidiste hacer el Test durante 14 días en lugar de 7, simplemente multiplicarás los días por 2. Si el día 1 y 2 no se hace nada en la estrategia de 7 días, en los días 1 al 4 no harás nada en la estrategia de 14 días.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">Cuando una campaña validada empeora:</h4>
              <p className="text-yellow-200 mb-3">
                Si una campaña ya testeada y validada empeora por 5 días seguidos:
              </p>
              <ol className="list-decimal list-inside text-yellow-200 space-y-2">
                <li>Prueba duplicar la campaña y borrar la anterior (refresh)</li>
                <li>Si en los primeros 3 días la copia sigue con malos resultados, pausa</li>
                <li>Vuelve a plantearte una estrategia de Test con creativos nuevos y ángulos de video nuevos</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">4.7 Glosario Básico</h2>

            <div className="grid grid-cols-1 gap-3 mb-6">
              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">CTR (Click Through Rate)</h4>
                <p className="text-sm">Porcentaje de personas que hicieron clic vs las que vieron el anuncio.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">CPC (Costo por Clic)</h4>
                <p className="text-sm">Cuánto te costó, en promedio, cada clic.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">CPA (Costo por Adquisición)</h4>
                <p className="text-sm">Cuánto te costó conseguir una acción importante (compra, registro).</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">ROAS (Return on Ad Spend)</h4>
                <p className="text-sm">Retorno de la inversión publicitaria. Cuánto dinero generaste por cada guaraní invertido.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">Alcance (Reach)</h4>
                <p className="text-sm">Cantidad de personas únicas que vieron tu anuncio.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">Impresiones</h4>
                <p className="text-sm">Número total de veces que tu anuncio fue mostrado.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">Frecuencia</h4>
                <p className="text-sm">Promedio de veces que cada persona vio tu anuncio.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">Píxel de Meta</h4>
                <p className="text-sm">Código que se instala en tu web para rastrear acciones después de ver tu anuncio.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700 rounded-lg p-6 mt-10">
              <h3 className="text-2xl font-bold text-white mb-3">Última recomendación</h3>
              <p className="text-gray-300 mb-3">
                Asesórate por tu cuenta con material gratuito en YouTube o asesorías pagas de referentes con buenos números. Meta ADS siempre tiene actualizaciones nuevas e importantes de las que hay que estar pendiente para tener las campañas funcionando de la mejor manera posible.
              </p>
              <p className="text-gray-300 font-semibold">
                Solo empieza a pautar cuando sepas lo que vas a hacer y cuando tengas un capital dispuesto a perder. Se que es difícil, pero cuando se domina es una sinfonía completamente hermosa de ventas. Éxitos.
              </p>
            </div>
            </div>
          </DemoContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default Module4;
