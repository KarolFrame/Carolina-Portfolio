import { HiSparkles , HiArrowPath, HiPuzzlePiece, HiBolt, HiChatBubbleLeftRight, HiLightBulb, HiOutlineTrophy, HiOutlineClock, HiOutlineUsers, HiOutlineHeart, HiOutlineCursorArrowRays,HiOutlineArrowPath } from "react-icons/hi2";

const SoftSkills = () =>{
    const skills = [
    {
      title: "Creativity",
      icon: <HiSparkles />,
      description: "Ability to generate innovative ideas and think outside the box."
    },
    {
      title: "Adaptability",
      icon: <HiArrowPath />,
      description: "Flexibility to adjust to new challenges and environments."
    },
    {
      title: "Problem Solving",
      icon: <HiPuzzlePiece />,
      description: "Analyzing issues, identifying root causes, and proposing solutions."
    },
    {
      title: "Fast Learning",
      icon: <HiBolt />,
      description: "Quickly grasping new concepts and applying them effectively."
    },
    {
      title: "Communication",
      icon: <HiChatBubbleLeftRight />,
      description: "Clear expression of ideas and active listening in teamwork."
    },
    {
      title: "Critical Thinking",
      icon: <HiLightBulb/>,
      description: "Evaluating information objectively to make reasoned decisions."
    },
    {
      title: "Leadership",
      icon: <HiOutlineTrophy/>,
      description: "Inspiring and guiding others toward common goals."
    },
    {
      title: "Time Management",
      icon: <HiOutlineClock/>,
      description: "Organizing priorities and meeting deadlines."
    },
    {
      title: "Teamwork",
      icon: <HiOutlineUsers/>,
      description: "Collaborating effectively with diverse people."
    },
    {
      title: "Empathy",
      icon: <HiOutlineHeart/>,
      description: "Understanding and connecting with the emotions of others."
    },
    {
      title: "Decision-Making",
      icon: <HiOutlineCursorArrowRays/>,
      description: "Making sound choices under pressure."
    },
    {
      title: "Resilience",
      icon: <HiOutlineArrowPath/>,
      description: "Maintaining motivation and overcoming obstacles."
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
        {skills.map((skill, index) => (
            <details
                open 
                key={index} 
                className="rounded-lg p-3 shadow-md hover:shadow-lg transition flex-1 min-w-[300px] max-w-sm items-center"
            >
            <summary className="cursor-pointer flex items-center gap-2 font-semibold text-2xl">
                {skill.icon} {skill.title}
            </summary>
                <p className="mt-2 text-sm">{skill.description}</p>
            </details>
        ))}
    </div>
  );
}

export default SoftSkills;