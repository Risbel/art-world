import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CardCarousel from "./CardCarousel";

export interface IRevContent {
  content: React.ReactNode;
}

const revContent: IRevContent[] = [
  {
    content: (
      <div className="relative flex flex-col justify-center overflow-y-hidden h-full text-pretty">
        <p className="text-3xl">
          Negociación de un
          <span className="font-semibold text-3xl"> Estatuto específico para las Artes Visuales</span>
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="relative flex flex-col justify-center overflow-y-hidden h-full text-pretty">
        <p className="text-2xl md:text-3xl">
          Creación de un
          <span className="font-semibold text-2xl md:text-3xl"> nuevo paradigma legal y socio-fiscal </span>
          específico para las/os artistas visuales.
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="relative flex flex-col justify-center overflow-y-hidden h-full text-pretty">
        <p className="text-2xl md:text-3xl">
          Creación de una estructura legal que garantice la
          <span className="font-semibold text-2xl md:text-3xl"> igualdad de género</span> en las Artes Visuales
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="relative flex flex-col justify-center overflow-y-hidden h-full text-pretty">
        <p className="text-2xl md:text-3xl">
          Reconocimiento a artistas visuales como
          <span className="font-semibold text-2xl md:text-3xl"> creadores de patrimonio cultural estatal </span>y
          protección legal de los legados de las/os artistas visuales.
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="relative flex flex-col overflow-y-hidden h-full text-pretty">
        <p className="text-2xl md:text-3xl">
          Creación de <span className="font-semibold">estructuras estatales </span>
          permanentes que acompañen y garanticen el cumplimiento de la legislación derivada del Estatuto de las Artes
          Visuales
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="relative flex flex-col justify-center overflow-y-hidden h-full text-pretty">
        <p className="text-2xl md:text-3xl">
          Aplicación, con rango de ley, del <span className="font-semibold text-3xl">código de buenas prácticas </span>
          en las Artes Visuales
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="relative flex flex-col overflow-y-hidden h-full text-pretty">
        <p className="text-xl md:text-2xl">
          <span className="font-semibold text-2xl md:text-3xl">
            Compromiso económico y de sostenimiento de las Artes Visuales{" "}
          </span>
          por parte de las instituciones públicas en todos los niveles de la administración: estatal, comunidades
          autónomas y administraciones locales.
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="relative flex flex-col overflow-y-hidden h-full text-pretty">
        <p className="text-2xl">
          <span className="font-semibold text-2xl lg:text-3xl ">Apuesta por una Educación Artística de calidad</span>,
          aumentando la dotación de medios y dedicación horaria tanto en Educación Primaria como en Educación
          Secundaria. Garantizando, que los criterios de acceso a dichos puestos, se limite a profesionales
          especializadas/os y formada/os en dichas áreas.
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="relative flex flex-col overflow-y-hidden h-full text-pretty">
        <p className="text-2xl md:text-2xl">
          <span className="font-semibold text-2xl lg:text-3xl">
            Promoción de un pacto entre las/os distintos “agentes sociales”
          </span>
          : estado, artistas, galeristas, fundaciones e instituciones, para la creación de un “nuevo trato” (new deal)
          que revierta la actual crisis socio-económica de las Artes Visuales en España.
        </p>
      </div>
    ),
  },
];

const CarouselRevindications = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-full"
    >
      <CarouselContent className="lg:pl-8">
        {revContent.map((rev, index) => (
          <CarouselItem key={index} className="flex basis md:basis-1/3 lg:basis-1/4 py-16 lg:py-32">
            <CardCarousel>{rev.content}</CardCarousel>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:hidden flex absolute translate-x-16 bg-white/40 border-none" />
      <CarouselNext className="md:hidden flex absolute -translate-x-16 bg-white/40 border-none" />
    </Carousel>
  );
};

export default CarouselRevindications;
