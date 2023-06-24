import { Container } from "@mui/material"
import MoreDetails from "./MoreDetails"
import ProfileBasic, { ProfileBasicProps } from "./ProfileBasic"
import { SkillBasicProps } from "./SkillBasic"

const skillsDetails: SkillBasicProps = {
  skills: ["JavaScript", "React", "Node.js", "CSS", "Html", "Git"],
}
const ProfileBasicData: ProfileBasicProps = {
  user: {
    name: "Name",
    byLine: "Software Engineer",
    location: "Chennai, India",
    image:
      "https://media.licdn.com/dms/image/C5603AQEl6toEG8qvqg/profile-displayphoto-shrink_400_400/0/1635876825973?e=1692835200&v=beta&t=_8hdmQw8OqguELCON7v54sa1wMlc6hJfGzYgdmPiRag",
    wallPaperImage:
      "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp",
  },
  organisations: [
    {
      name: "Hexaware Technologies",
      logo: "https://media.licdn.com/dms/image/D4D0BAQGGsYVt3SRZjw/company-logo_100_100/0/1685596232074?e=1695859200&v=beta&t=Bedf63_aTvnfg6NSiH9rbxVWpPtKDI4WI9_cvxPLIXo",
    },
    {
      name: "KCG College of Technology",
      logo: "https://media.licdn.com/dms/image/C560BAQGHTIi1dbR_jw/company-logo_100_100/0/1519894924589?e=1695859200&v=beta&t=wp09IqJ639lki9gfSPjoaSP-VCInFufr8ufljzTyNPU",
    },
  ],
  skills: skillsDetails,
  contacts: [
    {
      contactImage:
        "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
      contactName: "LinkedIn",
      contactUrl: "https://www.linkedin.com/in/sham-karthik-s/",
    },
    {
      contactImage:
        "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-1024.png",
      contactName: "Github",
      contactUrl: "https://www.linkedin.com/in/sham-karthik-s/",
    },
  ],
  resumeLink: "string",
}
function Home() {
  return (
    <Container maxWidth="xl" className="p-5">
      <div className="grid gap-5">
        {/* <Headers /> */}
        <ProfileBasic {...ProfileBasicData} />
        <MoreDetails />
      </div>
    </Container>
  )
}

export default Home
