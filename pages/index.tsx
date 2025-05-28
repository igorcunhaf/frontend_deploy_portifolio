import { NextPage } from 'next';
import Link from 'next/link';
import { FaLaptopCode, FaDatabase, FaServer, FaGithub } from 'react-icons/fa';

const Home: NextPage = () => (
  <div className="min-h-screen bg-[#F9FAFB] text-[#111827] animate-fade-in px-6 py-12">
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
          Olá, sou Igor Cunha Ferreira
        </h1>
        <p className="text-xl md:text-2xl text-[#6B7280] max-w-xl mx-auto mb-6">
          Desenvolvedor Fullstack apaixonado por tecnologia, performance e boas práticas de código.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/projetos" legacyBehavior>
            <a className="px-6 py-3 bg-[#1E3A8A] text-white rounded-lg font-medium hover:bg-[#3748a5] transition">
              Ver Projetos
            </a>
          </Link>
          <Link href="/contato" legacyBehavior>
            <a className="px-6 py-3 border-2 border-[#1E3A8A] text-[#1E3A8A] rounded-lg font-medium hover:bg-[#1E3A8A] hover:text-white transition">
              Entrar em Contato
            </a>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaLaptopCode className="text-3xl mx-auto text-[#3B82F6] mb-2" />
          <h3 className="font-semibold">Frontend</h3>
          <p className="text-sm text-[#6B7280]">React, Vue.js, AngularJS</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaServer className="text-3xl mx-auto text-[#3B82F6] mb-2" />
          <h3 className="font-semibold">Backend</h3>
          <p className="text-sm text-[#6B7280]">Java, Spring Boot, Node.js</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaDatabase className="text-3xl mx-auto text-[#3B82F6] mb-2" />
          <h3 className="font-semibold">Banco de Dados</h3>
          <p className="text-sm text-[#6B7280]">PostgreSQL, MySQL</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaGithub className="text-3xl mx-auto text-[#3B82F6] mb-2" />
          <h3 className="font-semibold">DevOps</h3>
          <p className="text-sm text-[#6B7280]">Git, GitLab CI/CD</p>
        </div>
      </section>
    </div>
  </div>
);

export default Home;
