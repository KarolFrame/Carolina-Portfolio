import { HiOutlineCalendar, HiOutlineMapPin } from 'react-icons/hi2';

const educationData = [
    {
        degree: "Full Stack Developer",
        institution: "4Geeks Academy",
        years: "2025",
        location: "Madrid, Spain"
    },
    {
        degree: "Higher Degree in 3D Animations, Games and Interactive Environments",
        institution: "UDIT",
        years: "2020 - 2022",
        location: "Madrid, Spain"
    },
    {
        degree: "HND in Video game Design and Interactive Content",
        institution: "UDIT",
        years: "2020 - 2022",
        location: "Madrid, Spain"
    }
];

const EducationItem = ({ degree, institution, years, location }) => (
    <div className="rounded-lg p-3 shadow-md hover:shadow-lg transition">
        <h3 className="text-xl sm:text-2xl font-semibold">{degree}</h3>
        <p className="font-medium my-1">{institution}</p>
        <div className="flex items-center text-gray-600 space-x-4">
            <span className="flex items-center gap-1">
                <HiOutlineCalendar className="text-lg" />
                {years}
            </span>
            <span className="flex items-center gap-1">
                <HiOutlineMapPin className="text-lg" />
                {location}
            </span>
        </div>
    </div>
);


const EducationSection = () => {
    return (
        <div className="flex flex-col gap-3">
            {educationData.map((item, index) => (
                <EducationItem
                    key={index}
                    degree={item.degree}
                    institution={item.institution}
                    years={item.years}
                    location={item.location}
                />
            ))}
        </div>
    );
};

export default EducationSection;