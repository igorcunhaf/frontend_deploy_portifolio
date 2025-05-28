import type { NextPage, GetServerSideProps } from 'next';
import api from '../../utils/api';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  githubLink?: string;
  liveDemoLink?: string;
  imageUrl?: string;
}

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => (
  <div>
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <p className="mb-4">{project.description}</p>
    <p className="mb-2"><strong>Tecnologias:</strong> {project.technologies}</p>
    {project.githubLink && <a href={project.githubLink} className="text-blue-600 hover:underline">GitHub</a>}
    {project.liveDemoLink && <a href={project.liveDemoLink} className="ml-4 text-blue-600 hover:underline">Demo</a>}
  </div>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await api.get(`/projects/${params?.id}`);
  return { props: { project: res.data } };
};

export default ProjectPage;