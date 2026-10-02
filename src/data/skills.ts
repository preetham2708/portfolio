export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Programming Languages', items: ['Python', 'SQL', 'JavaScript'] },
  {
    title: 'Data Science & Analytics',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Feature Engineering', 'Model Evaluation', 'Data Visualization'],
  },
  {
    title: 'Machine Learning & Deep Learning',
    items: ['Scikit-learn', 'K-Means', 'Hierarchical Clustering', 'TensorFlow', 'Keras', 'PyTorch', 'CNN'],
  },
  {
    title: 'Generative AI',
    items: ['RAG', 'LangChain', 'Prompt Engineering', 'LLM Integration', 'FAISS', 'Hugging Face Embeddings', 'Groq API', 'Vector Databases'],
  },
  {
    title: 'Agentic AI',
    items: ['LangGraph', 'MCP', 'Multi-Agent Orchestration', 'Tool Calling', 'State Management', 'Context Management'],
  },
  {
    title: 'Web & Backend',
    items: ['FastAPI', 'Streamlit', 'Next.js', 'React', 'Tailwind CSS', 'HTML/CSS', 'SSE'],
  },
  { title: 'Databases', items: ['SQLite', 'FAISS Vector Search'] },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Docker', 'LangSmith', 'Power BI', 'AWS S3', 'Oracle Cloud (OCI)'],
  },
]