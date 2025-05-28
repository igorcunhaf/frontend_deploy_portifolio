import { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

type Props = {
  posts: Post[];
};

const Blog: NextPage<Props> = ({ posts }) => (
  <div className="min-h-screen bg-[#F9FAFB] text-[#111827] px-6 py-12 animate-fade-in">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-[#1E3A8A]">Blog</h1>

      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-lg transition">
          <p className="text-sm text-[#6B7280] mb-1">
            {new Date(post.createdAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-2">{post.title}</h2>
          
          <div
            className="text-[#374151] mb-4"
            dangerouslySetInnerHTML={{
              __html: post.content.length > 200
                ? post.content.slice(0, 200) + '...'
                : post.content
            }}
          />

          <Link href={`/blog/${post.id}`} legacyBehavior>
            <a className="text-[#3B82F6] font-medium hover:underline">Ler mais →</a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/posts');
  const posts: Post[] = await res.json();

  return { props: { posts } };
};

export default Blog;
