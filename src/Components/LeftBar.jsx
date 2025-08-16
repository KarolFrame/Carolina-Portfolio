import React, {useState} from "react";
import { Link } from "react-router-dom";
import { HiMiniHome, HiMiniUser, HiMiniCodeBracketSquare, HiMiniRectangleGroup, HiChatBubbleLeftEllipsis } from "react-icons/hi2";



function LeftBar() {
    const [selectedPath, setSelectedPath] = useState('/');

    const navItems = [
        { path: '/', icon: HiMiniHome, text: 'Home' },
        { path: '/profile', icon: HiMiniUser, text: 'Profile' },
        { path: '/skills', icon: HiMiniCodeBracketSquare, text: 'Skills' },
        { path: '/projects', icon: HiMiniRectangleGroup, text: 'Projects' },
        { path: '/contact', icon: HiChatBubbleLeftEllipsis, text: 'Contact' }
    ];
    return (
        <nav className="fixed top-16 left-0 z-10 p-4 shadow-lg flex flex-col justify-between w-16 h-[calc(100vh-4rem)] bg-primary">
        <div className="flex flex-col items-center gap-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.path}
              to={item.path}
              onClick={() => setSelectedPath(item.path)}
              className={`flex items-center space-x-2 p-2 rounded-md buttonTranspatent ${selectedPath === item.path ? 'selectedBar' : ''}`}
            >
              <Icon className="text-2xl" />
            </Link>
          );
        })}
        </div>
        </nav>
    );
}

export default LeftBar;