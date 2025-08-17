import React, { useState, useEffect, useRef } from "react";
import MenuColor from "./MenuColor";
import MenuModeBack from "./MenuModeBack";

function NavBar() {
  return (
    <nav className="fixed top-0 z-20 w-full p-4 shadow-xl flex items-center justify-between h-16 bg-background">
      <div className="flex items-center">
        <span className="font-bold text-xl">Carolina Pérez Segura</span>
      </div>
      <div className="flex space-x-3 text-2xl">
        <MenuModeBack/>
        <MenuColor/>
      </div>
    </nav>
  );
}

export default NavBar;
