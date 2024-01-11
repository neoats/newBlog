import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogElements = ({ posts, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = posts
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      {filteredBlogs.map((post, i) => (
        <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
          <td className="px-4 py-2">
            <input
              className="mr-2 rounded border-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="checkbox"
              id={`checkbox-${post.id}`}
            />
          </td>
          <td>
            {post.node.featuredImage && post.node.featuredImage.url ? (
              <img
                src={post.node.featuredImage.url}
                alt={post.node.title}
                className="h-32 w-32 border-gray-700 border-3"
              />
            ) : (
              <div className="bg-gray-300 h-32 w-32" />
            )}
          </td>
          <td className="px-4 py-2 truncate">{post.node.title}</td>
          <td className="px-4 py-2 truncate">{post.node.author.name}</td>
          <td className="px-4 py-2 truncate">{post.node.excerpt}</td>
          <td className="px-4 py-2 truncate">{post.node.published_date}</td>
          <td className="px-4 py-2 truncate">
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDelete(post.id)}
            >
              Sil
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default BlogElements;
