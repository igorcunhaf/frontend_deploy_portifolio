import Image from 'next/image';
import { NextPage } from 'next';
import { FaLaptopCode, FaUserGraduate, FaGlobe, FaCodeBranch, FaServer } from 'react-icons/fa';

const About: NextPage = () => (
  <div className="min-h-screen bg-[#F9FAFB] px-6 py-12 text-[#111827] animate-fade-in">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[#1E3A8A]">Sobre Mim</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <Image
            src="/perfil.jpeg"
            alt="Foto de perfil de Igor Cunha Ferreira"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <p className="text-lg leading-relaxed">
            Olá! Sou <strong>Igor Cunha Ferreira</strong>, desenvolvedor full stack com experiência no desenvolvimento e manutenção de sistemas completos, do backend ao frontend.
          </p>
          <p className="text-lg leading-relaxed">
            Atuo com múltiplas linguagens e frameworks, incluindo <strong>Java</strong>, <strong>JavaScript</strong>, <strong>C++</strong>, <strong>Spring Boot</strong>, <strong>Node.js</strong>, <strong>React</strong>, <strong>Vue.js</strong> e <strong>AngularJS</strong>. Tenho domínio em bancos de dados <strong>MySQL</strong> e <strong>PostgreSQL</strong>, integração de APIs RESTful, testes automatizados e versionamento de código com <strong>Git</strong>, <strong>GitHub</strong> e <strong>GitLab</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Sou movido por desafios e aprendizado contínuo. Valorizo comunicação clara e entrega de resultados de qualidade, buscando sempre contribuir para o sucesso dos projetos em que estou envolvido.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-[#111827]">
        <div className="flex items-start gap-4 bg-white shadow-md p-4 rounded-lg">
          <FaLaptopCode className="text-3xl text-[#1E3A8A]" />
          <div>
            <h3 className="text-lg font-semibold">Stack Técnica</h3>
            <p>Java, Spring Boot, Node.js, Vue.js, React, AngularJS</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white shadow-md p-4 rounded-lg">
          <FaServer className="text-3xl text-[#1E3A8A]" />
          <div>
            <h3 className="text-lg font-semibold">Bancos de Dados</h3>
            <p>PostgreSQL, MySQL, integrações RESTful</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white shadow-md p-4 rounded-lg">
          <FaCodeBranch className="text-3xl text-[#1E3A8A]" />
          <div>
            <h3 className="text-lg font-semibold">DevOps & CI/CD</h3>
            <p>GitLab, GitHub, pipelines automatizados</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white shadow-md p-4 rounded-lg">
          <FaUserGraduate className="text-3xl text-[#1E3A8A]" />
          <div>
            <h3 className="text-lg font-semibold">Formação</h3>
            <p>Bacharelado em Sistemas de Informação - UFLA (em andamento)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
