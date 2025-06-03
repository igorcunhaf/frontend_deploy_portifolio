# Portfólio Frontend

Frontend desenvolvido em Next.js com TypeScript e estilização com Tailwind CSS. Este projeto consome a API backend do portfólio e oferece uma interface atrativa e responsiva para apresentar seus projetos, posts do blog, informações pessoais e facilitar o contato.

## 🚀 Tecnologias

- Next.js (React + SSR/SSG)
- TypeScript
- Tailwind CSS
- Axios para requisições HTTP
- React Icons para ícones
- cookies-next para manipulação de cookies e autenticação

## ⚙️ Instalação

1. Clone o repositório:  
   git clone https://github.com/seu-usuario/frontend_deploy_portifolio.git  
   cd frontend_deploy_portifolio

2. Instale as dependências:  
   npm install

3. Configure o ambiente:  
   Crie um arquivo .env.local na raiz do projeto e defina a URL da API backend:

   NEXT_PUBLIC_API_URL=http://localhost:3000

   Altere a URL conforme o endereço do seu backend (produção ou local).

4. Rode o projeto em modo desenvolvimento:  
   npm run dev

   O site estará disponível em http://localhost:3000

## 🏹 Scripts disponíveis

npm run dev — Inicia o servidor de desenvolvimento  
npm run build — Gera a build de produção  
npm run start — Inicia o servidor Next.js em modo produção

## 📚 Principais funcionalidades

- Exibição de projetos e posts do blog consumidos da API
- Página "Sobre" com apresentação pessoal
- Formulário de contato integrado ao backend
- Área de login e intranet para gerenciamento dos seus posts/projetos
- Layout responsivo, moderno e pronto para mobile
- Ícones personalizados e UX amigável

## 🗂️ Estrutura do projeto

- /pages — Páginas principais do site (início, blog, projetos, contato, sobre, login, intranet)
- /components — Componentes reutilizáveis (Navbar, Cards, Formulários, etc)
- /public — Imagens públicas e assets
- /styles — Estilos globais (Tailwind)

## 🔒 Autenticação

A autenticação é feita via cookies e integra-se com o backend. Algumas rotas (como a intranet) exigem login.

## 🌐 Deploy

Você pode publicar o projeto facilmente em serviços como Vercel, Netlify, AWS, entre outros.

## 📄 Licença

Projeto open-source para uso pessoal ou profissional.  
Sinta-se livre para clonar, modificar e usar!
