import React from 'react';
import { ArrowLeft } from 'lucide-react';
import DemoContentWrapper from './DemoContentWrapper';

interface Module2Props {
  onBack: () => void;
  isDemo?: boolean;
}

const Module2: React.FC<Module2Props> = ({ onBack, isDemo = false }) => {
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
            Módulo 2: Branding e Imagen del Negocio
          </h1>

          <DemoContentWrapper isDemo={isDemo}>
            <div className="prose prose-invert max-w-none text-gray-300">
            <p className="text-lg mb-6">
              La imagen no es solo lo que se ve. Es lo que se transmite, lo que tu cliente siente cuando ve tu marca. En este módulo, vas a aprender a construir una identidad visual y verbal coherente con el objetivo de tu negocio. Desde el nombre y los colores, hasta el tono de voz y la presencia en redes, vas a descubrir cómo construir una marca que inspire confianza y profesionalismo, aunque estés empezando desde cero. Porque en un mercado que de por si ya es competitivo, además, es digital, es decir, 100% visual y lo que tu cliente percibe muchas veces vale más que lo que vendes.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">2.1 ¿Qué es el Branding y por qué es importante?</h2>

            <p className="mb-4">
              En este submódulo introducimos el concepto de branding como <strong className="text-white">la percepción que tienen las personas sobre tu negocio</strong>, no solo tu logo o tus colores. Se enseñará cómo construir una imagen que inspire confianza, profesionalismo y cercanía adaptada a la percepción que buscas sobre los valores de tu negocio y cómo esto afecta directamente la decisión de compra del cliente.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Diferencia entre manual de marca e identidad</h3>

            <p className="mb-4">
              Se suelen confundir algunos términos y quiero ayudarte a distinguir algunas cosas, cuando hablamos de identidad, se suele pensar en el logo, los colores, los aspectos característicos del diseño de la marca, en realidad, todo lo que describí antes es parte del manual de marca, el cual es un documento que expresa toda la identidad gráfica del negocio, tipografías, logo, variantes y tipos de uso, colores, todo lo que tiene que ver con la parte gráfica.
            </p>

            <p className="mb-4">
              Pero cuando hablamos de identidad, la cosa cambia drásticamente y es allí en donde más cuesta entrar, es en donde más cuesta destacar y es lo que más cuesta trabajo posicionar, la identidad se refiere a quien eres, a quien es tu negocio, a que se percibe tu negocio, a que le recuerda tu negocio la gente, cuando hablamos de identidad buscamos siempre que las personas que vean cualquier contenido nuestro con el primer milisegundo se den cuenta que se trata de nuestro video, por la música, ambiente, tono de voz, por tu rostro, lo que sea, siempre buscamos una marca memorable y profesional pero lo más importante para la imagen de un negocio es una identidad fuerte, única y fácilmente reconocible.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-2">Diferencias clave</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2">
                <li><strong>Manual de marca:</strong> Logo, colores, tipografías, aspectos gráficos</li>
                <li><strong>Identidad:</strong> Quién eres, qué transmites, cómo te perciben, qué te hace memorable</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">¿Qué siente el cliente cuando ve tu negocio?</h3>

            <p className="mb-4">
              Lo que una persona siente al ver tu negocio es lo más importante cuando hablamos de una identidad fuerte, las identidades pueden causar distintos resultados, con la misma frecuencia de subir contenido a redes sociales, podemos causar distintas impresiones, quiero que veamos un caso real y que hoy, esta muy en tendencia, Beltrán Briones, el Argentino encargado del Marketing de una Constructora.
            </p>

            <p className="mb-4">
              Normalmente la identidad de un negocio de ese calibre se dedica a hacer post serios, videos de obras con un dron, renders lindos y sesiones de fotos profesionales, el llevo el marketing al siguiente nivel dándole una identidad única, la suya, se dedicó a subir más de 20 videos por día hablando de cualquier cosa menos de la constructora, hablando sobre edificios, sobre lugares para comprar, sobre la bolsa de valores, sobre trabajar en una pyme, en distintos formatos, analizando los que tienen más vistas y replicando la formula.
            </p>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-green-300 mb-2">Caso de éxito: Beltrán Briones</h4>
              <ul className="list-disc list-inside text-green-200 space-y-2">
                <li>Más de 10.000.000 de vistas semanales</li>
                <li>Aumentó un 1000% la venta de departamentos</li>
                <li>Cambió la identidad "seria" por una identidad con personalidad</li>
              </ul>
            </div>

            <p className="mb-4">
              Es de eso de lo que se trata la identidad de un negocio, no en sí a poner tu cara o a hacer lo mismo que hace Beltrán, sino en darle algún diferenciador al negocio, piensa en la identidad de un negocio cómo la de una persona, si sos igual a todo el mundo, no vas a destacar por encima de nadie, en cambio, si tu personalidad es muy distinta y sos alguien que llama bastante la atención por tu forma de ser, tarde o temprano vas a estar en ojo de todos.
            </p>

            <p className="mb-4">
              Y en el Marketing Digital, es decir, de redes sociales e internet, todo es un juego de números, 10.000.000 de vistas pueden traducirse a 0,01% de conversión, equivalente a 1.000 ventas que en un ticket promedio de 700.000gs por venta, pueden darte 700.000.000gs en Facturación con alcance en redes sociales.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold">
                La identidad no es el logo, no son los colores en sí, no es nada de eso, se trata de quien seas, del carisma, de cómo se muestre lo mejor de ti y lo mejor de tu negocio de la forma más entretenida posible.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Por qué el alcance influye más que el producto</h3>

            <p className="mb-4">
              Pongamos un ejemplo simple para entender porque la percepción y el alcance importan mucho más que el producto, tu conoces alguna hamburguesería que sea la mejor de tu zona, una hamburguesa que te sea raro que nadie conozca si es tan buena, no importa que tan buena sea, no importa que la carne sea de los mejores animales del mundo y las verduras sean cosechadas en el día, NUNCA será más famosa ni generará más que McDonald's y te voy a explicar porque.
            </p>

            <p className="mb-4">
              El negocio que se enfoca en ser conocido y recordado termina vendiendo más del que vende el mejor servicio, esa es una realidad muy fea y que personalmente me disgusta, pero si la vida da limones debemos hacer limonada, no hay nada peor que tratar de luchar contra una corriente fuerte que no tiene cómo contrarrestarse sin medios masivos.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-6">
              <p className="text-red-200 font-semibold">
                No puedes pretender tener una idea para mejorar la calidad de vida de todo un país y esperar a que funcione si no te escuchan ni en tu barrio, la realidad es que el alcance hoy es más poderoso y sencillo de explotar que nunca.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">2.2 Elementos fundamentales del Branding</h2>

            <p className="mb-4">
              El Branding no es lo más importante hablando en el manual de marca, pero una empresa necesita uno si o si y aquí te explico sobre los pilares visuales y comunicacionales de una marca: nombre, logo, colores, tipografía, tono de voz y estilo de comunicación. Sobre cómo definir estos elementos en función del público objetivo y del mensaje que quieres transmitir como marca.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Cómo elegir el nombre correcto</h3>

            <p className="mb-4">
              Te invito a que veas mi página de TikTok @zarate.watches, donde aplico en directo lo que voy a decirte ahora, el nombre, logo, colores y tipografía, NO IMPORTA inicialmente, puedo profundizar mucho aquí y darte todos los significados de cada tipo de logos, sobre cómo combina tipografías, sobre cómo usar los colores para transmitir un mensaje, porque estudie por 1 año Diseño Gráfico, pero tengo que serte sincero, los tiempos cambiaron.
            </p>

            <p className="mb-4">
              La retención de información de la gente disminuyo y tener buenos colores no te hará memorable jamás, lo que afecta en el desempeño de tus redes sociales es solamente la frecuencia, el carisma, el carácter, el tono de voz, el tema de conversación y la forma de generar interacción y compartidos, lo cual no tiene nada que ver con el Branding que se refiere a un manual de marca.
            </p>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3">Lo que realmente importa en redes sociales:</h4>
              <ul className="list-disc list-inside text-blue-200 space-y-2">
                <li>Frecuencia de publicación</li>
                <li>Carisma y personalidad</li>
                <li>Carácter y autenticidad</li>
                <li>Tono de voz único</li>
                <li>Temas de conversación relevantes</li>
                <li>Capacidad de generar interacción</li>
              </ul>
            </div>

            <p className="mb-4">
              Ahora, el concepto de branding en sí es la identidad visual completa, allí si radica la importancia real del branding, pues es directo al sentimiento de las personas con respecto a tu marca, cada uno de nosotros somos distintos, por ende, lo que a las otras personas les puede llamar la atención de uno mismo des distinto.
            </p>

            <p className="mb-4">
              Te ínsito a que seas 100% auténtico en redes sociales, buscando mostrar lo mejor de vos en cuanto a tu personalidad, carácter o virtudes pero no te estreses en que todo sea perfecto y que ese sea tu Branding, es decir, que tu identidad seas vos mismo, porque al final, cómo te comente, la retención de atención de las personas hoy está por el piso.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 my-6">
              <p className="text-yellow-200 font-semibold mb-3">
                Dato importante:
              </p>
              <p className="text-yellow-200">
                Alguien necesita verde en más de 10 videos distintos para poder recordarte y asociarte a algo, eso quiere decir que si hace unos años tenías que publicar 5 videos para que alguien te ubique y te quiera, hoy debes publicar 50 y con esa recurrencia tan alta, es mucho mejor ser quién eres, sin filtros, sin querer mostrar nada de forma forzada.
              </p>
            </div>

            <p className="mb-4">
              Simplemente mostrar quién eres, que piensas, porque piensas así y mostrar intenciones de ayuda genuinas y reales.
            </p>

            <h2 className="text-3xl font-bold text-white mt-10 mb-4">2.3 Diferenciación visual en un mercado saturado</h2>

            <p className="mb-4">
              Este submódulo profundiza en <strong className="text-white">cómo destacar en mercados donde muchas marcas se ven iguales</strong>. Se abordarán técnicas para encontrar una personalidad visual única, mostrar el propósito de tu negocio y mantener una estética fácilmente reconocible sin caer en la copia de otras marcas.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-3">Branding emocional: conectar con valores y causas</h3>

            <p className="mb-4">
              Hay algo de lo que se habla bastante poco cuando se trata de construir una identidad y es del hecho de conectar, quiero quedarme un poco quieto aquí para que entendamos exactamente que es conectar, porque no se si es algo solo mío pero cuando escucho términos cómo conectar, posicionar, alcanzar, no se entiende muy bien el termino, conectar que y donde y entre quienes, bueno, déjame explicar a que se refiere conectar con un público.
            </p>

            <p className="mb-4">
              Se refiere exactamente a que el público sienta que los estás entendiendo, a que sientan que tienes empatía con ellos, ellos generan una conexión contigo, no tu una con ellos, no es lindo de decir pero es la realidad, si quienes te ven sienten que vos estás en el mismo lugar con ellos, te apoyarán más.
            </p>

            <p className="mb-4">
              Es muy difícil hacer contenido siendo mejor que la audiencia promedio en redes sociales en nuestro país, pues cómo la mayoría se trata de gente mediocre, cuando uno tiene una actitud mediocre genera conexión de la audiencia, pero cuando uno habla de temas serios e importantes la gente no genera la misma interacción y eso hace que el algoritmo no te permita crecer.
            </p>

            <p className="mb-4">
              Solo crece quien habla de cosas importantes y esta dispuesto a tener demasiado odio, ya sea por usar un tono humillante o por generar odio hacia su imagen a través de ser presumidos o desprestigiar a otros, esto a modo de personaje por supuesto, es algo que debes tener en cuenta, no es la única forma de tener audiencia, pero es la más común y es para lo que nuestro público paraguayo se presta con más facilidad el día de hoy.
            </p>

            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-green-300 mb-3">La fórmula para crecer sin odio:</h4>
              <p className="text-green-200 mb-3">
                Construir una audiencia amplia y tener mucho alcance sin recibir todo el odio y haciendo algo útil se puede conseguir, te lo digo por experiencia, por mi caso propio.
              </p>
              <p className="text-green-200 font-semibold mb-2">La fórmula es:</p>
              <ol className="list-decimal list-inside text-green-200 space-y-2">
                <li>Tener un factor que te relacione con las masas</li>
                <li>Mostrar el proceso para lograr algo que ellos también quisieran lograr</li>
                <li>Hablar sobre un 20% de cómo lo lograste o de cómo ellos lo podrían lograr</li>
              </ol>
            </div>

            <p className="mb-4">
              Con esto me refiero a todo, si vendes perfumes, habla de cómo vos creías que los perfumes eran caros hasta que conociste a tu esposa gracias a eso, o algo similar, si le pones onda y con creatividad vas a poder manejar una media de 10k visualizaciones por video que a la larga suman y dan un % de conversión jugoso y sin comprometer tu imagen a futuro.
            </p>

            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700 rounded-lg p-6 mt-10">
              <h3 className="text-2xl font-bold text-white mb-3">Resumen del Módulo 2</h3>
              <p className="text-gray-300 mb-3">
                Has aprendido que el branding va mucho más allá del logo y los colores. La verdadera identidad de tu negocio es lo que transmites, cómo conectas con tu audiencia y cómo te diferencias en un mercado saturado.
              </p>
              <p className="text-gray-300">
                Recuerda: la autenticidad, la frecuencia y la capacidad de generar conexión emocional son más importantes que tener el diseño perfecto. Enfócate en ser genuino, mostrar tu proceso y ayudar a tu audiencia de forma real.
              </p>
            </div>
            </div>
          </DemoContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default Module2;
