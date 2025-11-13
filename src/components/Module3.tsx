import React from 'react';
import { ArrowLeft } from 'lucide-react';
import DemoContentWrapper from './DemoContentWrapper';

interface Module3Props {
  onBack: () => void;
  isDemo?: boolean;
}

const Module3: React.FC<Module3Props> = ({ onBack, isDemo = false }) => {
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
            Módulo 3: Embudo de Ventas
          </h1>

          <DemoContentWrapper isDemo={isDemo}>
            <div className="prose prose-invert max-w-none text-gray-300">
            <p className="text-lg mb-6">
              El objetivo de este módulo es brindar una comprensión clara y directa sobre cómo funciona un embudo de ventas aplicado a un microemprendimiento o a un negocio con proyección de crecimiento. No se trata de conceptos abstractos, sino de cómo una persona que no te conoce puede convertirse en cliente, paso a paso. Aquí vamos a desarmar el proceso completo desde el primer contacto hasta la fidelización, usando lenguaje simple, ejemplos reales y aplicables desde el día 1.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">3.1 ¿Qué es un embudo de ventas y para qué sirve?</h2>

            <p className="mb-4">
              Este submódulo sentará las bases del embudo como enfoque principal en la estructura de trabajo. Explica cómo organizar y entender el recorrido del cliente, desde que escucha hablar de tu marca por primera vez, hasta que te compra y vuelve a hacerlo. Un embudo de ventas bien estructurado permite vender de forma constante, organizada y escalable, en lugar de esperar a que "alguien quiera comprar", trabajaremos en entender cada proceso por donde pasa el cliente y el mensaje de venta que necesita.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Qué es un embudo y cómo se aplica a cualquier negocio</h3>

            <p className="mb-4">
              Un embudo, gráficamente es un proceso por el cual se filtran a las personas que nos ven, que interactúan con nosotros, Imagina un embudo normal de cocina, literalmente, imagina que lo partes en 5 de arriba a abajo, verás cómo el embudo en cada parte, va haciéndese más pequeño, un embudo es la representación gráfica de la interacción normal de clientes dentro de tu negocio.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">El poder de las redes sociales:</h4>
              <p className="text-blue-200 mb-3">
                Antes, un negocio debía tener una tienda física, pagando alquiler, empleados, luz, equipar el lugar para competir con negocios similares, trabajar la atención de cada cliente en particular, expuestos a robos y a pérdidas materiales.
              </p>
              <p className="text-blue-200 font-semibold">
                Hoy no es necesario. Si trabajamos con redes sociales, orgánicamente y con tráfico pago, estaremos bajo la posibilidad de llegar a más de 3.000.000 de personas que en su gran mayoría SI están interesadas en lo que ofreces, pues el algoritmo está diseñado para mostrarte lo que quieres ver.
              </p>
            </div>

            <p className="mb-4">
              El alcance de las redes sociales es algo que ni de cerca está explotado aquí en nuestro país y vos que estas leyendo esto estas llegando temprano a esta información. Las redes sociales funcionan de forma simple bajo este embudo:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">1. Captación (200.000 vistas)</h4>
                <p>Contenido que ves en redes sociales de contenido rápido</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">2. Interés (2.000 seguidores)</h4>
                <p>Personas que decidieron seguirte</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">3. Interacción (200 personas)</h4>
                <p>Quienes interactúan contigo directamente</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">4. Venta (20 clientes)</h4>
                <p>Los que deciden comprarte</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">5. Fidelización (5 recurrentes)</h4>
                <p>Compradores frecuentes y recomendadores</p>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <p className="text-green-200 font-semibold">
                No tener presencia en redes sociales hoy es cómo no tener cuenta bancaria, los tiempos cambiaron y el marketing que sirve es digital, es donde está la atención de tus clientes y por ende, es donde debes que estar vos.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Mensaje de Venta para cada fase del embudo</h3>

            <p className="mb-4">
              Quiero que recuerdes los niveles de conciencia y la temperatura, esto es similar, no es lo mismo, pues el embudo se refiere específicamente al lugar en donde se encuentra tu cliente dentro del embudo de tu negocio. El embudo no es algo 100% estricto, tu captación puede ser con carteles en la calle o puede ser con videos en redes sociales, el interés puede ser de que le saquen foto a tu cartel o que te sigan en tu cuenta de Instagram, la interacción puede ser una visita al local o puede ser un mensaje de WhatsApp, la venta puede ser presencial o virtual y la fidelización puede ser recurrencia o puede ser recomendación.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">Mensajes según la fase:</h4>
              <ul className="list-disc list-inside text-yellow-200 space-y-2">
                <li><strong>Captación:</strong> Diferénciate por completo de la competencia</li>
                <li><strong>Interés:</strong> Muestra razones para confiar en tu negocio</li>
                <li><strong>Interacción:</strong> Da un mensaje CLARO sobre lo que queremos que haga</li>
                <li><strong>Venta:</strong> Hazlo sentir especial, entiéndelo genuinamente</li>
                <li><strong>Fidelización:</strong> Trátalos particularmente bien para que recomienden</li>
              </ul>
            </div>

            <p className="mb-4">
              Si no estás dispuesto de corazón a genuinamente querer a tus clientes, no estás listo para tener un emprendimiento exitoso, son tus clientes quienes van a poner comida en tu mesa y esa es razón suficiente para quererlos y buscar mejorar su calidad de vida con tus productos y servicios.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Por qué vender sin embudo es como tirar volantes al viento</h3>

            <p className="mb-4">
              Cuando no tenemos definido un embudo de forma clara, cometemos algunos errores que matan a nuestro negocio y se nos pierden los clientes, imagina el embudo cómo un embudo real, por donde pasa arena, cuando ese embudo no está bien definido y medido, es cómo un embudo con agujeros por donde se escapa la arena y caen en otro recipiente (La competencia).
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <p className="text-red-200 font-semibold">
                Si tu le hablas bien de tu producto y les llamas la atención pero descuidas el hecho de hacer que interactúen contigo, sorpresa, interactuarán con la competencia. Si no tienes un embudo, entrarán al embudo de otro negocio y no al tuyo, así que esto no es negociable, es de lo más importante y es primordial, debes tener un embudo bien definido.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">3.2 Etapa de Captación</h2>

            <p className="mb-4">
              Esta etapa se enfoca en cómo atraer la atención del público objetivo. Aquí explicamos las distintas formas de llegar a clientes nuevos, ya sea por campañas pagadas o contenido orgánico. Se analizan qué estrategias sirven para distintos productos, cómo generar curiosidad y cómo captar sin caer en el error de atraer a personas que no tienen intención de comprar.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Captación orgánica vs. captación paga: diferencias y combinaciones efectivas</h3>

            <p className="mb-4">
              Cuando hablamos de captación, exclusivamente en redes sociales, tenemos principalmente 2 formas de hacerlo:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Contenido Orgánico</h4>
                <p className="mb-2">Contenido que publicamos de forma gratuita a Instagram Reels, Facebook Reels, TikTok, etc.</p>
                <p className="text-sm text-gray-400">Este contenido solo funciona si es bueno, no hay forma de tener alcance aquí si el contenido no entretiene y no retiene a la audiencia. El algoritmo determina la aceptación de tu video y si es bueno, se muestra a más personas.</p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-xl font-bold text-green-400 mb-2">Contenido Pagado (Pauta)</h4>
                <p className="mb-2">Anuncios en Facebook, Instagram u otras plataformas.</p>
                <p className="text-sm text-gray-400">Como estas pagando, Facebook lo muestra directamente a las personas aunque no sea lo mejor de lo mejor. No necesitas la misma recurrencia de publicación que un contenido orgánico.</p>
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Caso de éxito personal:</h4>
              <p className="text-blue-200 mb-3">
                Yo empecé un emprendimiento de vender relojes, decidí entretener a las personas y darles una razón para que me sigan viendo, a esto yo lo llamo <strong>Marketing de Continuidad</strong>, en donde quien te ve, tiene interés de cómo seguirás avanzando en el proyecto que estás mostrando.
              </p>
              <p className="text-blue-200 font-semibold">
                Tuve más de 700.000 vistas en 3 meses con menos de 25 videos, esos videos me generaron más de 60 ventas que se traduce a más de 50.000.000gs facturados en menos de 3 meses y eso que era un HOBBY.
              </p>
            </div>

            <p className="mb-4">
              Meta ADS es una navaja de doble filo, porque es excelente para tener recurrencia de interacción pero es un derroche de dinero si no se maneja bien, el contenido que funciona orgánicamente no siempre funciona en pautas y viceversa.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">La importancia del primer impacto: ganchos reales, mensajes de venta y llamados a la acción</h3>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold mb-3">
                Es una mentira que un gancho es de los primeros 3 segundos:
              </p>
              <p className="text-yellow-200">
                Si el primer frame, la primera cosa que ves al scrollear en un video, no te llama la atención, pasas instantáneamente al próximo, es así, no son 3 segundos, es el primer micro segundo, es lo que ven el primer micro segundo, ese es el verdadero gancho para un video.
              </p>
            </div>

            <p className="mb-4">
              Sobre el mensaje de venta, en redes de contenido rápido como Reels y TikTok, tu mensaje de compra NUNCA debe ser "Compren", tu mensaje de compra debe ser algo como: "Hoy me levante con ganas de gastar dinero, fui a comprar estos relojes para ponerlos en venta y miren que belleza...". Aquí en ningún momento insinuaste a que te compren, aquí entretuviste y generaste deseo.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo definir objetivos claros para tus anuncios o publicaciones</h3>

            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">Contenido orgánico:</strong> Buscar entretener y llevar a la audiencia al siguiente paso del embudo</li>
              <li><strong className="text-white">Contenido pago:</strong> Buscar llevar a la acción directamente, a la interacción o a la compra</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">3.3 Etapa de Interés</h2>

            <p className="mb-4">
              En el 99% de los casos, quienes pasen por nuestro embudo y pasen a la etapa del interés, aún no tienen un deseo real de compra ni de interacción ni de formar parte de ninguna comunidad, es nuestro contenido recurrente, cómo historias y publicaciones, las que los hará estar seguros de lo que quieren de nosotros y seguros de que quieren interactuar con nosotros.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">El sentimiento humano más fuerte: El sentido de pertenencia</h3>

            <p className="mb-4">
              Quiero que pienses en cuando éramos niños, en especial si eras de mudarte constantemente de escuela o si te costaba adaptarte a un grupo, quiero que pienses en cómo te sentías o en cómo se sentían los niños que no encajaban en el grupo popular o en un grupo en sí. Una persona que no se siente parte de algo es una persona incapaz de narrar sus problemas y necesidades.
            </p>

            <p className="mb-4">
              Como emprendedores, debemos ser capaces de abrir el dialogo con nuestros clientes y hacer que nos transmitan sus miedos, sus gustos, sus hobbys, sus ideas, sus pensamientos, sus problemas, sus necesidades, porque es nuestra responsabilidad ayudarlos a mejorar su vida con nuestro negocio.
            </p>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-green-300 mb-3">En esta fase de interés:</h4>
              <p className="text-green-200 mb-2">
                Tu misión siempre será abrir el dialogo con tus seguidores. Hoy, con las herramientas de responder comentarios en Instagram y TikTok, con la caja de preguntas en Instagram, esto es particularmente fácil.
              </p>
              <p className="text-green-200 font-semibold">
                Interésate por sus problemas cotidianos, sus preocupaciones, sus experiencias pasadas, eso hará que entren en confianza contigo.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Creación de comunidad cómo pilar de la conexión con el cliente</h3>

            <p className="mb-4">
              Piensa en una comunidad cómo un grupo de personas con los mismos gustos, deseos, problemas, necesidades, personalidades y carácter similares, preferencias similares, no como una lista de clientes. Te sorprenderás al entender de que cuando tu cliente es escuchado y comprendido estará más dispuesto a comprar y a comprar por un ticket más alto.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 italic mb-2">
                "Ayude a un hombre a llegar a la cima, cuando lo logró me di cuenta que yo también había llegado"
              </p>
              <p className="text-blue-200">
                Cuando una persona se siente escuchada y comprendida automáticamente genera un vínculo. Crear una comunidad real y genuina sin interés directo de venta, paradójicamente aumentará tus ventas.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Estrategias de generación de comunidad e interacción</h3>

            <p className="mb-4">
              Hay un tipo de estrategia en particular que me gusta mucho y es con votaciones y cajas de preguntas. Por ejemplo, si vendes ropa streetwear, puedes hacer durante 1 día una estrategia como la siguiente:
            </p>

            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Ejemplo práctico:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Grábate hablando: "Hoy quiero hablar a las mujeres, me salió un video de una chica quejándose de las Oversize..."</li>
                <li>Genera dialogo, las mujeres empezarán a hablar</li>
                <li>Usa dos comentarios distintos y contradictorios para crear una votación</li>
                <li>Responde a un comentario sobre precio ofreciendo valor</li>
                <li>Lanza una historia con un Código promocional o CTA específico</li>
              </ol>
            </div>

            <p className="mb-4">
              De esta forma, hiciste sentir cómodas a ambos grupos, entendidas y les diste solución. Este tipo de interacciones hará que la gente interactúe y hará que quienes aún no se animaron a interactuar, empiecen a interactuar.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">3.4 Etapa de Interacción</h2>

            <p className="mb-4">
              Una vez que alguien interactúa directamente con nosotros, nuestro trato y soluciones a su situación van a ser la diferencia en si nos compran o no. Aquí vas a entender mucho más sobre el proceso de razonamiento del cliente para decidir si comprarte o no.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo responder mensajes de forma profesional</h3>

            <p className="mb-4">
              Un vendedor que responde a mensajes tiene una función muy clara: Hacer que el cliente decida cual es el mejor producto para él o ella y eliminar la fricción de compra.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-red-300 mb-2">Error común:</h4>
              <p className="text-red-200 mb-3">
                Si alguien te pregunta que opciones tienes disponibles y tú le pasas las opciones y le dices por un producto "Este sale muy bien a todos le gusta" sin saber que le gusta a tu cliente, probablemente ya fracasaste.
              </p>
              <p className="text-red-200 font-semibold">
                Tu misión al vender es ayudarle al cliente a que decida la opción que mejor le va, en lugar de recomendarle un producto sin conocer sus necesidades.
              </p>
            </div>

            <p className="mb-4">
              Abrí el dialogo preguntándole cuál de las opciones que dispones cree que le irían mejor, cual le servirá más, pregúntale para que tipo de situaciones busca cierto producto y no recomiendes nada preciso sin saber que exactamente está buscando.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Los detalles qué más importan: tiempo de respuesta, claridad, tono</h3>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">Tiempo de respuesta crítico:</h4>
              <p className="text-yellow-200 mb-2">
                Quien te contacta está interesado en ese momento pero a los 10 minutos quizás ya se le paso la calentura y ya se replanteo todo. Si le respondes 10 minutos después probablemente perdió el 50% del interés.
              </p>
              <p className="text-yellow-200 font-semibold">
                Tu cliente quiere todo para ya y si puedes responder a los 10 segundos de que te escriben, hazlo.
              </p>
            </div>

            <p className="mb-4">
              Sobre el tono: recuerda, tu cliente es importante para ti, cómo un amigo, pero no es un amigo aún, no lo trates coloquialmente. Trátalo cómo una persona seria, no seas aburrido pero trátalos con un grado de respeto superior. Dile Sr. Srta, dile "¿Cómo está usted el día de hoy?" en lugar de "Hola que tal".
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo mantener conversaciones con intención de venta sin presionar</h3>

            <p className="mb-4">
              Cuando tu muestras un cierto grado de intención de venta intenso, tu cliente inconscientemente interpreta que no tienes dinero, que estas apretado, que te importa más el dinero que su vida. Siempre esfuérzate en demostrarle que te interesa su problema por encima de la venta.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 italic mb-2">
                Ejemplo de mensaje correcto:
              </p>
              <p className="text-blue-200">
                "Personalmente, este producto no creo que llene tus expectativas, me conviene vendértelo, pero no puedo dejarte salir de aquí sabiendo que no te ayude a elegir la mejor opción"
              </p>
            </div>

            <p className="mb-4">
              Estas prácticas me ayudaron a subir de un 5% de conversión por mensajes provenientes de ADS a más del 15% en tan solo un mes, desde que empecé a tratar bien a los clientes y a preocuparme por lo que les servirá, vendí más.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">3.5 Etapa de Fidelización</h2>

            <p className="mb-4">
              La relación con un cliente no termina cuando le vendes algo. En realidad, ahí empieza lo que diferencia a un negocio bueno de uno increíble: Que el cliente vuelva, te recomiende y compre más veces. Esta sección se centra en cómo ofrecer una experiencia postventa, cómo pedir feedback, cómo agregar valor después de la compra y cómo diseñar pequeñas estrategias de fidelización sencillas pero potentes.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Tipos de fidelización según el Ticket</h3>

            <p className="mb-4">
              Quiero hablarte de un concepto que quizás no hayas escuchado antes, el CLV en los productos, (Customer Lifetime Value), este término se refiere a cada cuanto el cliente va a necesitar volver a comprarte de nuevo.
            </p>

            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-bold text-blue-400 mb-2">Ejemplos de CLV:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>CLV Largo:</strong> Auto (5 años), se fideliza con recomendación</li>
                <li><strong>CLV Corto:</strong> Cuentas de Spotify (mensual), se fideliza con recurrencia</li>
              </ul>
            </div>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <p className="text-blue-200 font-semibold text-center text-xl">
                Un CLV largo, se fideliza con recomendación y un CLV corto se fideliza con recurrencia.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Fidelización de ventas con CLV corto</h3>

            <p className="mb-4">
              Cuando nuestro producto o servicio es algo recurrente, coleccionable o barato (ropa, relojes, accesorios, perfumes, cuentas, comida, etc), tenemos mucha chance de vender y vender y vender una y otra vez al mismo cliente.
            </p>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-green-300 mb-3">Estrategia de ejemplo con relojes:</h4>
              <p className="text-green-200 mb-3">
                Consigo cadenas a 2.000gs. Si a un producto le gano 200.000gs, a ese cliente puedo mandarle una cadena de regalo, pero NO en la compra del reloj.
              </p>
              <p className="text-green-200 mb-3">
                Una semana después, le escribo: "Hola! Estuve trabajando en agregar esta cadena a mi catalogo para venderla porque me pareció muy linda y vi nuestro chat, creo que va a combinar excelente con el reloj que elegiste, ya te la mandé a tu dirección y el envío esta pagado, deberían entregártela mañana."
              </p>
              <p className="text-green-200 font-semibold">
                Este cliente va a pensar "¿por qué esta persona me trata así de bien?", me va a agradecer y por el principio de reciprocidad, puedo sacarle conversación y ofrecerle otro producto complementario.
              </p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold mb-2">
                Recuerda:
              </p>
              <p className="text-yellow-200">
                No seas una persona tacaña para estas cosas, trátalos bien, ser tacaño es un archivo mental de la pobreza. Ser tacaño con el cliente que te compra sin problemas solo te hará perder ventas a futuro, piensa más allá de tu billetera hoy, piensa en lo que hará que tu billetera este completamente llena y abundante el día de mañana.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Fidelización de ventas con CLV largo</h3>

            <p className="mb-4">
              Cuando nuestro producto o servicio no es algo recurrente o es algo según necesidad (servicio eléctrico, plomería, vehículos), la cosa cambia. Aquí ya no podemos buscar que un cliente nos vuelva a comprar el mismo producto, pero si podemos hacer 2 cosas: un UpSell (Vender un producto extra) y un sistema de referidos.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Estrategia de ejemplo con vehículos:</h4>
              <ol className="list-decimal list-inside text-blue-200 space-y-2">
                <li>Habla con un Lavadero de confianza para consultar precios (aprox. 100.000gs por 3 meses)</li>
                <li>Ofrécele un lavado gratis al mes por 3 meses al comprar el vehículo</li>
                <li>A cambio, el cliente pone un Sticker en el vidrio: "Compre mi Vehículo en [Nombre] y me encanta!! Contacto: 0980-000-000"</li>
                <li>Ofrece retirarlo gratis en el primer lavado gratis</li>
              </ol>
              <p className="text-blue-200 font-semibold mt-3">
                Tu cliente no solo hará marketing todo el día, sino que te recomendará por tu calidad de atención, transparencia y confianza.
              </p>
            </div>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-red-300 mb-2">Concepto clave: Efecto bola de nieve</h4>
              <p className="text-red-200">
                Todo es un efecto de bola de nieve, lo bueno que hagas se multiplicará en resultados a la larga y lo malo que hagas se multiplicará en tus resultados a la larga. Haz las cosas bien, de buena fe, con buen corazón y tu futuro en cualquier emprendimiento será exitoso.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700 rounded-lg p-6 mt-10">
              <h3 className="text-2xl font-bold text-white mb-3">Resumen del Módulo 3</h3>
              <p className="text-gray-300 mb-3">
                Has aprendido sobre el embudo de ventas completo: desde la captación hasta la fidelización. Entiendes ahora que cada etapa requiere un mensaje diferente y un trato específico.
              </p>
              <p className="text-gray-300">
                Recuerda: trata a tus clientes con genuino interés en mejorar su vida, responde rápido, ayúdalos a elegir lo mejor para ellos sin presionar, y fidelízalos según el tipo de producto que vendas. Un embudo bien definido es la diferencia entre tirar volantes al viento y construir un negocio exitoso y escalable.
              </p>
            </div>
            </div>
          </DemoContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default Module3;
