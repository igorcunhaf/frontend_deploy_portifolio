import { useState, useEffect } from 'react';
import Link from 'next/link';
import IconButtonWithTooltip from '../../components/IconButtonWithTooltip';
import { FiEdit2, FiTrash2, FiPlus, FiX } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  description: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function IntranetPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showPostsModal, setShowPostsModal] = useState(false);

  useEffect(() => {
    fetchProjects();
    fetchPosts();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
    const data = await res.json();
    setProjects(data);
  };

  const fetchPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    setPosts(data);
  };

  const handleDeleteProject = async (id: number) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, { method: 'DELETE' });
    fetchProjects();
  };

  const handleDeletePost = async (id: number) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="flex flex-col space-y-4">
        <button onClick={() => setShowProjectsModal(true)} className="bg-[#1E3A8A] text-white px-6 py-3 rounded hover:bg-[#3B82F6] transition text-lg">
          Projetos
        </button>
        <button onClick={() => setShowPostsModal(true)} className="bg-[#1E3A8A] text-white px-6 py-3 rounded hover:bg-[#3B82F6] transition text-lg">
          Posts do Blog
        </button>
      </div>

      {/* Modal de Projetos */}
      {showProjectsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Gerenciar Projetos</h2>
            <ul className="space-y-3">
              {projects.map((proj) => (
                <li key={proj.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span>{proj.title}</span>
                  <div className="flex gap-2">
                    <IconButtonWithTooltip icon={<FiEdit2 size={18} />} label="Editar" as="link" href={`/intranet/projetos/editar/${proj.id}`} />
                    <IconButtonWithTooltip icon={<FiTrash2 size={18} />} label="Deletar" onClick={() => handleDeleteProject(proj.id)} className="text-red-600" />
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mt-6">
              <IconButtonWithTooltip
                icon={<FiX size={20} />}
                label="Fechar"
                onClick={() => setShowProjectsModal(false)}
                className="absolute top-4 right-4 text-gray-600"
              />
              <Link href="/intranet/projetos/novo" className="group flex items-center gap-2 bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-[#1E3A8A]">
                <FiPlus size={16} /> <span>Novo Projeto</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Posts */}
      {showPostsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Gerenciar Posts</h2>
            <ul className="space-y-3">
              {posts.map((post) => (
                <li key={post.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span>{post.title}</span>
                  <div className="flex gap-2">
                    <IconButtonWithTooltip icon={<FiEdit2 size={18} />} label="Editar" as="link" href={`/intranet/posts/editar/${post.id}`} />
                    <IconButtonWithTooltip icon={<FiTrash2 size={18} />} label="Deletar" onClick={() => handleDeletePost(post.id)} className="text-red-600" />
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mt-6">
              <IconButtonWithTooltip
                icon={<FiX size={20} />}
                label="Fechar"
                onClick={() => setShowPostsModal(false)}
                className="absolute top-4 right-4 text-gray-600"
              />
              <Link href="/intranet/posts/novo" className="group flex items-center gap-2 bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-[#1E3A8A]">
                <FiPlus size={16} /> <span>Novo Post</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
