import React from 'react';
import { ArrowLeft } from 'lucide-react';
import DemoContentWrapper from './DemoContentWrapper';

interface Module1Props {
  onBack: () => void;
  isDemo?: boolean;
}

const Module1: React.FC<Module1Props> = ({ onBack, isDemo = false }) => {
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
            Módulo 1: Principios del Emprendimiento
          </h1>

          <DemoContentWrapper isDemo={isDemo}>
            <div className="prose prose-invert max-w-none text-gray-300">
            <p className="text-lg mb-6">
              En este primer módulo sentamos las bases del verdadero significado de emprender. Lejos de enfocarnos primero en logos, redes sociales o diseños, vamos directo a lo esencial: <strong className="text-white">un negocio es, ante todo, una estructura que permite el ingreso constante de dinero</strong>, y ese dinero proviene de los clientes. Este módulo te ayudará a entender qué es realmente un negocio, cómo se construye pensando en el cliente como base de este y qué tipos de modelos existen, cómo se estructura la oferta y cuál es el punto de partida legal, mental y estratégico para construir algo real y sostenible.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.1 ¿Qué es realmente un negocio?</h2>

            <p className="mb-4">
              En este submódulo se desarrolla la idea central de que un negocio <strong className="text-white">no es un logo, ni una web, ni las redes sociales</strong>. Es <strong className="text-white">dinero ingresando de forma constante</strong>. El objetivo es romper con las ideas erróneas que giran en torno al emprendimiento estético o superficial, y dejar en claro que lo que sostiene y valida un negocio es su <strong className="text-white">capacidad de generar ingresos reales</strong>. Además, se subraya que <strong className="text-white">los clientes son el centro de todo</strong>, ya que son ellos quienes permiten que exista flujo de caja, crecimiento y sostenibilidad.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es REALMENTE un emprendimiento?</h3>

            <p className="mb-4">
              Pensemos por un segundo, que es un negocio, de la forma más lógica posible, a mi parecer y al de todo el mundo, un negocio es una organización de una o más personas, que hacen una labor en conjunto para ofrecer un producto o servicio a cambio de un retorno económico, es algo muy "Obvio" a lo que no le prestamos atención cuando pensamos en emprender, un negocio no es nada más que el INGRESO de dinero y el EGRESO de un producto o servicio, nada más. Tu negocio no es una página web, eso es un medio de conversión, no es tu cuenta de Instagram, eso es un medio de captación, no es la estructura legal, eso es una formalidad, un negocio es una organización que recibe dinero a cambio de aportar a un cliente lo que desee adquirir contigo. Nada más.
            </p>

            <p className="mb-4">
              Entender esto es muy importante desde el principio para no perder el foco de lo que es realmente importante al pensar en que negocio hacer, muchos quieren ir por cómo se ve un negocio o cómo se va a llamar o incluso que vas a vender, primero, pensemos en quienes nos van a pagar, cómo vamos a recibir y administrar ese dinero, luego en que vamos a ofrecer y luego en cómo lo ofreceremos, por supuesto no es un orden en sí de actividades, es un orden de prioridades.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Por qué enfocarse en el dinero y no en la estética?</h3>

            <p className="mb-4">
              Muchos confunden a un emprendimiento con un perfil de Instagram o con las fotos que publican en mercados públicos como Marketplace o grupos de ventas y le llaman emprendimiento al nombre Instagram de su negocio, es un error que yo mismo cometí al principio, compre el contacto de un proveedor, creamos el nombre del negocio, cree el logo, incluso pensamos que venderíamos más adelante, me dedique a buscar las mejores fotos de algunos proveedores chinos, me concentré en hacer la mejor página del mundo para las menos de 100 personas que me seguían y las 0 personas que me querían comprar, solo hice un cálculo mental de cuánto me salía cada producto y por cuanto más o menos lo podría vender, no tenía ni si quiera una caja de Excel durante el primer año y siendo honestos, hacía las cosas tan mal que ni siquiera la necesitaba porque teníamos 1 a 3 ventas al mes como mucho que luego de pagar costos de envío, delivery, etc, ya no tenía ganancias, así que se perfectamente las consecuencias de empezar un negocio con la idea de que todo debe ser perfecto visualmente y no preocuparme por el foco principal: VENDER.
            </p>

            <p className="mb-4">
              La parte estética y la percepción que tienen de tu marca si es importante, pero no es el 100%, de hecho, en la mayoría de los negocios que no son "Negocios lindos" eso ni si quiera importa, si tienes un taller, da igual que se llame "Taller González" o un nombre super trabajado derivado del griego, siempre que tu contenido sea de calidad, reconocible y la recurrencia sea la adecuada, hasta el nombre más genérico tiene éxito.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">La diferencia entre emprender por hobby vs. emprender para vivir de ello</h3>

            <p className="mb-4">
              Cuando uno piensa en emprender normalmente no lo hace pensando en que sea su actividad principal, lo hace como un "extra" para los gastos o lo hace como un Plan B por si los estudios o el trabajo actual no salgan como lo esperado, la realidad de esto es que un negocio solo prospera cuando el 100% de nuestra fe está en ello, no digo que no pueda ser un proyecto secundario, pero si digo que el enfoque a mediano-largo plazo debe ser que el negocio sea lo principal, y de nuevo, aunque pueda parecer simple, es algo que muchos no tienen en cuenta y trabajan en modo "piloto automático" esperando que el negocio crezca y les de libertad financiera sin dedicarle sangre, sudor y lágrimas.
            </p>

            <p className="mb-4">
              Si empiezas a emprender, según la situación en donde estes, tendrá un peso distinto en tu vida, pues un estudiante que quiere pagar sus estudios y salidas con su pareja no siente la misma responsabilidad que un padre de familia con un hijo enfermo, pero si comparten algo en común: Ser dueños de su tiempo y ser responsables de sus ingresos económicos es lo único que hará una diferencia en su calidad de vida hoy y en el futuro, piénsalo, si dependes de un pago cada X tiempo por parte de un jefe, nunca lograrás tener la vida que realmente quieres, nunca tendrás el tiempo para tu familia que realmente quieres, nunca lograrás nada significativo en tu vida a nivel de libertad o financiero, sin importar cuanto ganes, por la sencilla razón de que no eres tu el responsable de cuanto dinero ingresa a tu cuenta, es tu jefe.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold">
                Nunca voy a apoyar la idea de tener un emprendimiento como un "Por si acaso", porque desde que haces eso estas condicionándote al fracaso y diciéndote a ti mismo que no tienes la capacidad de sacar un proyecto adelante por tu cuenta.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">El cliente como núcleo de todo sistema comercial</h3>

            <p className="mb-4">
              Como dije al principio de este módulo, un negocio no es más que ingreso de dinero y ese ingreso de dinero no viene del gobierno o del cielo ni se consigue de alguna manera mágica, el centro de cualquier negocio SIEMPRE va a ser tu cliente, por eso los negocios que no se enfocan en la satisfacción del cliente fracasan o se estancan tarde o temprano, pues están descuidando el aspecto más importante de todos, su fuente de ingresos.
            </p>

            <p className="mb-4">
              Para un negocio tener clientes es tan importante como el oxígeno que respiramos para la supervivencia, un negocio no sobrevive sin clientes, por ello, desde la elección del producto, los medios de atención, el sistema de entrega del producto o servicio y la experiencia de compra deben pensarse 100% a las necesidades y gustos del cliente y adaptarlas a nuestras posibilidades, es decir, que nuestra operativa se adapte a la buena experiencia y satisfacción del cliente al que queremos vender.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.2 Diferencia entre negocios, autoempleos y emprendimientos comunes</h2>

            <p className="mb-4">
              Se analiza en profundidad la diferencia entre un verdadero negocio y un autoempleo, cómo me gusta llamarlo. Un autoempleo es cuando una persona se crea su propio trabajo, pero no tiene procesos replicables ni delegables, ni proyección de crecimiento. En cambio, un negocio real es una <strong className="text-white">estructura diseñada para crecer sin depender exclusivamente del tiempo del dueño</strong>.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es un autoempleo y por qué no garantiza libertad?</h3>

            <p className="mb-4">
              Cuando empezamos un emprendimiento, debemos tener en claro que el objetivo no es ser nuestros propios empleados, sino en crear una organización que pueda crecer por si misma sin necesitar tu trabajo directo en cada proceso, al inicio el 99% del tiempo nos toca estar en todas las funciones, debemos ser encargados de la logística, la caja, el empaquetado, la atención, el marketing, las ventas, lo se, todo. Pero este es el sacrificio del inicio, el cual es necesario, para conocer cada área de forma que pueda enseñarse a alguien que luego las haga mejor que nosotros, pero al inicio, nos toca a nosotros.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <p className="text-red-200 font-semibold">
                Antes, quiero dejar algo muy en claro, a pesar de que les toque el ego a muchos de quienes lean esto: Otras personas pueden hacer lo que haces exactamente igual de bien o incluso mejor.
              </p>
            </div>

            <p className="mb-4">
              Digo esto porque cuando uno empieza a tener resultados haciendo las cosas bien y piensa en la opción de delegar, siempre encuentra trabas en cada persona que puede ocupar un puesto, con la idea de que nadie lo hará mejor que el, que mentira más grande... Siempre esta bien querer que todo se haga de la mejor forma posible, pero un negocio nunca crece sin delegar funciones, da igual que un paquete no se quede perfectamente simétrico o que el vendedor no use los signos de interrogación como te gustaría, no exijas el 100% de la perfección y el amor con el que haces tus tareas esperando que todos lo hagan exactamente igual de bien desde el primer minuto.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Características de un negocio bien construido</h3>

            <p className="mb-4">
              Un negocio bien construido no es el que está en tendencia, no es el que vende el producto más barato (Que mentira más absurda el creer que el negocio con éxito es el más barato, profundizaremos en ello más adelante.), no es el que tenga el mejor logo y tampoco es del que más se hable ni nada similar. Un negocio bien construido es un negocio con un dueño con visión, es un negocio con un dueño que busca transmitir los VALORES del mismo en cada parte del proceso, tanto interno cómo lo que ven los clientes desde afuera.
            </p>

            <p className="mb-4">
              Un negocio bien construido es aquél que siempre está innovando, adaptándose a los cambios en lugar de quejarse, es el que tiene unos Valores visibles en cada parte del proceso, un negocio bien construido es aquel que NUNCA cree que lo sabe todo, en cambio es el que SIEMPRE está en constante aprendizaje y prueba.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">La importancia de Delegar y en que momento delegar</h3>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 font-semibold">
                Regla de oro: Solo se puede delegar algo cuando conoces Perfectamente la función que debe cumplir ese personal.
              </p>
            </div>

            <p className="mb-4">
              No empieces un negocio con un amigo o familiar y trates de dar a la otra persona funciones que tu aún no domines, porque no vas a ser capaz de administrar la gestión de esas actividades, no vas a tener ninguna autoridad para decir que las cosas se hacen de una u otra forma y allí perderás control de tu negocio.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Mentalidad de crecimiento vs. Mentalidad de estancamiento</h3>

            <p className="mb-4">
              La mentalidad es probablemente lo más importante para un emprendedor, no porque sea un determinante de éxito solo, sino porque combinada con la acción, son no solamente las herramientas más fuertes, sino las únicas, una mentalidad de crecimiento sumada a la acción da como resultado algo memorable, increíble, admirable, en cambio, solo la mentalidad sin acción no trae nada, y la acción con una mentalidad de estancamiento trae... Exacto, Estancamiento.
            </p>

            <p className="mb-4">
              Pero ¿A que nos referimos con una mentalidad de crecimiento? Aquí quiero tocar un tema muy muy importante y quiero hablar de esto con toda la crudeza del mundo, vas a equivocarte, vas a fallar, vas a perder dinero, vas a sentir que estas perdiendo, vas a sentir que esto no es para vos, pero déjame decirte algo, esto no es para nadie, nadie nació con la tolerancia al fracaso tan alta, el emprendimiento es un juego de resistencia, es un juego en donde perder el ego de creer que ya sabes todo, adaptarse a los cambios, aprender constantemente y NO RENDIRSE NUNCA son la receta del éxito como emprendedor.
            </p>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold">
                Si haces esas cosas por el tiempo suficiente, es 100% imposible de que fracases, aunque te tome 5, 10 o 20 años, si nunca te rindes y siempre te adaptas y aprendes de tus errores, lograrás el éxito.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.3 B2C vs. B2B, productos vs. servicios</h2>

            <p className="mb-4">
              En este submódulo se explican los dos grandes modelos de relación comercial: <strong className="text-white">B2C (Business to Consumer)</strong> y <strong className="text-white">B2B (Business to Business)</strong>. Se compara además la venta de productos físicos con la venta de servicios, analizando ventajas y desventajas de cada uno.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es B2C y qué es B2B?</h3>

            <p className="mb-4">
              La Siga B2C se refiere a "Business to Costumer" que significa "Empresa para Clientes" y las siglas B2B "Empresa para Empresas", para no hacértela muy larga, B2C se refiere a venderle al cliente final y B2B se refiere a venderle productos o servicios a otra empresa. Fin.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué cambia en la comunicación, precios y tiempos según el modelo?</h3>

            <p className="mb-4">
              Si vendes al cliente final, puedes inflar tus precios tan alto como el mercado esté dispuesto a pagar en función a la calidad de tu servicio y atención, por otro lado, si trabajas con otras empresas, compites directamente con el precio, pues tu servicio o producto debe traer una rentabilidad a la empresa a la que estés vendiendo, usualmente se pueden ganar los mismos en ambos modelos de negocio, pero en B2C priorizamos calidad y en B2B priorizamos cantidad.
            </p>

            <p className="mb-4">
              Si no tenes los recursos o dinero para conseguir algo a una empresa a mejor precio y mayor cantidad, ve por un modelo B2C, allí aunque no tengas los mejores precios, puedes ser el mejor siempre que, como hablamos, tus valores como empresa estén empapados en la atención al cliente, entrega del servicio y calidad del producto o servicio que vendas.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Cómo atrapamos la atención de cada tipo de cliente?</h3>

            <p className="mb-4">
              Un cliente final (B2C) quiere sentirse especial y llevar lo que más le guste, lo que más le sirva y lo que mejor le haga sentir, por otro lado, una empresa (B2B), siempre buscará ganar la mayor cantidad de dinero, por esa diferencia tan grande de intereses, captar la atención de los clientes varía enormemente en cada modelo de negocio.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Parámetros para elegir el modelo más funcional para vos</h3>

            <p className="mb-4">
              Si tienes la posibilidad de proveer un servicio o un producto a mejor precio para una empresa y de forma más consistente, haciéndoles ganar más dinero usando menos de su tiempo, ve por un modelo B2B, si no tienes los recursos necesarios para una empresa, pero si para dar una excelente experiencia y calidad a un cliente final, ve por un modelo de negocio B2C.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.4 Introducción al "Buyer Persona"</h2>

            <p className="mb-4">
              El Buyer Persona es el perfil ideal del cliente para tu producto o servicio. En este submódulo se enseña cómo <strong className="text-white">definir con precisión ese perfil</strong> para tomar decisiones estratégicas que impacten directamente en las ventas.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué es un Buyer Persona y por qué importa?</h3>

            <p className="mb-4">
              El Buyer Persona es lo más importante luego de nuestros clientes, pero, ¿Por qué digo luego de nuestros clientes? ¿Acaso no son lo mismo? No, bueno, casi, te explico, el buyer persona es un perfil, es una identidad que creamos en base a lo que creemos que será el tipo de persona que comprará nuestro producto o servicio.
            </p>

            <p className="mb-4">
              Es básicamente agrupar a un grupo de personas en lugares similares con los mismos intereses y definir su rango de edad y preocupaciones comunes. Por ejemplo, si quiero emprender vendiendo Remeras Polo, se que el mercado esta Hiper Saturado y hay 10.000 marcas que venden exactamente lo mismo, así que no puedo publicar "Remeras Polo por X precio", porque competiría con todos los otros en el mismo producto y allí no tengo chance de crecer sin un diferenciador.
            </p>

            <p className="mb-4">
              Allí importa el Buyer Persona, pues puedo agarrar un sector específico que tenga un problema que solucionar, por ejemplo, quienes juegan Golf usan Lacoste, pues la tela es flexible, puedo entender el Buyer Persona por un grupo de personas que usa una remera polo con fines deportivos y así hacer marketing con ese enfoque y la atención con ese enfoque y las campañas publicitarias con ese enfoque, así garantizo que no voy a competir directamente con otros negocios en un área saturada.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Qué datos y características debes conocer sí o sí</h3>

            <p className="mb-4">
              Debes agrupar a un Buyer Persona por algunas características básicas y luego de tener interacción con clientes, ya sea por mensajes, comentarios o lo que veas en otros negocios, ir refinando ese perfil, pero inicialmente, debemos agrupar un Buyer Persona por:
            </p>

            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Rango de edad</li>
              <li>Gustos y pasatiempos</li>
              <li>Estilo de vida</li>
              <li>Qué los motiva a comprar</li>
              <li>Razones detrás de la compra</li>
            </ul>

            <p className="mb-4">
              Estos factores nos ayudarán a direccionar el mensaje del marketing y el mensaje de venta de forma mucho más efectiva.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo recopilar esa información (aunque no tengas clientes aún)</h3>

            <p className="mb-4">
              Analiza a otros negocios, a tu grupo de amigos, a tu familia, escucha las quejas de las personas sobre ciertos productos, mira la sección de comentarios de otros negocios que venden lo mismo que tu, encuentra puntos débiles y donde hayan suficientes puntos débiles que puedas contrarrestar con un producto, ahí es.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Error común al definirlo</h3>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <p className="text-red-200 font-semibold">
                No pienses en el Buyer Persona cómo si tu fueras uno, muchos creen que el Buyer Persona es la imaginación de uno de que le gusta a la gente, la realidad es que los negocios no se hacen con el gusto propio, sino con el gusto del cliente.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.5 Crear una oferta irresistible para tu Buyer Persona</h2>

            <p className="mb-4">
              No basta con tener un buen producto: <strong className="text-white">hay que presentarlo de forma deseable y necesaria para el cliente ideal</strong>. En este submódulo se enseña cómo construir una oferta potente basada en beneficios, transformación y valor percibido.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Método NOVA</h3>

            <p className="mb-4">
              El método NOVA es el Método que explica Agus Nievas en su canal de YouTube, contenido que siendo gratuito marco un antes y un después en todos los emprendimientos que empecé y que cuando lo aplique correctamente, logré más de 8 cifras de facturación mensual en muy poco tiempo.
            </p>

            <p className="mb-4">
              Primero, quiero hablarte de que es una Oferta, porque muchos relacionan términos y creen que una oferta y una promoción son lo mismo. Una promoción es un Descuento exclusivo, una rebaja por temporada o algo similar, una Oferta es algo completamente distinto, una Oferta es el beneficio que ofreces al precio que lo ofreces.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 mb-3">
                <strong>Ejemplo:</strong>
              </p>
              <p className="text-blue-200 mb-2">
                <strong>Promoción:</strong> 10% de Descuento en un Perfume
              </p>
              <p className="text-blue-200">
                <strong>Oferta:</strong> "Puedes Oler bien y gustarle a cualquier chica con la que hables en una noche con X perfume, disponible en 30$, son 30$ que equivalen a 16 fines de semana exitosos"
              </p>
            </div>

            <p className="mb-4">
              El método NOVA consiste en: <strong className="text-white">Nicho, Oferta, Vehículo y Atracción.</strong>
            </p>

            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">Nicho:</strong> Hombres que buscan atención femenina</li>
              <li><strong className="text-white">Oferta:</strong> "Puedes Oler bien y gustarle a cualquier chica..."</li>
              <li><strong className="text-white">Vehículo:</strong> Contenido orgánico sobre seducción</li>
              <li><strong className="text-white">Atracción:</strong> El diferenciador que mejor se adapte a nosotros</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.6 Niveles de conciencia del Buyer Persona</h2>

            <p className="mb-4">
              Se analizan los distintos estados en los que puede encontrarse una persona respecto a su problema o necesidad. Desde quienes <strong className="text-white">no saben que tienen un problema</strong>, hasta quienes están <strong className="text-white">listos para comprar una solución específica</strong>.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Las 3 etapas de conciencia de un cliente</h3>

            <p className="mb-4">
              Tenemos 3 niveles de conciencia principales para un Buyer Persona:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">1. Inconsciente</h4>
                <p>No sabe que tiene un problema. Necesita contenido que muestre el problema.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">2. Consciente sin Solución</h4>
                <p>Sabe que tiene un problema pero no sabe cómo resolverlo. Necesita que le muestres que eres experto y puedes ayudarle.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">3. Consciente con Deseo</h4>
                <p>Sabe qué necesita y está buscando. Necesita saber que tienes exactamente el producto que busca.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.7 Temperatura y sofisticación del público</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Diferencias entre públicos fríos, tibios y calientes</h3>

            <p className="mb-4">
              La temperatura se refiere al grado de afinidad que tiene un cliente contigo y con tu negocio:
            </p>

            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">Frío:</strong> No te conoce aún, audiencia nueva</li>
              <li><strong className="text-white">Tibio:</strong> Te sigue e interactúa contigo, agarraron gusto de tu contenido</li>
              <li><strong className="text-white">Caliente:</strong> Te escribe para negociar, está muy cerca de la compra</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Qué es la sofisticación de un mercado</h3>

            <p className="mb-4">
              El grado de sofisticación de mercado se refiere a que tan consciente está el Buyer Persona sobre las distintas calidades, rangos de precio, marcas, modelos, y características del producto o servicio que estés vendiendo.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 font-semibold">
                Regla general: Mientras menos sepa tu cliente sobre lo que ofreces, más debes explicarlo y menos ir al grano directamente y al contrario, mientras más se sepa sobre ese mercado, menos explicación y más al grano.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo destacar cuando todos dicen lo mismo</h3>

            <p className="mb-4">
              Fácil, haz algo distinto. Suena simple y en realidad lo es, si todos ponen una foto de un perfume con las notas (Que por cierto nadie entiende) y el precio, haz algo distinto, haz un video explicando en que situaciones usarías ese perfume y que sensaciones te transmite al olerlo, solo con eso te puedo asegurar que vas a tener un lugar importante en el mercado.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.8 Bases legales para emprender en Paraguay</h2>

            <p className="mb-4">
              El submódulo entrega una <strong className="text-white">guía práctica sobre las formas más comunes de formalizar un negocio en Paraguay</strong>. Se explican las diferencias, beneficios y costos entre no ser contribuyente, inscribirse como unipersonal o crear una EAS.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">No ser contribuyente: beneficios, riesgos y limitaciones</h3>

            <p className="mb-4">
              Cuando empezamos a emprender buscamos gastar lo menos posible, obviamente, pero hay gastos que a la larga traen muchos beneficios, si eres contribuyente, es decir, tener una empresa o actividad comercial registrada, vas a pagar IVA y IRE o IRP, esto puede parecer malo al principio, pues no quieres pagar IVA por las pocas ventas que puedas tener al inicio, pero la ventaja enorme que tendrás a largo plazo son tus documentos que prueban tus ingresos, con los que vas a poder acceder a créditos con proveedores, casas comerciales y prestamos en bancos o entidades financieras para hacer crecer el negocio.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Empresa Unipersonal vs. EAS</h3>

            <p className="mb-4">
              Una EAS es una Empresa por Acciones Simplificadas, una opción rápida para empezar con un emprendimiento, esta lista en poco más de un mes como mucho y es bastante barata de crear, esta te incluye como socio sin necesidad de que seas contribuyente.
            </p>

            <p className="mb-4">
              Una unipersonal es ser contribuyente uno como persona, no recomiendo abrir una actividad comercial bajo una unipersonal, personalmente te recomiendo trabajar con una EAS y una Unipersonal en simultaneo, para separar los ingresos y egresos personales y los del negocio, así construir un buen historial de ingresos y contar con beneficios tanto personales como para tu empresa.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Requisitos, costos aproximados y pasos para legalizarse</h3>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 mb-2">
                <strong>Costos aproximados:</strong>
              </p>
              <ul className="list-disc list-inside text-green-200 space-y-1">
                <li>Apertura: No más de 1.000.000gs</li>
                <li>Mensualidad: Nunca más de 300.000gs</li>
              </ul>
            </div>

            <p className="mb-4">
              A la larga, estos montos son completamente insignificantes así que lo antes que puedas, ve a un estudio contable, pide que te asesoren en cada proceso y empieza a tributar tus ingresos lo antes posible.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">1.9 Introducción al sistema de trabajo y administración</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Qué es un sistema de trabajo y cómo organizar uno</h3>

            <p className="mb-4">
              Un sistema de trabajo sería la metodología de realizar los pagos a proveedores, colaboradores, gastos fijos y pago de salarios y tu propio salario, esto depende de la recurrencia y método de trabajo de cada negocio, pero en general, recomiendo siempre tener un sistema estandarizado que no se rompa.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold mb-3">
                Principios fundamentales:
              </p>
              <ul className="list-disc list-inside text-yellow-200 space-y-2">
                <li>NO tocar dinero del negocio para uso personal NUNCA</li>
                <li>Tener cuentas separadas para el negocio y otra para uso personal</li>
                <li>Designar fechas de pago a proveedores si fuera a crédito</li>
                <li>Destinar fechas de pago de salarios específicas incluyendo el tuyo</li>
              </ul>
            </div>

            <p className="mb-4">
              Recuerda, el dinero del negocio es del negocio, no tuyo, debes designarte un salario, te recomiendo que inicialmente sea un porcentaje de la ganancia y a medida que crezcas designarte un monto independiente a la ganancia.
            </p>

            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700 rounded-lg p-6 mt-10">
              <h3 className="text-2xl font-bold text-white mb-3">Resumen del Módulo 1</h3>
              <p className="text-gray-300">
                Has completado el primer módulo donde aprendiste los fundamentos esenciales del emprendimiento: qué es realmente un negocio, la importancia del cliente, los modelos B2C y B2B, cómo definir tu Buyer Persona, crear ofertas irresistibles, los niveles de conciencia del cliente, y las bases legales para emprender en Paraguay. Estos conceptos son la base sólida sobre la cual construirás tu emprendimiento exitoso.
              </p>
            </div>
            </div>
          </DemoContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default Module1;
