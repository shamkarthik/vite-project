export interface ContactProps {
  contacts: { [key: string]: string }
}

function Contact({ contacts }: ContactProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mb-2">Contact</h3>
      <ul>
        {Object.keys(contacts).map((contact) => (
          <li className="break-words mb-4">{`${contact}: ${contacts[contact]}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default Contact
