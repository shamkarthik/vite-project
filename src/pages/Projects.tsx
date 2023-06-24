export interface ProjectsProps {
  projects: {
    projectName: string
    byLine: string
    projectDescription: string
  }[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <div className="">
      <h3 className="text-lg font-semibold">Projects</h3>
      <ul>
        {projects.map((proj) => (
          <li>
            <h4 className="text-lg font-semibold">{proj.projectName}</h4>
            <p className="text-gray-600">{proj.byLine}</p>
            <p>{proj.projectDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
