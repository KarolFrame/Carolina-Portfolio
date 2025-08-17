
import { HiEnvelope, HiOutlineMapPin, } from "react-icons/hi2";
import { SiLinkedin, SiGithub  } from "react-icons/si";


const MyDescription = ()=>{
    const myImage = "/Images/MyPersonalImage.jpg";
    return(<>
        <div className="flex flex-row gap-5">
            <img src={myImage} className="w-[15%] h-[15%] object-cover rounded-lg"/>
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl sm:text-4xl font-bold">Carolina Pérez Segura</h1>
                <div className="flex flex-col md:flex-row gap-4 text-center md:text-left mt-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold">Front-end Developer</h3>
                    <span className="text-xl sm:text-2xl font-semibold">|</span>
                    <a href="mailto:carolina.peseca@gmail.com" className="flex items-center gap-2 p-2  rounded-md buttonTranspatent transition-colors">
                        <HiEnvelope className="text-xl" />
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/carolina-pérez-segura" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-md buttonTranspatent transition-colors">
                        <SiLinkedin className="text-xl" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/KarolFrame" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-md buttonTranspatent transition-colors">
                        <SiGithub className="text-xl" />
                        <span>GitHub</span>
                    </a>
                    <div className="flex items-center gap-1">
                        <HiOutlineMapPin className="text-xl" />
                        <span>Madrid, Spain</span>
                    </div>

                </div>
                
                <p className="text-sm sm:text-base">
                     I'm <span className="font-bold">Carolina Pérez Segura</span>, a <span className="font-bold">Front-end developer</span> specialized in creating web interfaces with <span className="font-bold">JavaScript, React, Python, and SQL</span>. I also have experience in <span className="font-bold">video game development</span> with <span className="font-bold">Unity</span> and <span className="font-bold">Unreal Engine 5</span>.
                </p>
            </div>
        </div>
    </>)
}

export default MyDescription;