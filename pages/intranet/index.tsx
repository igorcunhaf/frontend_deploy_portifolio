import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next'; // Use apenas se quiser buscar o token nos cookies também
import Link from 'next/link';
import IconButtonWithTooltip from '../../components/IconButtonWithTooltip';
import { FiEdit2, FiTrash2, FiPlus, FiX, FiMail, FiEye } from 'react-icons/fi';

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

type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function IntranetPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showPostsModal, setShowPostsModal] = useState(false);
  const [showMessagesModal, setShowMessagesModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Estado para proteção de rota

  // Protege a rota: só deixa acessar se estiver autenticado
  useEffect(() => {
    // Tenta pegar do localStorage, depois do cookie (se usar cookies)
    const localToken = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    const cookieToken = getCookie('access_token');
    if (!localToken && !cookieToken) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  // Só faz fetch dos dados depois de autenticação confirmada
  useEffect(() => {
    if (!loading) {
      fetchProjects();
      fetchPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // Busca sempre o token onde ele estiver (localStorage > cookie)
  function getToken() {
    return typeof window !== "undefined"
      ? localStorage.getItem('access_token') || getCookie('access_token')
      : getCookie('access_token');
  }

  const fetchProjects = async () => {
    try {
      const token = getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Falha ao buscar projetos');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const token = getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Falha ao buscar posts');
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  };

  const fetchMessages = async () => {
    setLoadingMessages(true);
    setErrorMessages(null);
    try {
      const token = getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error(`Erro ${res.status}: ${errorText}`);
        throw new Error(`Falha ao buscar mensagens (Status: ${res.status})`);
      }

      const data = await res.json();
      setMessages(data);
    } catch (error: any) {
      console.error('Erro ao buscar mensagens:', error);
      setErrorMessages(error.message || 'Ocorreu um erro desconhecido ao buscar mensagens.');
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleDeleteProject = async (id: number) => {
    const token = getToken();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProjects();
    } catch (error) {
      console.error('Erro ao deletar projeto:', error);
    }
  };

  const handleDeletePost = async (id: number) => {
    const token = getToken();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
    } catch (error) {
      console.error('Erro ao deletar post:', error);
    }
  };

  const handleOpenMessagesModal = () => {
    fetchMessages();
    setShowMessagesModal(true);
  };

  const handleCloseMessagesModal = () => {
    setShowMessagesModal(false);
    setSelectedMessage(null);
    setErrorMessages(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-gray-600">Verificando autenticação...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="flex flex-col space-y-4">
        <button onClick={() => setShowProjectsModal(true)} className="bg-[#1E3A8A] text-white px-6 py-3 rounded hover:bg-[#3B82F6] transition text-lg">
          Gerenciar Projetos
        </button>
        <button onClick={() => setShowPostsModal(true)} className="bg-[#1E3A8A] text-white px-6 py-3 rounded hover:bg-[#3B82F6] transition text-lg">
          Gerenciar Posts do Blog
        </button>
        <button onClick={handleOpenMessagesModal} className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition text-lg flex items-center justify-center gap-2">
          <FiMail size={20} /> Visualizar Mensagens
        </button>
      </div>

      {/* Modais existentes (Projetos e Posts) - mantidos como estavam */}
      {showProjectsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Gerenciar Projetos</h2>
            <ul className="space-y-3">
              {projects.length > 0 ? projects.map((proj) => (
                <li key={proj.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="truncate max-w-[70%]">{proj.title}</span>
                  <div className="flex gap-2 flex-shrink-0">
                    <IconButtonWithTooltip icon={<FiEdit2 size={18} />} label="Editar" as="link" href={`/intranet/projetos/editar/${proj.id}`} />
                    <IconButtonWithTooltip icon={<FiTrash2 size={18} />} label="Deletar" onClick={() => handleDeleteProject(proj.id)} className="text-red-600" />
                  </div>
                </li>
              )) : <p className="text-gray-500">Nenhum projeto encontrado.</p>}
            </ul>
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <Link href="/intranet/projetos/novo" className="group flex items-center gap-2 bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-[#1E3A8A]">
                <FiPlus size={16} /> <span>Novo Projeto</span>
              </Link>
              <IconButtonWithTooltip
                icon={<FiX size={20} />}
                label="Fechar"
                onClick={() => setShowProjectsModal(false)}
                className="absolute top-4 right-4 text-gray-600"
              />
            </div>
          </div>
        </div>
      )}
      {showPostsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Gerenciar Posts</h2>
            <ul className="space-y-3">
              {posts.length > 0 ? posts.map((post) => (
                <li key={post.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="truncate max-w-[70%]">{post.title}</span>
                  <div className="flex gap-2 flex-shrink-0">
                    <IconButtonWithTooltip icon={<FiEdit2 size={18} />} label="Editar" as="link" href={`/intranet/posts/editar/${post.id}`} />
                    <IconButtonWithTooltip icon={<FiTrash2 size={18} />} label="Deletar" onClick={() => handleDeletePost(post.id)} className="text-red-600" />
                  </div>
                </li>
              )) : <p className="text-gray-500">Nenhum post encontrado.</p>}
            </ul>
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <Link href="/intranet/posts/novo" className="group flex items-center gap-2 bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-[#1E3A8A]">
                <FiPlus size={16} /> <span>Novo Post</span>
              </Link>
              <IconButtonWithTooltip
                icon={<FiX size={20} />}
                label="Fechar"
                onClick={() => setShowPostsModal(false)}
                className="absolute top-4 right-4 text-gray-600"
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal de Mensagens (Atualizado) */}
      {showMessagesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative max-h-[80vh] flex flex-col">
            <h2 className="text-2xl font-bold text-green-700 mb-6">Mensagens de Contato</h2>
            <IconButtonWithTooltip
              icon={<FiX size={20} />}
              label="Fechar"
              onClick={handleCloseMessagesModal}
              className="absolute top-4 right-4 text-gray-600"
            />

            <div className="flex-grow overflow-y-auto pr-2">
              {loadingMessages ? (
                <p className="text-gray-500 text-center">Carregando mensagens...</p>
              ) : errorMessages ? (
                <div className="bg-red-100 text-red-700 p-3 rounded">
                  <p><strong>Erro:</strong> {errorMessages}</p>
                  <p className="text-sm mt-1">Verifique se o servidor backend está rodando e acessível em {process.env.NEXT_PUBLIC_API_URL}.</p>
                </div>
              ) : selectedMessage ? (
                <div className="bg-gray-50 p-4 rounded">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{selectedMessage.name}</h3>
                    <button onClick={() => setSelectedMessage(null)} className="text-sm text-blue-600 hover:underline">Voltar para lista</button>
                  </div>
                  <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> {selectedMessage.email}</p>
                  <p className="text-sm text-gray-600 mb-3"><strong>Data:</strong> {new Date(selectedMessage.createdAt).toLocaleString('pt-BR')}</p>
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {messages.length > 0 ? messages.map((msg) => (
                    <li key={msg.id} className="flex justify-between items-center bg-gray-50 p-3 rounded hover:bg-gray-100 cursor-pointer" onClick={() => setSelectedMessage(msg)}>
                      <div>
                        <span className="font-medium text-gray-800">{msg.name}</span>
                        <span className="text-sm text-gray-500 ml-2">({new Date(msg.createdAt).toLocaleDateString('pt-BR')})</span>
                      </div>
                      <IconButtonWithTooltip icon={<FiEye size={18} />} label="Visualizar" className="text-blue-600" />
                    </li>
                  )) : <p className="text-gray-500">Nenhuma mensagem encontrada.</p>}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
