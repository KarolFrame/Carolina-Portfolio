import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Window from "../Components/Window";
import ProjectsContent from "../Components/ProjectsContent";

function Projects() {
  const containerRef = useRef(null);
  const [windowProps, setWindowProps] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      const initialWidth = containerWidth * 0.6;
      const initialHeight = containerHeight * 0.8;

      const initialX = (containerWidth - initialWidth) / 2;
      const initialY = (containerHeight - initialHeight) / 2;

      setWindowProps({ initialX, initialY, initialWidth, initialHeight });
    }
  }, []);


  return (<>
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center p-8"
    >
    {windowProps && (
        <Window
          initialX={windowProps.initialX}
          initialY={windowProps.initialY}
          initialWidth={windowProps.initialWidth}
          initialHeight={windowProps.initialHeight}
          title="Projects"
          container={containerRef}
        >
          <ProjectsContent />
        </Window>
      )}
    </div>
  </>);
}

export default Projects;