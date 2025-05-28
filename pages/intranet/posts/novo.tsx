import { useState } from 'react';
import { useRouter } from 'next/router';

const NovoPost = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
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
        <h1 className="text-2xl font-bold mb-6 text-[#1E3A8A]">Novo Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required className="input" />
          <textarea placeholder="Conteúdo (HTML permitido)" value={content} onChange={(e) => setContent(e.target.value)} required className="input" rows={10} />
          <div className="flex justify-start mt-2">
            <button
              type="submit"
              className="bg-[#1E3A8A] text-white font-semibold py-2 px-6 rounded hover:bg-[#3B82F6] transition"
            >
              Salvar Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NovoPost;
