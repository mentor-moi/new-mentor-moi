import MentorCard from '../components/elements/MentorCard/MentorCard'

export default function Mentors() {
  const people = [
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1658370640341-7eea6370dce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1658312228094-d598e76edcbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1618297817149-d703265028b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1640909291801-6f68654f1ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1537735319956-df7db4b6a4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1657299143548-658603d76b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ]

  return (
    <div className="bg-lightPurple">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl">
              Mentors
            </h2>
            <p className="text-xl text-black">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-4 grid sm:grid-cols-2 gap-6 sm:space-y-0 md:grid-cols-3 sm:gap-8"
          >
            {people.map((person, index) => (
              <MentorCard
                name={person.name}
                role={person.role}
                imageUrl={person.imageUrl}
                twitterUrl={person.twitterUrl}
                linkedinUrl={person.linkedinUrl}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
