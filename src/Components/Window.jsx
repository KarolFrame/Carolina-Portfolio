import React, { useState, useRef, useEffect } from 'react';

const Window = ({ children, initialWidth = 600, initialHeight = 400, initialX = 100, initialY = 100, title = 'Mi Ventana' }) => {
    const [x, setX] = useState(initialX);
    const [y, setY] = useState(initialY);
    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);
  
    // Estado para rastrear si estamos arrastrando o redimensionando
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState({
      top: false, bottom: false, left: false, right: false,
      topLeft: false, topRight: false, bottomLeft: false, bottomRight: false
    });
  
    // Referencia para el elemento de la ventana
    const windowRef = useRef(null);
  
    // useEffect para manejar los escuchadores de eventos al montar y limpiar al desmontar
    useEffect(() => {
      // Manejador de eventos para arrastrar y redimensionar
      const handleMouseMove = (e) => {
        e.preventDefault();
  
        // Lógica para arrastrar
        if (isDragging) {
          setX(e.clientX - isDragging.offsetX);
          setY(e.clientY - isDragging.offsetY);
        }
  
        // Lógica para redimensionar
        if (isResizing.right) {
          setWidth(e.clientX - windowRef.current.offsetLeft);
        }
        if (isResizing.bottom) {
          setHeight(e.clientY - windowRef.current.offsetTop);
        }
        if (isResizing.left) {
          const newWidth = width + (x - e.clientX);
          const newX = e.clientX;
          if (newWidth > 150) { // Restricción de ancho mínimo
            setWidth(newWidth);
            setX(newX);
          }
        }
        if (isResizing.top) {
          const newHeight = height + (y - e.clientY);
          const newY = e.clientY;
          if (newHeight > 100) { // Restricción de altura mínima
            setHeight(newHeight);
            setY(newY);
          }
        }
        if (isResizing.bottomRight) {
          setWidth(e.clientX - windowRef.current.offsetLeft);
          setHeight(e.clientY - windowRef.current.offsetTop);
        }
        if (isResizing.bottomLeft) {
          const newWidth = width + (x - e.clientX);
          const newX = e.clientX;
          setWidth(newWidth);
          if (newWidth > 150) {
            setX(newX);
          }
          setHeight(e.clientY - windowRef.current.offsetTop);
        }
        if (isResizing.topRight) {
          setWidth(e.clientX - windowRef.current.offsetLeft);
          const newHeight = height + (y - e.clientY);
          const newY = e.clientY;
          setHeight(newHeight);
          if (newHeight > 100) {
            setY(newY);
          }
        }
        if (isResizing.topLeft) {
          const newWidth = width + (x - e.clientX);
          const newX = e.clientX;
          setWidth(newWidth);
          if (newWidth > 150) {
            setX(newX);
          }
          const newHeight = height + (y - e.clientY);
          const newY = e.clientY;
          setHeight(newHeight);
          if (newHeight > 100) {
            setY(newY);
          }
        }
      };
  
      // Manejador de eventos para detener el arrastre/redimensionamiento
      const handleMouseUp = () => {
        setIsDragging(false);
        setIsResizing({});
      };
  
      // Añadir escuchadores de eventos a la ventana
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      // Añadir escuchadores de eventos táctiles para móvil
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
  
      // Función de limpieza
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleMouseMove);
        window.removeEventListener('touchend', handleMouseUp);
      };
    }, [isDragging, isResizing, x, y, width, height]);
  
    // Manejar el evento mousedown en el encabezado para empezar a arrastrar
    const handleDragStart = (e) => {
      e.preventDefault();
      setIsDragging({
        offsetX: e.clientX - x,
        offsetY: e.clientY - y
      });
    };
  
    // Manejar el evento mousedown en un manejador de redimensionamiento
    const handleResizeStart = (direction) => (e) => {
      e.preventDefault();
      setIsResizing({ [direction]: true });
    };
    
    // Manejadores de redimensionamiento para cada lado y esquina
    const resizeHandles = [
      { direction: 'top', className: 'top-handle', onMouseDown: handleResizeStart('top') },
      { direction: 'bottom', className: 'bottom-handle', onMouseDown: handleResizeStart('bottom') },
      { direction: 'left', className: 'left-handle', onMouseDown: handleResizeStart('left') },
      { direction: 'right', className: 'right-handle', onMouseDown: handleResizeStart('right') },
      { direction: 'topLeft', className: 'top-left-handle', onMouseDown: handleResizeStart('topLeft') },
      { direction: 'topRight', className: 'top-right-handle', onMouseDown: handleResizeStart('topRight') },
      { direction: 'bottomLeft', className: 'bottom-left-handle', onMouseDown: handleResizeStart('bottomLeft') },
      { direction: 'bottomRight', className: 'bottom-right-handle', onMouseDown: handleResizeStart('bottomRight') },
    ];
  
    return (
      <div
        ref={windowRef}
        className="absolute bg-background shadow-2xl rounded-lg overflow-hidden flex flex-col window-background"
        style={{
          left: x,
          top: y,
          width: width,
          height: height,
          minWidth: '150px',
          minHeight: '100px',
        }}
      >
        <div 
          className="flex items-center justify-between p-2 bg-primary cursor-move shadow-xl window-header"
          onMouseDown={handleDragStart}
          onTouchStart={(e) => {
            e.preventDefault();
            setIsDragging({
              offsetX: e.touches[0].clientX - x,
              offsetY: e.touches[0].clientY - y
            });
          }}
        >
          <span className="font-semibold text-sm select-none">{title}</span>
          <button className="">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
  
        <div className="flex-1 p-4 overflow-auto">
          {children}
        </div>
  
        {resizeHandles.map(({ direction, className, onMouseDown }) => (
          <div
            key={direction}
            className={`absolute ${className}`}
            onMouseDown={onMouseDown}
            onTouchStart={(e) => {
              e.preventDefault();
              setIsResizing({ [direction]: true });
            }}
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
          
          .top-handle, .bottom-handle, .left-handle, .right-handle, .top-left-handle, .top-right-handle, .bottom-left-handle, .bottom-right-handle {
              z-index: 10;
          }
        `}</style>
      </div>
    );
  };

  export default Window;