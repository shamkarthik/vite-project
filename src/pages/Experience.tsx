export interface ExperienceProps {
  organisations: {
    orgName: string
    startEnd: string
    location: string
    orgLogo: string
    projects: {
      prjDesignation: string
      projectName: string
      prjStartEnd: string
      prjTechStack: string[]
      prjDescription: string
    }[]
  }[]
}
function Experience({ organisations }: ExperienceProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Experience</h3>
      <ol>
        {organisations.map((org) => (
          <li key={org.orgName} className="mb-10">
            <div className="flex mb-3">
              <img src={org.orgLogo} alt="Company Logo" className="h-12 w-12" />
              <div className="ml-2">
                <h4 className="text-lg font-semibold">{org.orgName}</h4>
                <p className="text-gray-200">{org.startEnd}</p>
                <p className="text-gray-200">{org.location}</p>
              </div>
            </div>
            <ol className="relative  border-l border-gray-200 dark:border-gray-700 ml-8">
              {org.projects.map((prj) => (
                <li key={prj.projectName} className="mb-5 ml-6">
                  <span className="absolute border-t-0 flex items-center justify-center w-2 h-2  rounded-full -left-1 transform translate-y-2.5 ring-4 ring-white bg-gray-100 dark:ring-gray-900 dark:bg-gray-700"></span>
                  <h4 className="text-lg font-semibold">{prj.projectName}</h4>
                  <p className="text-sm font">{prj.prjDesignation}</p>
                  <p className="text-gray-600">{prj.prjStartEnd}</p>
                  <p>{prj.prjTechStack.join(", ")}</p>
                  <p>{prj.prjDescription}</p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Experience
