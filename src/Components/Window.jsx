import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Window = ({
  children,
  initialWidth = 600,
  initialHeight = 400,
  initialX = 100,
  initialY = 100,
  title = "Mi Ventana",
  container,}) => {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(null);

  const startRef = useRef(null);
  const windowRef = useRef(null);

  const [isActivated, setIsActivated] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      e.preventDefault();
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);

      if (isDragging && startRef.current) {
        const { mouseX, mouseY, startX, startY } = startRef.current;
        const dx = clientX - mouseX;
        const dy = clientY - mouseY;
        setX(startX + dx);
        setY(startY + dy);
      }

      if (isResizing && startRef.current) {
        const {
          mouseX,
          mouseY,
          startX,
          startY,
          startWidth,
          startHeight,
          direction,
        } = startRef.current;

        const dx = clientX - mouseX;
        const dy = clientY - mouseY;

        if (direction === "right") {
          setWidth(Math.max(150, startWidth + dx));
        }
        if (direction === "bottom") {
          setHeight(Math.max(100, startHeight + dy));
        }
        if (direction === "left") {
          const newWidth = Math.max(150, startWidth - dx);
          setWidth(newWidth);
          setX(startX + dx);
        }
        if (direction === "top") {
          const newHeight = Math.max(100, startHeight - dy);
          setHeight(newHeight);
          setY(startY + dy);
        }
        if (direction === "bottomRight") {
          setWidth(Math.max(150, startWidth + dx));
          setHeight(Math.max(100, startHeight + dy));
        }
        if (direction === "bottomLeft") {
          const newWidth = Math.max(150, startWidth - dx);
          setWidth(newWidth);
          setX(startX + dx);
          setHeight(Math.max(100, startHeight + dy));
        }
        if (direction === "topRight") {
          setWidth(Math.max(150, startWidth + dx));
          const newHeight = Math.max(100, startHeight - dy);
          setHeight(newHeight);
          setY(startY + dy);
        }
        if (direction === "topLeft") {
          const newWidth = Math.max(150, startWidth - dx);
          setWidth(newWidth);
          setX(startX + dx);
          const newHeight = Math.max(100, startHeight - dy);
          setHeight(newHeight);
          setY(startY + dy);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
    window.removeEventListener("touchend", handleMouseUp);
    };}, [isDragging, isResizing]);

  const handleDragStart = (e) => {
    e.preventDefault();
    const clientX = e.clientX ?? e.touches[0].clientX;
    
    const clientY = e.clientY ?? e.touches[0].clientY;

    startRef.current = {
      mouseX: clientX,
      mouseY: clientY,
      startX: x,
      startY: y,
    };
    setIsDragging(true);
  };

  const handleResizeStart = (direction) => (e) => {
    e.preventDefault();
    const clientX = e.clientX ?? e.touches[0].clientX;
    const clientY = e.clientY ?? e.touches[0].clientY;

    startRef.current = {
      mouseX: clientX,
      mouseY: clientY,
      startX: x,
      startY: y,
      startWidth: width,
      startHeight: height,
      direction,
    };
    setIsResizing(direction);
  };

  const resizeHandles = [
    { direction: "top", className: "top-handle" },
    { direction: "bottom", className: "bottom-handle" },
    { direction: "left", className: "left-handle" },
    { direction: "right", className: "right-handle" },
    { direction: "topLeft", className: "top-left-handle" },
    { direction: "topRight", className: "top-right-handle" },
    { direction: "bottomLeft", className: "bottom-left-handle" },
    { direction: "bottomRight", className: "bottom-right-handle" },
  ];

  const _onExit = () =>{
    setIsActivated(false);
  }
  const _onFullScreen = () =>{
    const containerWidth = container.current.offsetWidth;
    const containerHeight = container.current.offsetHeight;

    const newWidth = containerWidth;
    const newHeight = containerHeight;

    const newX = (containerWidth - newWidth) / 2;
    const newY = (containerHeight - newHeight) / 2;

    setWidth(newWidth);
    setHeight(newHeight);
    setX(newX);
    setY(newY);
  }

  const _onMiniScreen = () =>{
    const containerWidth = container.current.offsetWidth;
    const containerHeight = container.current.offsetHeight;

    const newWidth = containerWidth * 0.8;
    const newHeight = containerHeight * 0.8;

    const newX = (containerWidth - newWidth) / 2;
    const newY = (containerHeight - newHeight) / 2;

    setWidth(newWidth);
    setHeight(newHeight);
    setX(newX);
    setY(newY);
  }

  return (<>
    <AnimatePresence>
    {isActivated && 
      (<motion.div
          className="absolute"
          style={{
            left: 0,
            top: 0,
            width: width,
            height: height,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            x: x-2000,
            y: y-600,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: x,
            y: y,
          }}
          transition={{ duration: .5 }}
          exit={{ 
            opacity: 0,
            scale: 0,
            x: x-2000,
            y: y-600,}}
        >
      <div
        ref={windowRef}
        className="absolute bg-background shadow-2xl rounded-lg overflow-hidden flex flex-col window-background"
        style={{
          left: 0,
          top: 0,
          width: width,
          height: height,
          minWidth: "150px",
          minHeight: "100px",
        }}
      >
        <div
          className="flex items-center justify-between p-2 bg-primary cursor-move shadow-xl window-header"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <div className="flex flex-row gap-2 items-center">
            <button className="w-3 h-3 rounded-full bg-red-600" onClick={_onExit}></button>
            <button className="w-3 h-3 rounded-full bg-yellow-600" onClick={ _onMiniScreen}></button>
            <button className="w-3 h-3 rounded-full bg-green-600" onClick={ _onFullScreen}></button>
            <span className="font-semibold text-base select-none">{title}</span>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-auto">{children}</div>

        {resizeHandles.map(({ direction, className }) => (
          <div
            key={direction}
            className={`absolute ${className}`}
            onMouseDown={handleResizeStart(direction)}
            onTouchStart={handleResizeStart(direction)}
          />
        ))}

        <style>{`
          .top-handle { top: -5px; left: 0; width: 100%; height: 10px; cursor: ns-resize; }
          .bottom-handle { bottom: -5px; left: 0; width: 100%; height: 10px; cursor: ns-resize; }
          .left-handle { left: -5px; top: 0; height: 100%; width: 10px; cursor: ew-resize; }
          .right-handle { right: -5px; top: 0; height: 100%; width: 10px; cursor: ew-resize; }
          .top-left-handle { top: -5px; left: -5px; width: 15px; height: 15px; cursor: nwse-resize; }
          .top-right-handle { top: -5px; right: -5px; width: 15px; height: 15px; cursor: nesw-resize; }
          .bottom-left-handle { bottom: -5px; left: -5px; width: 15px; height: 15px; cursor: nesw-resize; }
          .bottom-right-handle { bottom: -5px; right: -5px; width: 15px; height: 15px; cursor: nwse-resize; }

          .top-handle, .bottom-handle, .left-handle, .right-handle,
          .top-left-handle, .top-right-handle, .bottom-left-handle, .bottom-right-handle {
            z-index: 10;
          }
        `}</style>
      </div>
      </motion.div>)}
    </AnimatePresence>
  </>);  
};

export default Window;
