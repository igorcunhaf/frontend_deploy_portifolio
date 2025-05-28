import Image from 'next/image';
import { NextPage } from 'next';
import { FaLaptopCode, FaUserGraduate, FaGlobe, FaCodeBranch, FaServer } from 'react-icons/fa';

const About: NextPage = () => (
  <div className="min-h-screen bg-[#F9FAFB] px-6 py-12 text-[#111827] animate-fade-in">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[#1E3A8A]">Sobre Mim</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
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
            Olá! Sou <strong>Igor Cunha Ferreira</strong>, um desenvolvedor fullstack de 30 anos, atualmente cursando o 7º período de Sistemas de Informação na UFLA.
          </p>
          <p className="text-lg leading-relaxed">
            Atuei como Analista de Sistemas na GT4W Consultoria, desenvolvendo e mantendo sistemas robustos com <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Vue.js</strong>, <strong>AngularJS</strong> e muito mais.
          </p>
          <p className="text-lg leading-relaxed">
            Sou movido por desafios, aprendizado contínuo e soluções que equilibram tecnologia, design e experiência do usuário.
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
            <p>Bacharelado em Sistemas de Informação - UFLA</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
