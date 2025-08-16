import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Window from "../Components/Window";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -200 }, 
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function Home() {
  const containerRef = useRef(null);
  const [windowProps, setWindowProps] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      const initialWidth = containerWidth * 0.8;
      const initialHeight = containerHeight * 0.8;

      const initialX = (containerWidth - initialWidth) / 2;
      const initialY = (containerHeight - initialHeight) / 2;

      setWindowProps({ initialX, initialY, initialWidth, initialHeight });
    }
  }, []);


  return (
    <>
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center p-8"
    >
    {windowProps && 
    <Window           
      initialX={windowProps.initialX}
      initialY={windowProps.initialY}
      initialWidth={windowProps.initialWidth}
      initialHeight={windowProps.initialHeight}
      title="Wellcome">
    <div className="flex items-center justify-center h-full">
          <motion.div
            className="z-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <motion.h1 
                className="md:text-8xl text-2xl font-bold mb-5"
                variants={itemVariants}
              >
                WELLCOME TO MY PORTFOLIO
              </motion.h1>
              <motion.h1 
                className="md:text-5xl text-xl font-bold mt-2"
                variants={itemVariants}
              >
                Hi! I'm Carolina Pérez
              </motion.h1>
              <motion.h3 
                className="mt-4 md:text-xl"
                variants={itemVariants}
              >
                Front-End Developer specializing in creating modern web applications and interactive animations.
              </motion.h3>
            </div>
          </motion.div>
        </div></Window>}</div>
    </>);
}

export default Home;