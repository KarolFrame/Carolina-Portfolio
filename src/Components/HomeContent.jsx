import React from "react";
import { motion } from "framer-motion";

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

const HomeContent = () =>{
    return(<>
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
                className="md:text-5xl text-xl font-bold mt-5"
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
        </div>
    
    </>)
}

export default HomeContent;