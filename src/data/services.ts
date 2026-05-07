export interface Service {
  title: string
  description: string
  examples: string[]
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      "I build websites and web apps that load fast, feel smooth, and don't break on mobile.",
    examples: ['Company website', 'Portfolio site', 'SaaS product'],
  },
  {
    title: 'UI/UX Design',
    description: 'I make interfaces that people actually enjoy using, not just tolerate.',
    examples: ['App wireframes', 'Design system', 'User flow optimization'],
  },
  {
    title: 'Custom Software',
    description:
      'Every team has tasks that eat up hours. I build tools that handle those so your people can focus on real work.',
    examples: ['Internal dashboards', 'Inventory management', 'Employee onboarding system'],
  },
  {
    title: 'AI Integration',
    description:
      'I plug AI into your product where it actually makes sense, not just for the hype.',
    examples: ['Chatbots', 'Document processing', 'Smart recommendations'],
  },
]

export default services
