import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditarPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title);
          setContent(data.content);
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ title, content }),
    });
    router.push('/intranet');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-[#1E3A8A]">Editar Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required className="input" />
          <textarea placeholder="Conteúdo" value={content} onChange={(e) => setContent(e.target.value)} required className="input" rows={10} />
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

export default EditarPost;
