export type Experience = {
  role: string
  company: string
  points: string[]
}

export type Certificate = {
  title: string
  issuer: string
  description: string
  link: string
}

export const experiences: Experience[] = [
  {
    role: 'Data Science Intern',
    company: 'AIVariant',
    points: [
      'Worked on 2+ real-world datasets, improving prediction performance by 15%.',
      'Performed data cleaning, preprocessing and exploratory data analysis (EDA).',
      'Implemented and evaluated machine learning models using appropriate metrics.',
    ],
  },
]

export const certificates: Certificate[] = [
  {
    title: 'Oracle Agentic AI Foundations Associate',
    issuer: 'Oracle',
    description: 'Designing AI agents with LangChain and MCP, and building agentic AI solutions on Oracle Cloud Infrastructure.',
    link: '/certificates/oracle-agentic-ai.pdf',
  },
  {
    title: 'Data Science Program Certification',
    issuer: 'ExcelR',
    description: '200+ hours of training in Python, Machine Learning and Data Analysis, with 3+ real-world projects.',
    link: '/certificates/excelr-data-science.pdf',
  },
  {
    title: 'Data Science Internship',
    issuer: 'AIVariant',
    description: 'Completed a 3-month Data Science internship.',
    link: '/certificates/aivariant-internship.pdf',
  },
  {
    title: 'Freshman Code Cup',
    issuer: 'Azura National Technical Symposium, CMR College',
    description: 'Participated and certified in a national-level coding competition.',
    link: '',
  },
]