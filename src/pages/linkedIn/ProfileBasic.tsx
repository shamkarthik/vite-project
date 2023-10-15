import VisibilityIcon from "@mui/icons-material/Visibility"
import { Avatar, Button, Link, Stack, useTheme } from "@mui/material"

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
  contacts,
  resumeLink,
}: ProfileBasicProps) {
  const {
    palette: { background },
    shape: { borderRadius },
  } = useTheme()
  return (
    // <div className="grid grid-cols-4 gap-5">
    <div className="grid grid-rows-6 relative h-96  pb-5">
      <div className="row-span-2">
        <img
          src={user.wallPaperImage}
          alt="wallpaper"
          className="h-full w-full"
          style={{
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
          }}
        />
      </div>

      <Avatar
        src={user.image}
        alt={user.name}
        sx={{ width: 152, height: 152, border: `solid 3px ${background.paper}` }}
        className="!absolute top-1/4 left-1/2 lg:left-4 md:left-4 sm:left-4 transform -translate-y-2/4 -translate-x-1/2 lg:-translate-x-0 sm:-translate-x-0 md:-translate-x-0"
      />

      <div className="row-span-1">
        <div className="grid grid-cols-2  justify-items-center sm:justify-items-start lg:justify-items-start md:justify-items-start mx-5 gap-4 mt-14">
          <div className="">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.byLine}</p>
            <p className="text-gray-500">{user.location}</p>
          </div>
          <div className="sm:justify-self-center lg:justify-self-center lg:mt-2  hidden sm:block md:block lg:block">
            {organisations.map((org) => (
              <div key={org.name} className="flex space-x-2 mb-4">
                <Avatar
                  src={org.logo}
                  alt={org.name}
                  sx={{
                    width: 25,
                    height: 25,
                  }}
                  variant="rounded"
                />
                <p className="sm:text-sm text-gray-500">{org.name}</p>
              </div>
            ))}
          </div>
          <Stack direction="row" spacing={2} className="">
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
            className="col-span-2 sm:col-span-1 sm:justify-self-center"
          >
            View Resume
          </Button>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default ProfileBasic
