import { Paper } from "@mui/material"
import Contact from "./Contact"
import Education, { EducationProps } from "./Education"
import Experience, { ExperienceProps } from "./Experience"
import Projects, { ProjectsProps } from "./Projects"

const ExperienceDetails: ExperienceProps = {
  organisations: [
    {
      orgName: "tiger",
      startEnd: "May 2018 - Present",
      location: "chennai",
      orgLogo:
        "https://media.licdn.com/dms/image/C510BAQGoF-AFPRn3YA/company-logo_100_100/0/1544013984165?e=1695859200&v=beta&t=_fjfP-wxytwj5URK0x1OVa7pc2XYXwL1GgLb0sQcQZc",
      projects: [
        {
          prjDesignation: "Software Engineer",
          projectName: "project A",
          prjStartEnd: "project date",
          prjTechStack: ["react", "typescript"],
          prjDescription: "proj description",
        },
      ],
    },
    {
      orgName: "hexaware",
      startEnd: "May 2018 - Present",
      location: "chennai",
      orgLogo:
        "https://media.licdn.com/dms/image/D4D0BAQGGsYVt3SRZjw/company-logo_100_100/0/1685596232074?e=1695859200&v=beta&t=Bedf63_aTvnfg6NSiH9rbxVWpPtKDI4WI9_cvxPLIXo",
      projects: [
        {
          prjDesignation: "test designation",
          projectName: "project A",
          prjStartEnd: "project date",
          prjTechStack: ["react", "typescript"],
          prjDescription: "proj description",
        },
        {
          prjDesignation: "Associate Software Engineer",
          projectName: "project A",
          prjStartEnd: "project date",
          prjTechStack: ["react", "typescript"],
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
    element: <Contact />,
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
        <Paper key={tab.key} className="p-5 mb-5 max-h-40">
          {tab.element}
        </Paper>
      ))}
    </div>
  )
}

export default MoreDetails
