import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditarProjeto = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [liveDemoLink, setLiveDemoLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title);
          setDescription(data.description);
          setTechnologies(data.technologies);
          setGithubLink(data.githubLink);
          setLiveDemoLink(data.liveDemoLink);
          setImageUrl(data.imageUrl);
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ title, description, technologies, githubLink, liveDemoLink, imageUrl }),
    });
    router.push('/intranet');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-[#1E3A8A]">Editar Projeto</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required className="input" />
          <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required className="input" />
          <input type="text" placeholder="Tecnologias" value={technologies} onChange={(e) => setTechnologies(e.target.value)} required className="input" />
          <input type="url" placeholder="Link GitHub" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} className="input" />
          <input type="url" placeholder="Link Demo" value={liveDemoLink} onChange={(e) => setLiveDemoLink(e.target.value)} className="input" />
          <input type="url" placeholder="URL da Imagem" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="input" />
          <div className="flex justify-start mt-2">
            <button
              type="submit"
              className="bg-[#1E3A8A] text-white font-semibold py-2 px-6 rounded hover:bg-[#3B82F6] transition"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarProjeto;
