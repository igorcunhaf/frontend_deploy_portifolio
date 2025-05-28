export default function PostCard({ post }) {
    return (
      <article className="border-l-4 border-primary p-4 mb-4 bg-white hover:bg-base-200 transition">
        <h3 className="text-2xl font-semibold mb-1">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <a href={`/blog/${post.id}`} className="text-primary hover:underline">
          Leia mais…
        </a>
      </article>
    )
  }