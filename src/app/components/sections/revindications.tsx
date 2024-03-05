"use client";

import React, { useRef } from "react";
import Arrow from "../arrow/Arrow";
import RevindicationsH1 from "../RevindicationsH1";

const Revindications = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);
  const box7Ref = useRef(null);
  const box8Ref = useRef(null);
  const box9Ref = useRef(null);

  return (
    <div className="flex flex-col gap-4 relative pt-20 px-20">
      <div className="absolute right-32 top-64">
        <RevindicationsH1 />
      </div>

      <div className="flex justify-center -translate-x-24">
        <div className="flex flex-col gap-4 items-center">
          <Arrow color="#fce205" strokeWidth={20} headSize={0} start={box1Ref} end="elem4" />

          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            Creación de una estructura legal <br /> que garantice la
            <span className="font-semibold">igualdad de género</span> <br /> en las Artes Visuales
          </p>
          <div className="bg-yellow-400 relative z-20 rounded-full p-4 rounded-tl-none">
            <div className="rounded-tr-none p-8" ref={box1Ref}>
              <span className="text-5xl">3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex gap-6 items-center">
          <Arrow color="#fce205" strokeWidth={20} headSize={0} start={box1Ref} end="elem2" />
          <div className="bg-yellow-400 relative z-10 rounded-full p-4 rounded-br-none">
            <div className="relative rounded-br-none p-8" id="elem2" ref={box2Ref}>
              <span className="text-5xl">2</span>
            </div>
          </div>

          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            Creación de un
            <span className="font-semibold">
              nuevo paradigma <br /> legal y socio-fiscal
            </span>
            específico <br /> para las/os artistas visuales
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Arrow color="#fce205" strokeWidth={20} headSize={0} start={box3Ref} end="elem2" />

        <div className="flex gap-6">
          <div className="bg-yellow-400 relative z-10 rounded-full p-4 rounded-br-none">
            <div className="relative rounded-tr-none px-10 py-8" id="elem3" ref={box3Ref}>
              <span className="text-5xl">1</span>
            </div>
          </div>

          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            Negociación <br /> de un
            <span className="font-semibold">
              Estatuto específico <br /> para las Artes Visuales
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex gap-4 items-center">
          <div className="bg-yellow-400 relative z-10 rounded-full p-4 rounded-br-none">
            <div className="relative rounded-br-none p-8" id="elem4" ref={box4Ref}>
              <span className="text-5xl">4</span>
            </div>
          </div>

          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            Reconocimiento del y de la artista visual <br />
            como
            <span className="font-semibold">
              creador/a de patrimonio cultural <br />
              estatal
            </span>
            y protección legal de los legados <br />
            de las/os artistas visuales.
          </p>
        </div>
      </div>

      <div className="flex justify-start">
        <Arrow color="#fce205" strokeWidth={20} headSize={0} start={box4Ref} end="elem5" />

        <div className="flex gap-4 items-center">
          <div className="bg-yellow-400 relative z-10 rounded-full p-4 rounded-br-none">
            <div className="relative rounded-br-none p-8" id="elem5" ref={box5Ref}>
              <span className="text-5xl">5</span>
            </div>
          </div>

          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            Creación de <span className="font-semibold">estructuras estatales</span> <br />
            permanentes que acompañen y garanticen <br />
            el cumplimiento de la legislación <br />
            derivada del Estatuto de las Artes Visuales
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Arrow color="#fce205" strokeWidth={20} headSize={0} start={box5Ref} end="elem6" />

        <div className="flex gap-4 items-center">
          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            Aplicación, con rango de ley, <br />
            del <span className="font-semibold">código de buenas prácticas</span> <br />
            en las Artes Visuales
          </p>
          <div className="bg-yellow-400 relative z-10 rounded-full p-4 rounded-tl-none">
            <div className="relative rounded-br-none p-8" id="elem6" ref={box6Ref}>
              <span className="text-5xl">6</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Arrow color="#fce205" strokeWidth={20} headSize={0} start={box6Ref} end="elem7" />

        <div className="flex flex-col gap-4 items-center">
          <div className="bg-yellow-400 relative z-10 rounded-full p-4 rounded-br-none">
            <div className="relative rounded-br-none p-8" id="elem7" ref={box7Ref}>
              <span className="text-5xl">7</span>
            </div>
          </div>

          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            <span className="font-semibold">
              Compromiso económico <br />y de sostenimiento de las Artes Visuales
            </span>
            <br />
            por parte de las instituciones públicas <br />
            en todos los niveles de la administración: <br />
            estatal, comunidades autónomas <br />y administraciones locales.
          </p>
        </div>
      </div>

      <div className="flex justify-start -translate-y-80">
        <div className="flex flex-col gap-4 items-center">
          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            <span className="font-semibold">
              Promoción de un pacto entre las/os distintos <br />
              “agentes sociales”
            </span>
            : estado, artistas, galeristas, <br />
            fundaciones e instituciones, para la creación <br />
            de un “nuevo trato” (new deal) que revierta la actual <br />
            crisis socio-económica de las Artes Visuales en España.
          </p>
          <div className="bg-yellow-400 relative z-10 rounded-full p-4 rounded-tr-none">
            <div className="relative rounded-br-none p-8" id="elem8" ref={box8Ref}>
              <span className="text-5xl">8</span>
            </div>
          </div>
        </div>
        <Arrow color="#fce205" strokeWidth={20} headSize={0} start={box7Ref} end="elem8" />
      </div>

      <div className="flex justify-center -translate-y-80">
        <Arrow color="#fce205" strokeWidth={20} headSize={0} start={box8Ref} end="elem9" />

        <div className="flex gap-4 items-center">
          <p className="border border-yellow-400 p-4 bg-gray-300/60 hover:bg-white/80 cursor-zoom-in transition-colors duration-300 backdrop-blur-md rounded-xl relative z-20 text-2xl">
            <span className="font-semibold">Apuesta por una Educación Artística de calidad</span>, <br />
            aumentando la dotación de medios y dedicación <br />
            horaria tanto en Educación Primaria como <br />
            en Educación Secundaria. Garantizando, <br />
            que los criterios de acceso a dichos puestos, <br />
            se limite a profesionales especializadas/os <br />y formada/os en dichas áreas
          </p>
          <div className="bg-yellow-400 relative z-10 rounded-full p-4 rounded-bl-none">
            <div className="relative rounded-br-none p-8" id="elem9" ref={box9Ref}>
              <span className="text-5xl">9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revindications;
