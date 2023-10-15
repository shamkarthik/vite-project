import { Paper } from "@mui/material"

export interface SkillBasicProps {
  skills: string[]
}
function SkillBasic({ skills }: SkillBasicProps) {
  return (
    <Paper className="col-span-1 p-4">
      <div>
        <h3 className="text-lg font-semibold">Skills</h3>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-blue-500 text-white px-3 py-1 rounded-2xl "
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Paper>
  )
}

export default SkillBasic
