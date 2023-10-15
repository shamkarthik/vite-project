import { Paper } from "@mui/material"
import { ReactElement } from "react"
import { ContactProps } from "./Contact"
import { EducationProps } from "./Education"
import { ExperienceProps } from "./Experience"
import { ProfileBasicProps } from "./ProfileBasic"
import { ProjectsProps } from "./Projects"
import { SkillBasicProps } from "./SkillBasic"

export type DetailsCardType = (
  | {
      element: ReactElement<ExperienceProps>
      key: "experience"
    }
  | {
      element: ReactElement<EducationProps>
      key: "education"
    }
  | {
      element: ReactElement<ProjectsProps>
      key: "projects"
    }
  | {
      element: ReactElement<ContactProps>
      key: "contact"
    }
  | {
      element: ReactElement<ProfileBasicProps>
      key: "profileBasic"
    }
  | {
      element: ReactElement<SkillBasicProps>
      key: "skills"
    }
) & {
  disablePadding?: boolean
}

type DetailsCardsProps = {
  leftTabs: DetailsCardType[]
  rightTabs: DetailsCardType[]
}

const DetailsCards = ({ leftTabs, rightTabs }: DetailsCardsProps) => {
  return (
    <div className="grid lg:grid-cols-4 gap-5">
      <div className="lg:col-span-3">
        {leftTabs.map((tab) => (
          <Paper
            key={tab.key}
            className={`${!tab.disablePadding ? "p-5" : ""} mb-5`}
          >
            {tab.element}
          </Paper>
        ))}
      </div>
      <div className="lg:col-span-1">
        {rightTabs.map((tab) => (
          <Paper
            key={tab.key}
            className={`${!tab.disablePadding ? "p-5" : ""} mb-5`}
          >
            {tab.element}
          </Paper>
        ))}
      </div>
    </div>
  )
}

export default DetailsCards
