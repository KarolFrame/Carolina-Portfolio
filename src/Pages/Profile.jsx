import { useRef, useState, useEffect } from 'react';
import Window from '../Components/Window';
import MyDescription from '../Components/MyDescription';
import EducationSection from '../Components/Education';
import CertificatesSection from '../Components/Certificates';

const Profile = () => {
    const containerRef = useRef(null);
    const [windows, setWindows] = useState([]);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            const windowConfigurations = [
                {
                    title: "Description",
                    initialX: (containerWidth - containerWidth * 0.8) / 2,
                    initialY: (containerHeight - containerHeight * 0.35) / 32,
                    initialWidth: containerWidth * 0.8,
                    initialHeight: containerHeight * 0.35,
                    content: <MyDescription />
                },
                {
                    title: "Education",
                    initialX: (containerWidth - containerWidth * 0.6) / 4,
                    initialY: (containerHeight - containerHeight * 0.35)/1.5,
                    initialWidth: containerWidth * 0.39,
                    initialHeight: containerHeight * 0.5,
                    content: <EducationSection/>
                },
                {
                    title: "Certficates",
                    initialX: (containerWidth - containerWidth * 0.35)/1.27,
                    initialY: (containerHeight - containerHeight * 0.35)/1.5,
                    initialWidth: containerWidth * 0.39,
                    initialHeight: containerHeight * 0.5,
                    content: <CertificatesSection/>
                }
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

export default Profile;