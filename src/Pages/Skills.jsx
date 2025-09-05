import { useRef, useState, useEffect } from 'react';
import Window from '../Components/Window';
import HardSkills from '../Components/HardSkills';
import SoftSkills from '../Components/SoftSkills';

const Skills = () => {
    const containerRef = useRef(null);
    const [windows, setWindows] = useState([]);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            const windowConfigurations = [
                {
                    title: "Skills",
                    initialX: containerWidth * 0.05,
                    initialY: containerHeight * 0.1,
                    initialWidth: containerWidth * 0.4,
                    initialHeight: containerHeight * 0.8,
                    content: <HardSkills />
                },
                {
                    title: "Soft Skills",
                    initialX: containerWidth * 0.55,
                    initialY: containerHeight * 0.1,
                    initialWidth: containerWidth * 0.4,
                    initialHeight: containerHeight * 0.8,
                    content: <SoftSkills />
                },
            ];

            setWindows(windowConfigurations);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen flex items-center justify-center p-8"
        >
            {windows.length > 0 && windows.map((win, index) => (
                <Window
                    key={index}
                    initialX={win.initialX}
                    initialY={win.initialY}
                    initialWidth={win.initialWidth}
                    initialHeight={win.initialHeight}
                    title={win.title}
                    container={containerRef}
                >
                    {win.content}
                </Window>
            ))}
        </div>
    );
};

export default Skills;