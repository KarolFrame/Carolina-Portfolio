import React, { useState } from 'react';

export default function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <ProjectsContent />
    </div>
  );
}

const ProjectsContent = () => {
  // Define las imágenes y los datos de los proyectos. Incluye título y descripción.
  const projects = [
    {
      url: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2012/01/perro-cachorro.jpg?strip=all&lossy=1&ssl=1',
      alt: 'Proyecto 1: Una aplicación web',
      title: 'Aplicación Web',
      description: 'Una aplicación web completa y responsiva construida con React y Tailwind CSS, diseñada para gestionar tareas diarias de forma intuitiva.',
    },
    {
      url: 'https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-chocando-cinco-aislado-blanco_346278-1657.jpg?semt=ais_hybrid&w=740&q=80',
      alt: 'Proyecto 2: Una aplicación móvil',
      title: 'Aplicación Móvil',
      description: 'Una aplicación móvil para iOS y Android desarrollada con React Native, que permite a los usuarios rastrear su progreso de fitness y establecer objetivos.',
    },
    {
      url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp',
      alt: 'Proyecto 3: Un panel de visualización de datos',
      title: 'Panel de Datos',
      description: 'Un panel interactivo que visualiza grandes conjuntos de datos de ventas utilizando D3.js, facilitando la toma de decisiones empresariales.',
    },
    {
      url: 'https://static.wikia.nocookie.net/reinoanimalia/images/e/ed/Golden_retriver.png/revision/latest/thumbnail/width/360/height/360?cb=20130303080930&path-prefix=es',
      alt: 'Proyecto 4: Un sitio de comercio electrónico',
      title: 'Sitio de Comercio Electrónico',
      description: 'Una plataforma de comercio electrónico segura y escalable, con integración de pasarelas de pago y un sistema de gestión de productos robusto.',
    },
  ];

  // Usa el estado para rastrear el índice de la diapositiva actual.
  const [currentSlide, setCurrentSlide] = useState(0);

  // Función para ir a la diapositiva anterior.
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? projects.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === projects.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-xl md:h-96 shadow-lg">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Imagen del proyecto */}
            <img
              src={project.url}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl object-cover h-full"
              alt={project.alt}
            />
            {/* Capa de texto superpuesta */}
            <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-end text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm md:text-base font-medium">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de cada diapositiva */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Diapositiva ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Controles del carrusel - botón anterior */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>

      {/* Controles del carrusel - botón siguiente */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Siguiente</span>
        </span>
      </button>
    </div>
  );
};