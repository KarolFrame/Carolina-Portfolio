import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { HiMiniMoon, HiMiniSun, HiMiniStop } from "react-icons/hi2";
import { motion, AnimatePresence } from "motion/react"

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

function NavBar() {
    const [modoOscuro, setModoOscuro] = useState(false);
    const [selectedColor, setSelectedColor] = useState('blue');
    const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);

    const colors = [
        { name: 'blue', text: 'Azul' },
        { name: 'cyan', text: 'Cian' },
        { name: 'green', text: 'Verde' },
        { name: 'yellow', text: 'Amarillo' },
        { name: 'orange', text: 'Naranja' },
        { name: 'red', text: 'Rojo' },
        { name: 'purple', text: 'Morado' },
    ];

    useEffect(() => {
      if (modoOscuro) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [modoOscuro]);
  
    useEffect(() => {
      const colorMap = {
        'blue': 'var(--color-primary-blue)',
        'cyan': 'var(--color-primary-cyan)',
        'green': 'var(--color-primary-green)',
        'yellow': 'var(--color-primary-yellow)',
        'orange': 'var(--color-primary-orange)',
        'red': 'var(--color-primary-red)',
        'purple': 'var(--color-primary-purple)',
      };
      
      document.documentElement.style.setProperty('--color-primary', colorMap[selectedColor]);
  
    }, [selectedColor]);
    return (
        <>
        <nav className="fixed top-0 z-20 w-full p-4 shadow-xl flex items-center justify-between h-16 bg-background">
            <div className="flex items-center">
                <span className="font-bold text-xl">Carolina Pérez Segura</span>
            </div>

            <div className="flex space-x-6 text-2xl">
                <button className="flex items-center space-x-2 p-2 rounded-md buttonTranspatent" onClick={() => setModoOscuro(!modoOscuro)}>
                    {!modoOscuro&&<HiMiniMoon/>}
                    {modoOscuro&&<HiMiniSun/>}
                </button>

                <div className="relative">
                    <button
                        className="flex items-center space-x-2 p-2 rounded-md buttonTranspatent"
                        onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                    >
                        <HiMiniStop style={{ color: `var(--color-primary-${selectedColor})` }}/>
                    </button>
                    <AnimatePresence>
                    {isColorMenuOpen && (
                        <motion.ul 
                            className="absolute right-0 mt-2 rounded-md shadow-2xl z-10"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={listVariants}
                        >
                            {colors.map((color) => (
                                <motion.li
                                    key={color.name}
                                    className="p-2 flex items-center space-x-2 cursor-pointer buttonTranspatent"
                                    onClick={() => {
                                        setSelectedColor(color.name);
                                        setIsColorMenuOpen(false);
                                    }}
                                    variants={itemVariants}
                                >
                                    <HiMiniStop style={{ color: `var(--color-primary-${color.name})` }} />
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;