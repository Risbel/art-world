import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CardCarousel from "./CardCarousel";

export interface IRevContent {
  content: React.ReactNode;
}

const revContent: IRevContent[] = [
  {
    content: (
      <p className="text-2xl">
        Negociación de un
        <span className="font-semibold text-3xl"> Estatuto específico para las Artes Visuales</span>
      </p>
    ),
  },
  {
    content: (
      <p className="text-2xl">
        Creación de un
        <span className="font-semibold text-3xl"> nuevo paradigma legal y socio-fiscal </span>
        específico para las/os artistas visuales
      </p>
    ),
  },
  {
    content: (
      <p className="text-2xl">
        Creación de una estructura legal que garantice la
        <span className="font-semibold text-3xl"> igualdad de género</span> en las Artes Visuales
      </p>
    ),
  },
  {
    content: (
      <p className="text-2xl">
        Reconocimiento del y de la artista visual como
        <span className="font-semibold text-3xl"> creador/a de patrimonio cultural estatal </span>y protección legal de
        los legados de las/os artistas visuales.
      </p>
    ),
  },
  {
    content: (
      <p className="text-2xl">
        Creación de <span className="font-semibold">estructuras estatales </span>
        permanentes que acompañen y garanticen el cumplimiento de la legislación derivada del Estatuto de las Artes
        Visuales
      </p>
    ),
  },
  {
    content: (
      <p className="text-3xl">
        Aplicación, con rango de ley, del <span className="font-semibold text-4xl">código de buenas prácticas </span>
        en las Artes Visuales
      </p>
    ),
  },
  {
    content: (
      <p className="text-base md:text-2xl">
        <span className="font-semibold text-xl md:text-3xl">
          Compromiso económico y de sostenimiento de las Artes Visuales{" "}
        </span>
        por parte de las instituciones públicas en todos los niveles de la administración: estatal, comunidades
        autónomas y administraciones locales.
      </p>
    ),
  },
  {
    content: (
      <p className="lg:text-xl">
        <span className="font-semibold text-xl lg:text-3xl ">Apuesta por una Educación Artística de calidad</span>,
        aumentando la dotación de medios y dedicación horaria tanto en Educación Primaria como en Educación Secundaria.
        Garantizando, que los criterios de acceso a dichos puestos, se limite a profesionales especializadas/os y
        formada/os en dichas áreas.
      </p>
    ),
  },
  {
    content: (
      <p className="md:text-2xl">
        <span className="font-semibold text-xl lg:text-3xl">
          Promoción de un pacto entre las/os distintos “agentes sociales”
        </span>
        : estado, artistas, galeristas, fundaciones e instituciones, para la creación de un “nuevo trato” (new deal) que
        revierta la actual crisis socio-económica de las Artes Visuales en España.
      </p>
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
      <CarouselContent>
        {revContent.map((rev, index) => (
          <CarouselItem key={index} className="flex basis md:basis-1/3 lg:basis-1/4 py-8">
            <CardCarousel>{rev.content}</CardCarousel>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:hidden flex absolute translate-x-16 bg-white/80 border-none" />
      <CarouselNext className="md:hidden flex absolute -translate-x-16 bg-white/80 border-none" />
    </Carousel>
  );
};

export default CarouselRevindications;
