export type Project = {
  title: string
  subtitle: string
  points: string[]
  tech: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    title: 'My Perplexity',
    subtitle: 'Agentic AI Search Assistant',
    points: [
      'LangGraph agent that routes queries across web search (Tavily), document RAG (FAISS) and a calculator tool.',
      'Persistent chat memory with SqliteSaver, so history survives server restarts.',
      'Real-time streaming responses using FastAPI and Server-Sent Events.',
      'Dockerized, with LangSmith for end-to-end observability.',
    ],
    tech: ['LangGraph', 'LangChain', 'Groq', 'FAISS', 'FastAPI', 'Next.js', 'Docker'],
    github: '',
    demo: '',
  },
  {
    title: 'Multi-Agent Travel Planner',
    subtitle: 'Supervisor-based multi-agent system',
    points: [
      'Supervisor pattern routing to four specialized agents, with MCP tools running in parallel.',
      'Budget-risk detection that triggers an LLM call to suggest alternatives.',
      'Real-time APIs (Tavily, AviationStack) with human-in-the-loop approval.',
      'Dockerized, with LangSmith observability.',
    ],
    tech: ['LangGraph', 'MCP', 'Groq', 'FastAPI', 'SQLite', 'Docker'],
    github: '',
    demo: '',
  },
]