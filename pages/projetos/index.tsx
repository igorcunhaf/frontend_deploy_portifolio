import { GetServerSideProps, NextPage } from 'next';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Projeto = {
  id: number;
  title: string;
  description: string;
  technologies: string;
  githubLink?: string;
  liveDemoLink?: string;
};

type Props = {
  projetos: Projeto[];
};

const Projetos: NextPage<Props> = ({ projetos }) => (
  <div className="min-h-screen bg-[#F9FAFB] text-[#111827] px-6 py-12 animate-fade-in">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-[#1E3A8A] mb-8">Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2 text-[#1E3A8A]">{projeto.title}</h2>
            <p className="text-sm text-[#6B7280] mb-4">{projeto.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projeto.technologies.split(',').map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-[#3B82F6] text-white text-xs rounded">
                  {tech.trim()}
                </span>
              ))}
            </div>
            {(projeto.githubLink || projeto.liveDemoLink) && (
              <a
                href={projeto.liveDemoLink || projeto.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1E3A8A] font-medium hover:underline flex items-center gap-2"
              >
                Ver Projeto <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/projects');
    if (!res.ok) {
      throw new Error('Erro ao buscar projetos');
    }

    const projetos: Projeto[] = await res.json();

    return {
      props: {
        projetos,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return {
      props: {
        projetos: [],
      },
    };
  }
};

export default Projetos;
