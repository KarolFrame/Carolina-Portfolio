import React, { useState, useEffect, useRef } from "react";
import { HiMiniMoon, HiMiniSun,HiMiniPlusCircle } from "react-icons/hi2";
import { motion, AnimatePresence } from "motion/react";
import { HexColorPicker } from "react-colorful";
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MenuModeBack = () =>{
    const modeMenuRef = useRef(null);
    const colorMenuRef = useRef(null);
    const customPickerRef = useRef(null);

    const [modoOscuro, setModoOscuro] = useState(false);
    const [modoCustom, setModoCustom] = useState(false);
    const [customBack, setCustomBack] = useState("#000000");
    const [modo, setModo] = useState("dia");
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [isModeMenuOpen, setIsModeMenuOpen] = useState(false);

    useEffect(() => {
    document.body.classList.toggle("dark", modoOscuro);
    }, [modoOscuro]);
    useEffect(() => {
    document.body.classList.toggle("custom", modoCustom);
    }, [modoCustom]);


    useEffect(() => {
    function handleClickOutside(event) {
        if (
        modeMenuRef.current && !modeMenuRef.current.contains(event.target) &&
        customPickerRef.current && !customPickerRef.current.contains(event.target)
        ) {
        setIsModeMenuOpen(false);
        setIsPickerOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return(<>
        <div className="relative" ref={modeMenuRef}>
          <button
            className="flex items-center space-x-2 p-2 rounded-md buttonTranspatent"
            onClick={() => setIsModeMenuOpen(!isModeMenuOpen)}
          >
            {modo === "dia" && <HiMiniSun />}
            {modo === "noche" && <HiMiniMoon />}
            {modo === "personalizar" && (<HiMiniPlusCircle/>)}
          </button>

          <AnimatePresence>
            {isModeMenuOpen && (
              <motion.ul
                className="absolute right-0 mt-2 rounded-md shadow-2xl z-10 background-color"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
              >
                <motion.li
                  className="p-2 flex items-center space-x-2 cursor-pointer buttonTranspatent rounded-md"
                  onClick={() => { setModo("dia"); setModoOscuro(false); setModoCustom(false) }}
                  variants={itemVariants}
                >
                  <HiMiniSun />
                </motion.li>
                <motion.li
                  className="p-2 flex items-center space-x-2 cursor-pointer buttonTranspatent rounded-md"
                  onClick={() => { setModo("noche"); setModoOscuro(true); }}
                  variants={itemVariants}
                >
                  <HiMiniMoon />
                </motion.li>
                <motion.li
                  className="p-2 flex items-center space-x-2 cursor-pointer buttonTranspatent rounded-md"
                  onClick={() => {setModo("personalizar"); setModoCustom(true);}}
                  ref={customPickerRef} 
                  variants={itemVariants}
                >
                  <div className="relative" ref={customPickerRef}>
                    <div className="relative">
                      <HiMiniPlusCircle
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPickerOpen((prev) => !prev);
                        }}
                      />
                      {isPickerOpen && (
                        <div className="absolute top-8 right-0 z-20">
                          <HexColorPicker
                            color={customBack}
                            onChange={(color) => {
                              setCustomBack(color);
                              document.documentElement.style.setProperty('--color-background-custom', color);
                            }}
                          />
                        </div>
                      )}
                    </div>
                </div>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
    </>)
}
export default MenuModeBack;