export interface EducationProps {
  eduOrganisations: {
    organisationName: string
    orgImage: string
    courseName: string
    timePeriod: string
  }[]
}
function Education({ eduOrganisations }: EducationProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Education</h3>
      <ul className="list-disc mt-2">
        {eduOrganisations.map((edu) => (
          <li key={edu.organisationName} className="flex mb-4">
            <img
              src={edu.orgImage}
              alt={edu.organisationName}
              className="h-12 w-12 rounded-lg"
            />
            <div className="ml-2">
              <h4 className="text-lg font-semibold">{edu.organisationName}</h4>
              <p className="text-gray-200">{edu.courseName}</p>
              <p className="text-gray-400">{edu.timePeriod}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
