import React from 'react';
import { ArrowLeft } from 'lucide-react';
import DemoContentWrapper from './DemoContentWrapper';

interface Module5Props {
  onBack: () => void;
  isDemo?: boolean;
}

const Module5: React.FC<Module5Props> = ({ onBack, isDemo = false }) => {
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
            Módulo 5: Sistema de Trabajo + Administración
          </h1>

          <DemoContentWrapper isDemo={isDemo}>
            <div className="prose prose-invert max-w-none text-gray-300">
            <p className="text-lg mb-6">
              Este módulo está diseñado para ayudarte a construir un sistema operativo funcional y sostenible para tu negocio. No se trata de copiar un camino fijo, sino de adoptar una filosofía de eficiencia basada en simplicidad, orden y adaptabilidad, sin perder de vista la calidad ni el detalle. Tanto si estás empezando solo como si ya trabajas con un equipo, este módulo te ayudará a optimizar tu día a día y liberar tiempo para lo que realmente importa: Crecer.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">5.1 Filosofía de Trabajo: Eficiencia Adaptativa</h2>

            <p className="mb-4">
              Aquí exploramos la idea de que no existe una única forma correcta de organizar un negocio, sino que cada sistema debe nacer del contexto, los recursos y los objetivos de quien lo ejecuta. La clave está en hacerlo simple, pero sin perder profundidad. Menos complicación, más ejecución.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es un sistema de trabajo y para qué sirve?</h3>

            <p className="mb-4">
              Un sistema de trabajo no es más que una metodología, una rutina, una serie de actividades cotidianas que te permiten conocer la salud de tu negocio, el retorno obtenido, tener conciencia de tus números para optimizar costos e identificar patrones positivos para expandirlos y también los negativos para borrarlos.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 font-semibold mb-3">
                Un sistema de trabajo no es una teoría:
              </p>
              <p className="text-blue-200">
                Un sistema de trabajo es lo que estás haciendo para lograr los resultados que estas teniendo. Si el sistema es bueno, probablemente los resultados también sean buenos y si el sistema es malo, estoy seguro de que cómo mínimo estas muuuuy lejos de alcanzar el verdadero potencial.
              </p>
            </div>

            <p className="mb-4">
              También quiero decir que un sistema de trabajo no es solamente la forma de gestionar un negocio, un sistema de trabajo es más que eso, es cómo te administras con tu tiempo, con quien lo gastas, cuanto construyes o destruyes tu vida, pues cuando eres emprendedor, tu emprendimiento es un reflejo directo de quién eres por dentro.
            </p>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold">
                Si eres una persona con un sistema de trabajo preparado para generar 20.000.000gs semanales, tarde o temprano quién eres por dentro, se alineará con quién eres por fuera, puedes tener eso por seguro pero al 100%.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Por qué lo simple, si está bien pensado, siempre gana</h3>

            <p className="mb-4">
              En el día a día, con la complejidad que conlleva el emprendimiento, es muy fácil perder el foco, es muy fácil perder el foco y más si tu sistema de trabajo y rutina es un chorizo enorme de actividades y tareas sin orden.
            </p>

            <p className="mb-4">
              Te recomiendo que siempre, siempre, busques la forma de que todas las actividades sean lo más cortas y nutridas posibles. No te compliques con un Excel que a penas entiendes, con un CRM que no sabes cómo conectar con WhatsApp, no hagas planes con un presupuesto que no sabes cómo conseguir, no hagas tareas que sobrepasen la barrera desafiante sana.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">La Barrera Desafiante Sana:</h4>
              <p className="text-yellow-200 mb-3">
                El estrés sano nos motiva y nos da un ánimo distinto para pelear con más fuerza, pero no confundamos el estrés sano con el estrés tóxico.
              </p>
              <div className="space-y-2 text-yellow-200">
                <p><strong>Escala de estrés (1-10):</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>1-3:</strong> Tolerancia actual - Te relajarás, no pelearás con ambición</li>
                  <li><strong>4-5:</strong> IDEAL - Estrés sano, justo por encima de lo tolerable</li>
                  <li><strong>6-10:</strong> Zona de peligro - Te frustrarás y quemarás muy rápido</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-red-300 mb-2">Experiencia personal:</h4>
              <p className="text-red-200">
                Por mucho tiempo me moví con 10 de estrés cuando mi tolerancia era de 5, eso me hizo subir 10 kilos de grasa, perder mi estado físico, desarrollar ojeras hasta mi cuello, no dormir bien, vivir cansado y de mal humor, dejar de prestarle atención a las cosas importantes de la vida, ni si quiera podía disfrutar de las cosas simples, cómo una buena comida, un paseo o la compañía de gente que amo.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo construir una rutina de tareas sin herramientas caras o complicadas</h3>

            <p className="mb-4">
              Quiero que pienses por un segundo lo que pasará cuando empieces a emprender. Mientras otras empresas tienen un encargado del marketing, otro de grabar, otro de editar, otro de guiones, otro de ventas, otro administrativo, otro de gestión, otro de logística, otro de empaquetado, otro de control, otro de recursos humanos y otro de jefe, tu, en cambio, cuando empiezas, eres todo ello.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 mb-3">
                Piensa en porque tú estás en donde estás, no es por donde naciste o por culpa de otras personas, es porque simplemente no estuviste haciendo lo necesario para estar mejor de lo que estas hoy.
              </p>
              <p className="text-blue-200 font-semibold">
                Aquí quiero hablarte sobre la importancia de hacerse responsable por los éxitos y fracasos emprendiendo.
              </p>
            </div>

            <h4 className="text-xl font-bold text-white mt-6 mb-3">Método de división de áreas y tareas:</h4>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-green-400 mb-2">Paso 1: Identifica tus áreas</h5>
                <p className="text-sm">Toma una hoja y papel (no digital). Escribe las áreas principales de tu negocio.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-green-400 mb-2">Paso 2: Lista todas las tareas</h5>
                <p className="text-sm">Por cada área, lista todas las tareas individuales necesarias.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-green-400 mb-2">Paso 3: Agrupa en 3 categorías</h5>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li><strong>Técnico:</strong> Ejecutar, grabar, producir</li>
                  <li><strong>Administrativo:</strong> Métricas, números, control</li>
                  <li><strong>Creativo:</strong> Guiones, estrategias, ideas</li>
                </ul>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-green-400 mb-2">Paso 4: Organiza por horarios</h5>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li><strong>Mañana:</strong> Área creativa (mente al 100%)</li>
                  <li><strong>Día:</strong> Área técnica</li>
                  <li><strong>Noche:</strong> Área administrativa</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 mb-3">
                De esta forma, tu cerebro podrá trabajar cómo varias personas al mismo tiempo y eso te dará un plus de concentración, un extra enorme de un x10 de eficiencia.
              </p>
              <p className="text-green-200 font-semibold">
                Usa ChatGPT para crear GPTs y úsalo cómo una herramienta que potencie tu propio cerebro y tu propio ingenio, no como tu jefe o tu guía.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Aprender de la prueba y error: documentar lo que funciona y lo que no</h3>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold mb-3">
                Compra una agenda inmediatamente si no la tienes, no una de fechas, una en blanco.
              </p>
              <p className="text-yellow-200 mb-3">
                Úsala cómo un segundo cerebro. De nuevo, una agenda, no un Notion o la App de notas de tu celular, usa algo físico para escribir las cosas que te pasan.
              </p>
              <p className="text-yellow-200">
                Te ayudará a tener una percepción de lo que realmente está pasando con tu negocio, con tu vida, con tu disciplina, con tu humor, todo.
              </p>
            </div>

            <p className="mb-4">
              Escribe todo lo que te pasa, lo que funciona y cómo replicarlo y aumentarlo y lo que no te funcionó y las razones de porque no funcionó. Mientras escribes tendrás cada vez más ideas de cómo hacer que esa situación negativa se convierta en un aprendizaje.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 font-semibold mb-2">
                Ama el fracaso:
              </p>
              <p className="text-blue-200">
                No lo busques, pero acéptalo y amalo, pues es lo más real cuando emprendemos. Algo solo es un fracaso de verdad cuando te rindes. Si tienes un "Fracaso" y sigues adelante tomando esa situación negativa cómo aprendizaje, el "Fracaso" se convierte en aprendizaje y en una piedra más que construye tu camino hacia la prosperidad.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo adaptar un sistema a tu realidad (solo o con equipo)</h3>

            <p className="mb-4">
              Adaptar el sistema perfecto es cuestión de ser realista con tu situación, entender tu nivel de estrés sano y entender las tareas que necesitas en tu día a día y las tareas que necesita tu negocio para operar.
            </p>

            <p className="mb-4">
              Busca siempre innovar y optimizar todo, tu caja, tu rutina. Optimizar es mejorar, pero en este caso, optimizar es simplificar y hacer que sea tan natural cómo respirar, que no te tome esfuerzo abrir tu computadora o tu agenda y empezar a trabajar.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">5.2 Organización de Tareas y Prioridades</h2>

            <p className="mb-4">
              Este submódulo ofrece herramientas prácticas para evitar la saturación, administrar correctamente y delegar tareas cuando sea posible. La idea es lograr que el negocio funcione como un reloj, incluso en días difíciles.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Herramientas simples de organización</h3>

            <div className="space-y-3 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-2">Notion</h4>
                <p className="text-sm">Agenda digital para anotar cosas, hacer listas, checklist y tener información rápida en la mano.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-2">Google Sheets</h4>
                <p className="text-sm">Para administrar los ingresos de tu negocio (plantilla de administración disponible).</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-2">Google Calendar</h4>
                <p className="text-sm">Para marcar las actividades que quieres cumplir durante la semana y cada día.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-2">Agenda física</h4>
                <p className="text-sm">Como método de despejar tu cerebro y controlar tus pensamientos.</p>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold">
                Solo con estas herramientas puedes superar la barrera de los 100.000.000gs al mes. Yo lo sé porque es lo único con lo que nos administramos en mis emprendimientos y te aseguro de que funciona de maravilla.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo delegar sin perder el control</h3>

            <p className="mb-4">
              Al principio de esta guía hablamos sobre que debes dominar una tarea para no caer en el error de tener a alguien más que la haga y no saber cómo mejorar el rendimiento de esa persona con esa tarea.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Mi única recomendación:</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2">
                <li>Aprende la tarea que vas a delegar al 100%</li>
                <li>Cuando la estés haciendo, piensa en qué podrías mejorar</li>
                <li>Busca estar encima de la persona que la hace para ayudarla</li>
                <li>Ponte en su lugar: "cuando yo hacía X tarea, siempre me molestaba X aspecto"</li>
              </ul>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold mb-2">
                Tip extra:
              </p>
              <p className="text-yellow-200">
                Un personal en un área delegada no es para que dejes de trabajar, es para que cambies la perspectiva de trabajo. En lugar de hacer la tarea, tu nueva tarea es pensar en cómo optimizar ese proceso. El objetivo JAMÁS será trabajar menos, sino de manera más inteligente.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">5.3 Administración Semanal del Dinero</h2>

            <p className="mb-4">
              Acá se enseña cómo manejar el dinero que entra sin ahogarse a fin de mes. Se propone una filosofía de administración sencilla y preventiva, basada en separar los ingresos semanalmente para cubrir los gastos fijos y compromisos del negocio.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Por qué manejar el dinero semanalmente mejora tu visión y control</h3>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <p className="text-red-200 font-semibold mb-3">
                Mi primer gran error al emprender:
              </p>
              <p className="text-red-200">
                Fue no gestionar bien los números, que al final, son por lo que trabajamos y son lo que nos dará la vida que buscamos. Los números son lo más importante en cuanto a la gestión y administración, nada es más importante de cuanto entra y cuanto sale y en que concepto.
              </p>
            </div>

            <h4 className="text-xl font-bold text-white mt-6 mb-3">Mi sistema de gestión semanal:</h4>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-green-400 mb-2">1. Identificar gastos fijos mensuales</h5>
                <p className="text-sm">Ejemplo: 15.000.000gs (alquiler, colaboradores, suscripciones, etc.)</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-green-400 mb-2">2. Dividir por 4 semanas</h5>
                <p className="text-sm">15.000.000gs ÷ 4 = 3.750.000gs por semana</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-green-400 mb-2">3. Separar ese monto cada semana</h5>
                <p className="text-sm">Cada Lunes empieza una nueva cuenta. Busco juntar esa cantidad en los primeros días (Lunes-Jueves).</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-green-400 mb-2">4. Arqueo de caja semanal</h5>
                <p className="text-sm">Cada fin de semana hago mi arqueo para pagarme lo que quiera sin perjudicar el negocio.</p>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 mb-3">
                Con este sistema, nunca me sorprende ningún gasto y siempre sé exactamente cuánto puedo usar para mi o para reinvertir.
              </p>
              <p className="text-green-200 font-semibold">
                Te recomiendo aplicar la misma fórmula, pues es simple y efectiva siempre que seas disciplinado con tus gastos.
              </p>
            </div>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <p className="text-red-200 font-semibold">
                Si no eres disciplinado con los gastos fijos, prestamos, cuotas, etc., lamentablemente, la vas a pasar mal. Ser disciplinado con esto no es opcional, es obligatorio.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">5.4 Resolución de Problemas y Autonomía Operativa</h2>

            <p className="mb-4">
              Este submódulo propone una idea poderosa: crear presupuestos de autonomía para que el negocio no dependa 100% del dueño para cada decisión. Esta pequeña técnica disminuye un poco las ganancias, pero te da una cantidad de tiempo INCREIBLE extra para hacer aún más dinero.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Qué tipo de problemas pueden resolverse sin intervención del dueño</h3>

            <p className="mb-4">
              Yo tengo un problema personal, soy la persona más metiche que conozco, me gusta meter mi nariz en cada área del negocio a pesar de que ya está delegada a la perfección. Eso fue un error que me costó la salud mental.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">La técnica del presupuesto de autonomía:</h4>
              <p className="text-blue-200 mb-3">
                Esta técnica se basa en olvidarte de las tareas en sí, forzarte a no entrometerte en una tarea que no te corresponde hacer (solo controlar que esté haciéndose bien).
              </p>
              <p className="text-blue-200 font-semibold mb-3">
                La técnica: Poner un presupuesto viable para la solución de problemas.
              </p>
              <p className="text-blue-200">
                En mi caso ese monto es de <strong>100.000gs</strong>. Si hay un problema y puede solucionarse por ese monto o menos, simplemente soluciónalo y no es necesario ni avisarme.
              </p>
            </div>

            <h4 className="text-xl font-bold text-white mt-6 mb-3">Ejemplo real que me pasó hoy:</h4>

            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <p className="text-sm mb-2">
                <strong className="text-green-400">Situación:</strong> Vendemos un producto que viene sin caja y compramos la caja aparte. Hoy los pedidos fueron muchos y no alcanzaron las cajas.
              </p>
              <p className="text-sm mb-2">
                <strong className="text-green-400">Solución del personal:</strong> Sin preguntarme ni avisarme nada, agarró su moto, fue farmacia por farmacia a buscar la caja que necesitábamos.
              </p>
              <p className="text-sm mb-2">
                <strong className="text-green-400">Costo:</strong> La caja que compramos normalmente cuesta 12.000gs, la consiguió en una farmacia por 45.000gs.
              </p>
              <p className="text-sm">
                <strong className="text-green-400">Resultado:</strong> Me evité distraerme, el negocio siguió funcionando sin problemas y no tuve ninguna razón para no cumplir mis actividades del día.
              </p>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 mb-3">
                Eso pasa casi todos los días y a la larga me ahorra una cantidad de tiempo increíble que solo uso para planificar expansiones, optimizar procesos y empezar nuevos proyectos.
              </p>
              <p className="text-green-200 font-semibold">
                Mediante no ser tacaño y ser eficiente, crezco cada día. Te recomiendo que a penas tengas un flujo de caja sano y empieces a delegar funciones, hagas lo mismo.
              </p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold">
                OJO: Ten en cuenta que podrían joderte con algo así que luego de que te informen lo que pasó revisa que todo sea real.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Qué reportes simples se pueden pedir para mantener el control sin estar encima</h3>

            <p className="mb-4">
              Yo no tengo control ni trabajo directo con la mercadería que sale de la oficina todos los días. En cambio, creé junto a mi socio, un sistema de trabajo para los envíos que disminuyó la tasa de errores de envío a un 0%.
            </p>

            <h4 className="text-xl font-bold text-white mt-6 mb-3">Sistema de reporte con fotos:</h4>

            <div className="space-y-3 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-blue-400 mb-2">Paso 1</h5>
                <p className="text-sm">Todos los pedidos están en un Notion, con ubicación, info de factura, dirección de envío y si va pagado o no.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-blue-400 mb-2">Paso 2</h5>
                <p className="text-sm">El personal pone en una mesa grande todos los pedidos.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-blue-400 mb-2">Paso 3</h5>
                <p className="text-sm">Escribe en un papel el nombre del cliente para cada producto y lo pone encima.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-blue-400 mb-2">Paso 4</h5>
                <p className="text-sm">Envía una foto de reporte al grupo del negocio.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h5 className="text-lg font-bold text-blue-400 mb-2">Paso 5</h5>
                <p className="text-sm">Usa esa foto como guía para empaquetar todo correctamente.</p>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold">
                Realmente no vemos la foto, pero pedirle que lo haga hizo que sienta mucho más responsabilidad de que todo se envíe correctamente. Con ese sistema simple, ahorramos tiempo y disminuimos completamente el margen de error humano.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700 rounded-lg p-6 mt-10">
              <h3 className="text-2xl font-bold text-white mb-3">Resumen del Módulo 5</h3>
              <p className="text-gray-300 mb-3">
                Has aprendido que un buen sistema de trabajo es más que herramientas y planillas: es una filosofía de eficiencia adaptativa que te permite trabajar de manera más inteligente, no más dura.
              </p>
              <p className="text-gray-300 mb-3">
                Recuerda dividir tu día en tres áreas (Creativo, Técnico, Administrativo), usa herramientas simples (Notion, Sheets, Calendar, Agenda física), administra tu dinero semanalmente dividiendo gastos fijos por 4, y crea presupuestos de autonomía para que tu equipo resuelva problemas sin depender de ti constantemente.
              </p>
              <p className="text-gray-300 font-semibold">
                El objetivo nunca es trabajar menos, sino de manera más inteligente para liberar tiempo y poder crecer aún más.
              </p>
            </div>
            </div>
          </DemoContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default Module5;
