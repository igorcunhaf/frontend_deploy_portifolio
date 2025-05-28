import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Falha no login');
      }

      const data = await res.json();

      // Armazena o token no localStorage
      localStorage.setItem('token', data.token);

      // Redireciona para a intranet
      router.push('/intranet');
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md animate-fade-in">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Login</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#1E3A8A] focus:ring focus:ring-[#1E3A8A]/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#1E3A8A] focus:ring focus:ring-[#1E3A8A]/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E3A8A] text-white py-2 px-4 rounded hover:bg-[#3B82F6] transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
