import { Container } from "@mui/material"
import Contact, { ContactProps } from "./Contact"
import DetailsCards, { DetailsCardType } from "./DetailsCards"
import Education, { EducationProps } from "./Education"
import Experience, { ExperienceProps } from "./Experience"
import ProfileBasic, { ProfileBasicProps } from "./ProfileBasic"
import Projects, { ProjectsProps } from "./Projects"
import SkillBasic, { SkillBasicProps } from "./SkillBasic"

const skillsDetails: SkillBasicProps = {
  skills: ["Microservices", "JavaScript", "React", "Node.js", "CSS", "Html", "Git"],
}
const ProfileBasicData: ProfileBasicProps = {
  user: {
    name: "Sham Karthik S",
    byLine: "FullStack Developer",
    location: "Chennai, India",
    image:
      "https://media.licdn.com/dms/image/C5603AQEl6toEG8qvqg/profile-displayphoto-shrink_400_400/0/1635876825973?e=1703116800&v=beta&t=McPp3nuh7WlsaIVuat0AL2gfNoiAoPerRdJA8tgMwHk",
    wallPaperImage:
      "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp",
  },
  organisations: [
    {
      name: "Tiger Analytics",
      logo: "https://media.licdn.com/dms/image/C510BAQGoF-AFPRn3YA/company-logo_200_200/0/1544013984165?e=1705536000&v=beta&t=DxsOz4Js7tjxojO58-qJY_04JY097OCH8aHxXYrIiZ4",
    },
    {
      name: "Hexaware Technologies",
      logo: "https://media.licdn.com/dms/image/D4D0BAQFRiiQkanBMTw/company-logo_200_200/0/1697180302325?e=1705536000&v=beta&t=g896KQVSGMK-fwbOrxvDQzszWtYSjte3rSE8ykWVGCk",
    },
    {
      name: "KCG College of Technology",
      logo: "https://media.licdn.com/dms/image/C560BAQGHTIi1dbR_jw/company-logo_200_200/0/1519894924589?e=1705536000&v=beta&t=Xsfx7G_iy5ozQ_53WkgXftMvV2r5qCPXz3pNiP4MlbI",
    },
  ],
  contacts: [
    {
      contactImage:
        "data:image/png;base64,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",
      contactName: "LinkedIn",
      contactUrl: "https://www.linkedin.com/in/sham-karthik-s/",
    },
    {
      contactImage:
        "data:image/png;base64,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",
      contactName: "Github",
      contactUrl: "https://github.com/shamkarthik",
    },
  ],
  resumeLink:
    "https://drive.google.com/file/d/1JArHdYn0_IPacda8kMoFNnQI9ryCcleO/view?usp=sharing",
}
const ExperienceDetails: ExperienceProps = {
  organisations: [
    {
      orgName: "Tiger Analytics - Senior Analyst",
      startEnd: "Jan 2023 - Present",
      location: "Chennai, Tamil Nadu, India",
      orgLogo:
        "https://media.licdn.com/dms/image/C510BAQGoF-AFPRn3YA/company-logo_200_200/0/1544013984165?e=1705536000&v=beta&t=DxsOz4Js7tjxojO58-qJY_04JY097OCH8aHxXYrIiZ4",
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
        "https://media.licdn.com/dms/image/D4D0BAQFRiiQkanBMTw/company-logo_200_200/0/1697180302325?e=1705536000&v=beta&t=g896KQVSGMK-fwbOrxvDQzszWtYSjte3rSE8ykWVGCk",
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
        "https://media.licdn.com/dms/image/C560BAQGHTIi1dbR_jw/company-logo_200_200/0/1519894924589?e=1705536000&v=beta&t=Xsfx7G_iy5ozQ_53WkgXftMvV2r5qCPXz3pNiP4MlbI",
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
const leftTabs: DetailsCardType[] = [
  {
    element: <ProfileBasic {...ProfileBasicData} />,
    key: "profileBasic",
    disablePadding: true,
  },
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
const rightTabs: DetailsCardType[] = [
  {
    element: <SkillBasic {...skillsDetails} />,
    key: "skills",
  },
  {
    element: <Contact {...contactDetails} />,
    key: "contact",
  },
]
function Home() {
  return (
    <Container maxWidth="xl" className="p-5">
      <div className="grid gap-5">
        {/* <Headers /> */}

        <DetailsCards leftTabs={leftTabs} rightTabs={rightTabs} />
      </div>
    </Container>
  )
}

export default Home
