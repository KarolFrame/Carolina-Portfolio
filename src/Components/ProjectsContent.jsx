import React, { useState } from 'react';

const ProjectsContent = () => {
const projects = [
  {
    img: '/Images/QuizOver.png',
    url: 'https://sample-service-name-6pqe.onrender.com/', 
    alt: 'QuizOver trivia game screenshot',
    title: 'QuizOver',
    description: 'A trivia web app built with React, AI integration, external APIs, and Unity WebGL.',
  },
  {
    img: '/Images/Videogames.png',
    url: 'https://carolina-perez-portfolio.netlify.app',
    alt: 'Personal videogame portfolio screenshot',
    title: 'KarolFrame',
    description: 'A personal portfolio showcasing original videogame projects and interactive experiences.',
  },
  {
    img: '/Images/UNO.png',
    url: 'https://karolframe-uno-game.netlify.app',
    alt: 'Uno card game screenshot',
    title: 'UNO Web Game',
    description: 'A classic UNO card game recreated from scratch using pure HTML, CSS, and JavaScript.',
  },
  {
    img: '/Images/ToDo.png',
    url: 'https://karolframe-to-do.netlify.app',
    alt: 'Task management web app screenshot',
    title: 'KarolDev',
    description: 'A task management web app for organizing projects. Create lists and tasks, and drag tasks between lists. Built with React.',
  },
];
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? projects.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === projects.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative w-9/10 h-9/10 mx-auto mt-5" data-carousel="static">
      <div className="relative h-10/10 overflow-hidden rounded-xl shadow-lg">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={project.img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl object-cover h-full"
              alt={project.alt}
            />
            <div className=" bg-black-80 absolute mb-5 inset-0 p-6 flex flex-col justify-end text-white">
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="text-3xl rounded-md p-2 bg-black/20 md:text-4xl font-bold mb-2">
                {project.title}
              </a>
              <p className="text-sm rounded-md p-2 bg-black/20 md:text-base font-medium">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black/20 rounded-md absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/20'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Diapositiva ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Siguiente</span>
        </span>
      </button>
    </div>
  );
};

export default ProjectsContent;