import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogCards = ({ posts, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = posts.filter((blogs) => !selectedCategory || blogs.category === selectedCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize)
  return (

    <div className='grid md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 grid-cols-1 gap-8 ' >
      {filteredBlogs.map((post,i) => (

        <div key={i} to={`/blog/${post.node.id}`} className='p-5  shadow-lg rounded cursor-pointer'>

          <div className="  w-full shadow-lg rounded-t-lg lg:rounded-lg">
            {post.node.featuredImage && post.node.featuredImage.url ? (
              <img
                src={post.node.featuredImage.url}
                alt={post.node.title}
                className=" w-full border-gray-700 border-3"
              />
            ) : (
              <div className="bg-gray-300 h-full w-full" />
            )}
          </div>

          <h2 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>
            <Link to={`/posts/${post.node.slug}`}>{post.node.title}</Link>
          </h2>
          <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2' />{post.node.author.name}</p>
          <p className="text-center line-clamp-3 text-lg text-gray-700 font-normal  mb-2">
            {post.node.excerpt}
          </p>
          <div>
            <p className='mb-2 text-gray-500'>   {post.node.published_date
              ? `Published: ${post.node.published_date}`
              : 'Published: ____________'}</p>
        
          </div>
          <Link href={`/post/${post.node.slug}`}>
              <button className="border-r-4 font-bold border-b-4 px-2 py-1 border-black duration-500 ease  hover:-translate-y-1 inline-block bg-orange-600 text-base rounded-sm text-white cursor-pointer z-1">
                Okumaya Devam Et
              </button>
            </Link>

        </div>
      ))}
    </div>
  );
};

export default BlogCards;