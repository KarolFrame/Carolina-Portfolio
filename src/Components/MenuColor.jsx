import React,{useEffect,useState, useRef} from "react";
import {HiMiniStop, HiMiniPlusCircle } from "react-icons/hi2";
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

const MenuColor=()=>{
    const modeMenuRef = useRef(null);
    const colorMenuRef = useRef(null);
    const pickerRef = useRef(null);

    const [selectedColor, setSelectedColor] = useState("blue");
    const [customColor, setCustomColor] = useState("#000000");
    const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    const colors = [
    { name: "blue", text: "Azul" },
    { name: "cyan", text: "Cian" },
    { name: "green", text: "Verde" },
    { name: "yellow", text: "Amarillo" },
    { name: "orange", text: "Naranja" },
    { name: "red", text: "Rojo" },
    { name: "purple", text: "Morado" },
    { name: "custom", text: "Custom" },
    ];

    useEffect(() => {
    if (selectedColor === "custom") {
        document.documentElement.style.setProperty("--color-primary", customColor);
    } else {
        const colorMap = {
        blue: "var(--color-primary-blue)",
        cyan: "var(--color-primary-cyan)",
        green: "var(--color-primary-green)",
        yellow: "var(--color-primary-yellow)",
        orange: "var(--color-primary-orange)",
        red: "var(--color-primary-red)",
        purple: "var(--color-primary-purple)",
        };
        document.documentElement.style.setProperty("--color-primary", colorMap[selectedColor]);
    }
    }, [selectedColor, customColor]);

    useEffect(() => {
    function handleClickOutside(event) {
        if (
        colorMenuRef.current && !colorMenuRef.current.contains(event.target) &&
        pickerRef.current && !pickerRef.current.contains(event.target)
        ) {
        setIsColorMenuOpen(false);
        setIsPickerOpen(false);
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return(<>
    <div className="relative" ref={colorMenuRef}>
        <button
            className="flex items-center space-x-2 p-2 rounded-md buttonTranspatent"
            onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
        >
            <HiMiniStop
            style={{
                color: selectedColor === "custom" ? customColor : `var(--color-primary-${selectedColor})`,
            }}
            />
        </button>

        <AnimatePresence>
            {isColorMenuOpen && (
            <motion.ul
                className="absolute right-0 mt-2 rounded-md shadow-2xl z-10 background-color"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
            >
                {colors.map((color) => (
                <motion.li
                    key={color.name}
                    className="p-2 flex items-center space-x-2 cursor-pointer buttonTranspatent relative"
                    variants={itemVariants}
                    onClick={() => {
                    if (color.name !== "custom") {
                        setSelectedColor(color.name);
                        setIsColorMenuOpen(false);
                        setIsPickerOpen(false);
                    }
                    }}
                >
                    {color.name !== "custom" ? (
                    <HiMiniStop style={{ color: `var(--color-primary-${color.name})` }} />
                    ) : (
                    <div 
                        ref={pickerRef} 
                        className="relative">
                            <HiMiniPlusCircle
                            className="cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedColor("custom");
                                setIsPickerOpen((prev) => !prev);
                            }}
                            />
                        {isPickerOpen && (
                        <div className="absolute top-8 right-0 z-20">
                            <HexColorPicker color={customColor} onChange={setCustomColor} />
                        </div>
                        )}
                    </div>
                    )}
                </motion.li>
                ))}
            </motion.ul>
            )}
        </AnimatePresence>
        </div>

    </>)
}

export default MenuColor;