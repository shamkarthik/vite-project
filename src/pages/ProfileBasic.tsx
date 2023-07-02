import VisibilityIcon from "@mui/icons-material/Visibility"
import { Avatar, Button, Link, Paper, Stack, useTheme } from "@mui/material"
import SkillBasic, { SkillBasicProps } from "./SkillBasic"

export interface ProfileBasicProps {
  user: {
    name: string
    byLine: string
    location: string
    image: string
    wallPaperImage: string
  }
  organisations: {
    name: string
    logo: string
  }[]
  skills: SkillBasicProps
  contacts: {
    contactImage: string
    contactName: string
    contactUrl: string
  }[]
  resumeLink: string
}
function ProfileBasic({
  user,
  organisations,
  skills,
  contacts,
  resumeLink,
}: ProfileBasicProps) {
  const {
    palette: { background },
  } = useTheme()
  return (
    <div className="grid grid-cols-4 gap-5">
      <Paper className="grid grid-rows-6 col-span-3 relative h-96 overflow-clip">
        <div className="row-span-2">
          <img src={user.wallPaperImage} alt="wallpaper" className="h-full w-full" />
        </div>

        <Avatar
          src={user.image}
          alt={user.name}
          sx={{ width: 152, height: 152, border: `solid 3px ${background.paper}` }}
          className="!absolute top-1/4 left-4 transform -translate-y-2/4"
        />

        <div className="row-span-1">
          <div className="grid grid-cols-2  mx-5 gap-4 mt-14">
            <div className="">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.byLine}</p>
              <p className="text-gray-500">{user.location}</p>
            </div>
            <div className="justify-self-center mt-2">
              {organisations.map((org) => (
                <div key={org.name} className="flex space-x-2 mb-4">
                  <Avatar
                    src={org.logo}
                    alt={org.name}
                    sx={{ width: 25, height: 25 }}
                    variant="rounded"
                  />
                  <p className="sm:text-sm text-gray-500">{org.name}</p>
                </div>
              ))}
            </div>
            <Stack direction="row" spacing={2}>
              {contacts.map((contact) => (
                <Link
                  key={contact.contactName}
                  aria-label={contact.contactName}
                  href={contact.contactUrl}
                  target="_blank"
                >
                  <img
                    alt={contact.contactName}
                    src={contact.contactImage}
                    className="h-10 w-10 rounded-lg"
                  />
                </Link>
              ))}
            </Stack>
            <Button
              startIcon={<VisibilityIcon />}
              variant="contained"
              style={{ fontWeight: "bold", minWidth: 100, maxWidth: 200 }}
              href={resumeLink}
              target="_blank"
              className="justify-self-center"
            >
              View Resume
            </Button>
          </div>
        </div>
      </Paper>
      <SkillBasic {...skills} />
    </div>
  )
}

export default ProfileBasic
