import React from 'react';
import { ArrowLeft } from 'lucide-react';
import DemoContentWrapper from './DemoContentWrapper';

interface Module6Props {
  onBack: () => void;
  isDemo?: boolean;
}

const Module6: React.FC<Module6Props> = ({ onBack, isDemo = false }) => {
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
            Módulo 6: Guía de Inicio + Planificación
          </h1>

          <DemoContentWrapper isDemo={isDemo}>
            <div className="prose prose-invert max-w-none text-gray-300">
            <p className="text-lg mb-6">
              Este módulo es el punto de aplicación estratégica de todo lo aprendido. Luego de haber entendido los pilares del negocio, el branding, los embudos de ventas y la mentalidad emprendedora, llega el momento de pasar a la acción: decidir qué emprender, cómo lanzarlo, cómo sostenerlo y cómo crecer de forma organizada.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">6.1 Cómo elegir correctamente qué emprender</h2>

            <p className="mb-4">
              Este submódulo busca ayudarte a aplicar los conocimientos anteriores para definir con claridad tu producto o servicio. Aprenderás a evaluar el mercado, tus habilidades, tu buyer persona y tu contexto actual para tomar decisiones más estratégicas sobre qué ofrecer, cómo y para quién.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo definir un producto o servicio alineado a tu realidad</h3>

            <p className="mb-4">
              La realidad sobre empezar un negocio es muy, muy amplia, no basta con un producto rentable, hay que tener en cuenta tantos aspectos, cómo tu afinidad con el producto, la logística, la cantidad necesaria para empezar, si se puede hacer un modelo de Dropshipping o si vendes un servicio.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">También influyen tus recursos:</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2">
                <li>Si tu familia tiene un salón que puedas usar</li>
                <li>Si vas a trabajar desde tu habitación (así empecé yo)</li>
                <li>Si tienes un ambiente para tomar buenas fotos y videos</li>
                <li>Cada detalle puede arruinar una operativa</li>
              </ul>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">Consejos que le daría a mi yo del pasado:</h4>
              <p className="text-yellow-200 font-semibold mb-3">
                No pienses demasiado, piensa lo suficiente.
              </p>
              <p className="text-yellow-200 mb-3">
                No pienses en un nombre, logo o producto antes de pensar en:
              </p>
              <ul className="list-disc list-inside text-yellow-200 space-y-2">
                <li>Cómo vas a gestionar la operativa</li>
                <li>Desde dónde trabajarás</li>
                <li>Cuánto dinero tienes</li>
                <li>Una buena caja para administrar ingresos y egresos</li>
                <li>Cuentas de banco preparadas para la exclusividad del negocio</li>
                <li>Planes a futuro</li>
              </ul>
            </div>

            <p className="mb-4">
              Cuando lo tengas todo listo, mira qué tipo de producto o servicio puedes vender que se alinee a ti. Te doy un ejemplo y no quiero ser grosero, pero piénsalo: si eres gordo o gorda, no puedes vender artículos para la salud y mostrar tu cara en el video, es contradictorio y no vas a tener la autoridad que buscas porque tu imagen no lo refleja, a no ser que sea faceless (sin mostrarte) o contrates un Influencer UGC (User Generated Content).
            </p>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 mb-3">
                Ve las cartas que tengas, haz una lista de pros y contras de cada producto y lo que parezca mejor y mejor te relaciones con ese producto o servicio, hazlo de una, empieza.
              </p>
              <p className="text-green-200 font-semibold">
                Grábate, piérdele el miedo a la cámara antes de subir algo, ponte un reto, un desafío y lánzate. El miedo y la vergüenza no facturan, al contrario, te hacen perder dinero.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Errores comunes al elegir un rubro: intuición sin validación</h3>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-red-300 mb-3">Regla clara:</h4>
              <p className="text-red-200 mb-3">
                No confíes en tu intuición al 100% y MENOS tratar de vender algo solo porque a ti te gusta y creas que a los otros también.
              </p>
              <p className="text-red-200 font-semibold">
                Busca negocios que hagan algo similar y ve si qué tal les va, analiza sus ventas y su embudo, ve cómo mejorarlo y si te ves capaz, adelante.
              </p>
            </div>

            <p className="mb-4">
              Pero si ves que los negocios ahí son todos malos aun haciendo las cosas bien, te recomiendo alejarte. No cometas NUNCA el error de creer que porque a ti te gusta algo, también le gustará a los otros.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200">
                Mis negocios que mejor funcionan son de productos que yo nunca me imaginaría comprar para mi o algunos ni siquiera son productos masculinos. Guíate por el mercado, por la demanda del mercado y crea una oferta de ese producto o servicio mejor a la de la competencia, siempre.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">6.2 En qué poner el foco al iniciar</h2>

            <p className="mb-4">
              Al comenzar, muchos emprendedores se enfocan en lo estético: logo, colores, uniforme, packaging... y dejan de lado lo esencial: vender. En este submódulo se analiza qué elementos son prioritarios al momento de lanzar un negocio, según el tipo de producto/servicio y etapa del proyecto.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es urgente y qué es accesorio al comenzar?</h3>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-green-300 mb-3">Lo URGENTE:</h4>
              <p className="text-green-200 mb-3">
                Estar preparado para recibir ingresos es lo primero, es lo principal y es el enfoque principal.
              </p>
              <p className="text-green-200 font-semibold">
                Prepárate para atender a las consultas con el mejor ánimo y mejores intenciones posibles. Recuerda: tus clientes pagan por la comida que tenes en tu mesa, ellos son lo más importante.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-bold text-blue-400 mb-2">Lo ACCESORIO:</h4>
              <p className="text-sm mb-2">
                El Branding al inicio no es relevante. No es relevante que tu logo no sea perfecto.
              </p>
              <p className="text-sm">
                Elegí un nombre fácil de recordar y pronunciar, eso sí, para no cambiarlo 50 veces después, pero aparte de eso, no te obsesiones con el detalle.
              </p>
            </div>

            <p className="mb-4">
              Si estás solo o con 1 persona más, hagan algo lindo, que se vea bien y que sirva, punto. Tampoco hagas planes de expansión antes de empezar, no sabes ni si quiera si va a funcionar de primeras y mucho menos el rumbo que va a tomar si funciona.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">Haz planes a corto y mediano plazo</h4>
              <p className="text-yellow-200">
                Establécete objetivos una vez tengas las herramientas básicas necesarias que son:
              </p>
              <ol className="list-decimal list-inside text-yellow-200 space-y-1 ml-4 mt-2">
                <li>Conocimientos</li>
                <li>Análisis de mercado</li>
                <li>Cajas y Cuentas</li>
                <li>Producto/Servicio</li>
              </ol>
              <p className="text-yellow-200 mt-2">En ese orden.</p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cuándo y por qué invertir en imagen, stock, uniformes y otros</h3>

            <p className="mb-4">
              Ese tipo de cosas son secundarias. Obvio, debe ser presentable y verse en buena calidad todo, nada de fotos pixeladas de internet.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Recomendaciones técnicas:</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2">
                <li>Busca un iPhone 11 para arriba (mejor calidad que Android de la misma gama para redes sociales)</li>
                <li>Usa correcciones de audio para los videos</li>
                <li>Edita en CapCut Pro (págalo, no seas tacaño, es super útil)</li>
                <li>Toca el audio, el brillo, contraste e iluminación</li>
                <li>Haz que se vea bien sin obsesionarte demasiado</li>
              </ul>
              <p className="text-blue-200 font-semibold mt-3">
                Cuando deja de ser rápido y eficiente es cuando sabes que estás exagerando.
              </p>
            </div>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-red-300 mb-3">Regla para gastos no esenciales:</h4>
              <p className="text-red-200 mb-3">
                Cosas como uniformes, local físico, oficina decorada y demás no son necesarias hasta que te sobre para pagar el doble de lo que cuestan.
              </p>
              <p className="text-red-200 font-semibold">
                Por ejemplo, si quieres pintar tu oficina y comprar escritorios nuevos y vas a gastar 4.000.000gs, hazlo solo cuando te sobren 8.000.000gs y si eso ayudará a al menos aumentar la moral para trabajar mejor.
              </p>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-green-300 mb-3">Inversiones que SÍ valen la pena:</h4>
              <ul className="list-disc list-inside text-green-200 space-y-2">
                <li>CapCut Pro</li>
                <li>Canva Pro</li>
                <li>ChatGPT Plus</li>
              </ul>
              <p className="text-green-200 font-semibold mt-3">
                Son grandes inversiones que ayudan un montón en la calidad del trabajo y en la eficiencia del trabajo.
              </p>
            </div>

            <p className="mb-4">
              Invierte en algo solo cuando eso te haga generar más dinero. No busques las apariencias, no busques parecer rico o sentirte rico. Toma conciencia de la situación en donde estás, compórtate como un empresario organizado y exitoso y haz una rutina y ten un sistema de organización de un empresario organizado y exitoso y te garantizo que terminarás siendo uno.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">6.3 Filosofía de Planificación Estratégica</h2>

            <p className="mb-4">
              Se presenta una forma de pensar diferente sobre cómo iniciar un negocio: no poner tu dinero, sino crear estrategias que te permitan generar capital antes de invertir. Esta filosofía permite validar ideas sin endeudarse ni arriesgar más de lo necesario.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Planificación basada en objetivos: Cuánto quiero ganar</h3>

            <p className="mb-4">
              Siempre voy a ser fan de poner solo el mínimo necesario para empezar del dinero de uno. Claro, esto depende de en qué producto o servicio vayas a vender, pero en general, busca no endeudarte, sino que el negocio se pague solo.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Ejemplo práctico: Perfumes</h4>
              <p className="text-blue-200 mb-2">
                Si vas a vender perfumes, compra un combo de 1.000.000gs: decants, guantes y un trípode para grabarte.
              </p>
              <p className="text-blue-200 font-semibold">
                Con eso ya estás más que listo para que el negocio se pague a sí mismo. No pongas más dinero de tu bolsillo en el negocio a no ser de que sea estrictamente necesario.
              </p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">Mi fórmula de planificación:</h4>
              <p className="text-yellow-200 mb-3">
                No te pongas un plazo para algo, porque sin experiencia y aún con experiencia, nunca sabes realmente cuánto te tomará lograr algo.
              </p>
              <p className="text-yellow-200 mb-3">
                <strong>Pero sí ponte un objetivo:</strong> Por ejemplo, los primeros 10.000.000gs facturados.
              </p>
              <p className="text-yellow-200 mb-3">
                Apunta a ello con todas tus fuerzas y cuando lo logres, analiza en cuánto tiempo lo lograste y optimiza tu sistema de trabajo para tratar de lograrlo en menos tiempo.
              </p>
              <p className="text-yellow-200 font-semibold">
                Esa es la mejor manera de mantener la motivación al inicio: con desafíos que se traten no de lograr un objetivo en sí, sino de mejorar tus resultados anteriores constantemente.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">El arte de proyectar tu crecimiento sin endeudarte</h3>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <p className="text-red-200 font-semibold mb-3">
                Endeudarse para emprender no es una buena idea en el 99% de los casos.
              </p>
              <p className="text-red-200">
                Porque el miedo a perder dinero limita las habilidades creativas de uno. Cuando el dinero no es tuyo, sueles tener más limitaciones mentales y asumir "menos riesgo", cuando en realidad todo es riesgoso y es posible que limites tu crecimiento debido a ese miedo natural.
              </p>
            </div>

            <p className="mb-4">
              Busca siempre empezar con capital propio o con el esfuerzo propio. Supón que tienes 0 dinero, no tengas vergüenza de trabajar como loco. Recuerda, el miedo y la vergüenza no facturan.
            </p>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-green-300 mb-3">Ideas para generar capital desde cero:</h4>
              <ul className="list-disc list-inside text-green-200 space-y-2">
                <li>Si siempre hay un camión que llega a descargar cajas, pedí ayudarles a cambio de algo</li>
                <li>Si ves que un perro siempre caga frente a tu vecino, ofrécele limpiar su vereda todos los días</li>
                <li>Vende snacks: empieza con una caja de turrones del Fortis</li>
              </ul>
              <p className="text-green-200 font-semibold mt-3">
                LO QUE SEA. Ningún monto es demasiado pequeño para empezar.
              </p>
            </div>

            <p className="mb-4">
              Puedes emprender con 5.000gs y con 50.000gs y con 500.000gs y con 5.000.000gs y con 50.000.000gs y así hasta el infinito. Puedes hacer de todo.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 mb-3">
                El límite es tu mentalidad y tu disciplina, mejor dicho, falta de disciplina, así como tu ambición o mejor dicho, falta de ambición.
              </p>
              <p className="text-blue-200 font-semibold">
                Si eres alguien ambicioso, disciplinado y con una mentalidad de éxito, lograrás lo que sea que te propongas.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-xl font-bold text-white mb-3">Mi historia:</h4>
              <p className="text-gray-300 mb-3">
                Yo empecé con 200.000gs y 0 de conocimiento. Hubiera elegido empezar con 0 de dinero y todo el conocimiento que estoy dando ahora.
              </p>
              <p className="text-gray-300 font-semibold">
                Sé que con todo lo que aprendiste durante esta guía puedes tener un negocio de más de 10.000.000gs de facturación mensual relativamente fácil en un plazo de unos pocos meses.
              </p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 mb-3 text-lg font-semibold">
                Tu vida puede cambiar si estás dispuesto a pasar por las dificultades que el cambio exige.
              </p>
              <p className="text-yellow-200">
                Rompe las barreras mentales que te impiden crecer, eso es lo más importante dentro de todo porque es una base fundamental.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700 rounded-lg p-6 my-6">
              <h4 className="text-xl font-bold text-white mb-3">3 Libros que cambiaron mi vida</h4>
              <p className="text-gray-300 mb-4">
                Disponibles en formato PDF debajo de esta guía por 50.000gs en combo:
              </p>

              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="font-bold text-purple-300 mb-2">1. "Los Secretos de la Mente Millonaria"</h5>
                  <p className="text-sm text-gray-300">
                    Enseña a cómo modificar tu cerebro para pensar como la gente rica y convertir tus pensamientos a la realidad.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="font-bold text-purple-300 mb-2">2. "El Líder que no tenía Cargo"</h5>
                  <p className="text-sm text-gray-300">
                    Para que aprendas el poder de poner tu 100% en cada tarea y entiendas el valor detrás del esfuerzo y la mejora continua.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="font-bold text-purple-300 mb-2">3. "Vendes o Vendes"</h5>
                  <p className="text-sm text-gray-300">
                    Explica que todo en la vida es una Venta: tu imagen, las ideas, productos, servicios, creencias, todo. Aprende a hacer que las personas te compren lo que sea que vendes de la forma más sana posible para ambas partes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700 rounded-lg p-6 mt-10">
              <h3 className="text-2xl font-bold text-white mb-3">Resumen del Módulo 6</h3>
              <p className="text-gray-300 mb-3">
                Has aprendido que elegir qué emprender debe basarse en el mercado, no solo en tus gustos personales. Valida tu idea observando negocios similares y mejorando su propuesta.
              </p>
              <p className="text-gray-300 mb-3">
                Al iniciar, enfócate en lo esencial: estar preparado para vender y atender bien. El branding perfecto puede esperar. Invierte solo en lo que te haga generar más dinero.
              </p>
              <p className="text-gray-300 font-semibold">
                Con estos conocimientos más los libros recomendados, estás en camino a cambiar el rumbo de tu vida 180° en un tiempo que nunca imaginaste que sería posible.
              </p>
            </div>
            </div>
          </DemoContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default Module6;
