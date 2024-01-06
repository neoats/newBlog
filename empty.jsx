{
  /* loginform email */
}
{
  /*  <div className="mb-4">
                    <label htmlFor="email" className="block text-md font-mono font-bold text-black ">
                        Email
                    </label>
                    <input
                        type="email"  // "password" yerine "email" olarak değiştirildi
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 text-black w-full border rounded-md"
                        placeholder="Enter your email"
                        required
                    />
                </div> */
}

/* inline-flex post */
/* import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCards = ({ posts, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = posts
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="flex flex-wrap gap-8">
      {filteredBlogs.map((post, i) => (
        <div
          key={i}
          className="p-5 shadow-lg rounded cursor-pointer inline-block"
        >
          <div className="w-full shadow-lg rounded-t-lg lg:rounded-lg">
            {post.node.featuredImage && post.node.featuredImage.url ? (
              <img
                src={post.node.featuredImage.url}
                alt={post.node.title}
                className="w-full border-gray-700 border-3"
              />
            ) : (
              <div className="bg-gray-300 h-full w-full" />
            )}
          </div>
          <h2 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            <Link to={`/posts/${post.node.slug}`}>{post.node.title}</Link>
          </h2>
          <p className="mb-2 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {post.node.author.name}
          </p>
          <p className="text-center line-clamp-3 text-lg text-gray-700 font-normal mb-2">
            {post.node.excerpt}
          </p>
          <div>
            <p className="mb-2 text-gray-500">
              {" "}
              {post.node.published_date
                ? `Published: ${post.node.published_date}`
                : "Published: ____________"}
            </p>
          </div>
          <Link to={`/post/${post.node.slug}`}>
            <button className="border-r-4 font-bold border-b-4 px-2 py-1 border-black duration-500 ease hover:-translate-y-1 inline-block bg-orange-600 text-base rounded-sm text-white cursor-pointer z-1">
              Okumaya Devam Et
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}; */

export default BlogCards;


import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogElements = ({ posts, currentPage, selectedCategory, pageSize, handleCheckboxChange }) => {
  const filteredBlogs = posts
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {filteredBlogs.map((post, i) => (
        <div key={i} className='bg-white p-4 shadow-lg rounded cursor-pointer'>
          {/* Checkbox */}
          <input
            className="mr-2 rounded border-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="checkbox"
            id={`checkbox-${post.id}`}
            onChange={() => handleCheckboxChange(post.id)}
          />
          {/* Blog Content */}
          <div className='mt-4'>
            <h2 className='mb-2 font-bold hover:text-blue-600 cursor-pointer'>
              <Link to={`/posts/${post.node.slug}`}>{post.node.title}</Link>
            </h2>
            <p className='mb-2 text-gray-600'>
              <FaUser className='inline-flex items-center mr-2' />
              {post.node.author.name}
            </p>
            <p className="line-clamp-3 text-lg text-gray-700 font-normal mb-2">
              {post.node.excerpt}
            </p>
            <div>
              <p className='mb-2 text-gray-500'>
                {post.node.published_date
                  ? `Published: ${post.node.published_date}`
                  : 'Published: ____________'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogElements;
