export interface Project {
  title: string
  description: string
  url: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Kashin',
    description:
      'Expense tracker SaaS that skips manual logging. Smart, automatic, effortless.',
    url: 'https://waitlist.kashin.id',
    tags: ['React', 'TypeScript', 'AI'],
  },
  {
    title: 'Provent Mandiri',
    description:
      'Company profile for an event organizer in Jakarta. Built with SEO-first approach, a manageable article system, and a browsable product catalog.',
    url: 'https://proventmandiri.com',
    tags: ['Next.js', 'SEO', 'CMS'],
  },
]

export default projects
