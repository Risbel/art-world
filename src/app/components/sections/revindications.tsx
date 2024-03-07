import CarouselRevindications from "../CarouselRevindications";
import RevindicationsH1 from "../RevindicationsH1";

export interface IRevContent {
  content: React.ReactNode;
}

const revContent: IRevContent[] = [
  {
    content: (
      <p>
        Negociación de un
        <span className="font-semibold"> Estatuto específico para las Artes Visuales</span>
      </p>
    ),
  },
  {
    content: (
      <p>
        Creación de un
        <span className="font-semibold"> nuevo paradigma legal y socio-fiscal </span>
        específico para las/os artistas visuales
      </p>
    ),
  },
  {
    content: (
      <p>
        Creación de una estructura legal que garantice la
        <span className="font-semibold"> igualdad de género</span> en las Artes Visuales
      </p>
    ),
  },
  {
    content: (
      <p>
        Reconocimiento del y de la artista visual como
        <span className="font-semibold"> creador/a de patrimonio cultural estatal </span>y protección legal de los
        legados de las/os artistas visuales.
      </p>
    ),
  },
  {
    content: (
      <p>
        Creación de <span className="font-semibold">estructuras estatales </span>
        permanentes que acompañen y garanticen el cumplimiento de la legislación derivada del Estatuto de las Artes
        Visuales
      </p>
    ),
  },
  {
    content: (
      <p>
        Aplicación, con rango de ley, del <span className="font-semibold">código de buenas prácticas</span>
        en las Artes Visuales
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-semibold">Compromiso económico y de sostenimiento de las Artes Visuales </span>
        por parte de las instituciones públicas en todos los niveles de la administración: estatal, comunidades
        autónomas y administraciones locales.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-semibold">Apuesta por una Educación Artística de calidad</span>, aumentando la dotación de
        medios y dedicación horaria tanto en Educación Primaria como en Educación Secundaria. Garantizando, que los
        criterios de acceso a dichos puestos, se limite a profesionales especializadas/os y formada/os en dichas áreas
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-semibold">Promoción de un pacto entre las/os distintos “agentes sociales”</span>: estado,
        artistas, galeristas, fundaciones e instituciones, para la creación de un “nuevo trato” (new deal) que revierta
        la actual crisis socio-económica de las Artes Visuales en España.
      </p>
    ),
  },
];

const RevindicationsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
      {children}
    </div>
  );
};

const Revindications = () => {
  return (
    <div className="h-screen">
      <RevindicationsH1 />
      <CarouselRevindications />
      {/* <div className="grid grid-cols-4 items-start gap-4 relative pt-20 px-20">
        {revContent.map((rev, i) => {
          return <RevindicationsContainer key={i}>{rev.content}</RevindicationsContainer>;
        })}
      </div> */}
    </div>
  );
};

export default Revindications;
