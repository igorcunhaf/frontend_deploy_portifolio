import { NextPage } from 'next';
import { useState } from 'react';
import api from '../utils/api';

const Contact: NextPage = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/contact', data);
      setStatus('Mensagem enviada com sucesso!');
      setData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Erro ao enviar.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-6 py-12 text-[#111827] animate-fade-in">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6">Fale Comigo</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-3 border border-gray-300 rounded"
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <textarea
            placeholder="Mensagem"
            className="w-full p-3 border border-gray-300 rounded"
            rows={4}
            value={data.message}
            onChange={e => setData({ ...data, message: e.target.value })}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#1E3A8A] text-white font-semibold rounded hover:bg-[#3748a5] transition"
          >
            Enviar
          </button>
        </form>
        {status && <p className="mt-4 text-[#3B82F6] font-medium">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
