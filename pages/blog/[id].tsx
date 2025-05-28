import { GetServerSideProps } from 'next';

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export default function PostPage({ post }: { post: Post }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(post.createdAt).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose" />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/posts/${params?.id}`);
  const post = await res.json();
  return { props: { post } };
};
