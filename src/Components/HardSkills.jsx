import { HiCpuChip , HiMiniServerStack, HiMiniArrowPathRoundedSquare, HiMiniPuzzlePiece, HiCircleStack  } from "react-icons/hi2";


const HardSkills = () =>{
    return (
  <div className="p-6 font-sans">
    <details open className="mb-4 rounded-xl p-4 shadow-md">
      <summary className="cursor-pointer text-xl font-bold flex gap-2 items-center"><HiCpuChip/> Frontend Skills</summary>
      <div className="mt-2 flex flex-wrap gap-2">
        <img className="rounded-xl" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
        <img className="rounded-xl" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
        <img className="rounded-xl" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
        <img className="rounded-xl" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
        <img className="rounded-xl" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
        <img className="rounded-xl" src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
        <img className="rounded-xl" src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
        <img className="rounded-xl" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
      </div>
    </details>

    <details open className="mb-4 rounded-xl p-4 shadow-md ">
      <summary className="cursor-pointer text-xl font-bold flex gap-2 items-center"><HiMiniServerStack/> Backend Skills</summary>
      <div className="mt-2 flex flex-wrap gap-2">
        <img className="rounded-xl" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
        <img className="rounded-xl" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
        <img className="rounded-xl" src="https://img.shields.io/badge/APIs-6DB33F?style=for-the-badge&logo=fastapi&logoColor=white" alt="APIs" />
        <img className="rounded-xl" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
      </div>
    </details>

    <details open className="mb-4 rounded-xl p-4 shadow-md">
      <summary className="cursor-pointer text-xl font-bold flex gap-2 items-center"><HiCircleStack /> Database Skills</summary>
      <div className="mt-2 flex flex-wrap gap-2">
        <img className="rounded-xl" src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL" />
        <img className="rounded-xl" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
      </div>
    </details>

    <details open className="mb-4 rounded-xl p-4 shadow-md">
      <summary className="cursor-pointer text-xl font-bold flex gap-2 items-center"><HiMiniArrowPathRoundedSquare/> Version Control</summary>
      <div className="mt-2 flex flex-wrap gap-2">
        <img className="rounded-xl" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
        <img className="rounded-xl" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </div>
    </details>

    <details open className="mb-4 rounded-xl p-4 shadow-md">
      <summary className="cursor-pointer text-xl font-bold flex gap-2 items-center"><HiMiniPuzzlePiece/> Game Development</summary>
      <div className="mt-2 flex flex-wrap gap-2">
        <img className="rounded-xl" src="https://img.shields.io/badge/Unity-FFFFFF?style=for-the-badge&logo=unity&logoColor=black" alt="Unity" />
        <img className="rounded-xl" src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
        <img className="rounded-xl" src="https://img.shields.io/badge/Unreal_Engine-313131?style=for-the-badge&logo=unrealengine&logoColor=white" alt="Unreal Engine 5" />
        <img className="rounded-xl" src="https://img.shields.io/badge/3ds_Max-0696D7?style=for-the-badge&logo=autodesk&logoColor=white" alt="3ds Max" />
        <img className="rounded-xl" src="https://img.shields.io/badge/Blender-F5792A?style=for-the-badge&logo=blender&logoColor=white" alt="Blender" />
      </div>
    </details>
  </div>
);
}

export default HardSkills;