import { useState } from 'react';
import type { Post } from '../types';

export default function PostsList({ posts, category }: { posts: Post[], category: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <article key={post.id} className="relative group cursor-pointer">
            <a href={`/${category}/${post.slug}`} className="block">
			<div className="aspect-square w-full rounded-lg overflow-hidden relative bg-gradient-to-br from-gray-800 via-blue-900 to-purple-900 hover:shadow-lg transition-shadow duration-300">
				{post.feature_image_url && (
				<img 
					src={post.feature_image_url} 
                    alt={post.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-60 transition-opacity duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {post.views_count >= 0 && (
                    <p className="text-white/80 text-sm mt-2 drop-shadow">
                      {post.views_count} views
                    </p>
                  )}
                  <h2 className="text-white text-xl font-bold leading-tight line-clamp-3 drop-shadow-lg">
                    {post.title}
                  </h2>
				  <p>{post.excerpt && post.excerpt.length > 0 ? post.excerpt.substring(0, 50) : ''}...</p>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 mx-1">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}