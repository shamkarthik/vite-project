import { Paper } from "@mui/material"
import Contact, { ContactProps } from "./Contact"
import Education, { EducationProps } from "./Education"
import Experience, { ExperienceProps } from "./Experience"
import Projects, { ProjectsProps } from "./Projects"

const ExperienceDetails: ExperienceProps = {
  organisations: [
    {
      orgName: "Tiger Analytics - Senior Analyst",
      startEnd: "Jan 2023 - Present",
      location: "Chennai, Tamil Nadu, India",
      orgLogo:
        "https://media.licdn.com/dms/image/C510BAQGoF-AFPRn3YA/company-logo_100_100/0/1544013984165?e=1695859200&v=beta&t=_fjfP-wxytwj5URK0x1OVa7pc2XYXwL1GgLb0sQcQZc",
      projects: [
        {
          prjDesignation: "Software Engineer",
          projectName: "App Templates",
          prjStartEnd: "",
          prjTechStack: ["React", "Typescript", "Docker"],
          prjDescription: "proj description",
        },
      ],
    },
    {
      orgName: "Hexaware Technologies - Software Engineer",
      startEnd: "Jan 2021 - Jan 2023",
      location: "Chennai, Tamil Nadu, India",
      orgLogo:
        "https://media.licdn.com/dms/image/D4D0BAQGGsYVt3SRZjw/company-logo_100_100/0/1685596232074?e=1695859200&v=beta&t=Bedf63_aTvnfg6NSiH9rbxVWpPtKDI4WI9_cvxPLIXo",
      projects: [
        {
          prjDesignation: "Software Engineer",
          projectName: "Software Development Platform (RapidX) - SDLC Automation",
          prjStartEnd: "",
          prjTechStack: [
            "Microservices",
            "NestJs",
            "React",
            "Azure",
            "MongoDB",
            ".NET",
            "Docker",
            "Typescript",
          ],
          prjDescription: "proj description",
        },
        {
          prjDesignation: "Associate Software Engineer",
          projectName: "Automaton - Custom RPA Platform",
          prjStartEnd: "",
          prjTechStack: ["Python", "Angular", "MariaDB", "Electron"],
          prjDescription: "proj description",
        },
      ],
    },
  ],
}
const educationDetails: EducationProps = {
  eduOrganisations: [
    {
      organisationName: "KCG College of technology",
      orgImage:
        "https://media.licdn.com/dms/image/C560BAQGHTIi1dbR_jw/company-logo_100_100/0/1519894924589?e=1695859200&v=beta&t=wp09IqJ639lki9gfSPjoaSP-VCInFufr8ufljzTyNPU",
      courseName: "Bachelor of Engineering",
      timePeriod: "Aug 2011 - May 2015",
    },
  ],
}

const projectDetails: ProjectsProps = {
  projects: [
    {
      projectName:
        "Optical and Heart Monitoring Using Facial Image Processing and Fast Fourier Transform",
      byLine: "Turkish Online Journal of Qualitative Inquiry (TOJQI) · Jul 10, 2021",
      projectDescription:
        "The prolonged use of Laptops, Mobile phones, and many digital screens, leads to many health issues such as ",
    },
  ],
}

const contactDetails: ContactProps = {
  contacts: {
    email: "shamkarthik88@gmail.com",
    contact: "+91 9841901916",
  },
}
const leftTabs = [
  {
    element: <Experience {...ExperienceDetails} />,
    key: "experience",
  },
  {
    element: <Education {...educationDetails} />,
    key: "education",
  },
  {
    element: <Projects {...projectDetails} />,
    key: "projects",
  },
]
const rightTabs = [
  {
    element: <Contact {...contactDetails} />,
    key: "contact",
  },
]
const MoreDetails = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-3">
        {leftTabs.map((tab) => (
          <Paper key={tab.key} className="p-5 mb-5">
            {tab.element}
          </Paper>
        ))}
      </div>
      {rightTabs.map((tab) => (
        <Paper key={tab.key} className="p-5 mb-5 max-h-96">
          {tab.element}
        </Paper>
      ))}
    </div>
  )
}

export default MoreDetails
