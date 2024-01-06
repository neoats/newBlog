import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogElements = ({ posts, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = posts.filter((blogs) => !selectedCategory || blogs.category === selectedCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (

    <div className="flex flex-wrap ">
      {filteredBlogs.map((post, i) => (
        <div key={i} className='inline-flex gap-10 border-2 border-black shadow-lg rounded cursor-pointer'>
     
           <input
           className="mr-2 rounded border-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="checkbox"
            id={`checkbox-${post.id}`}
            onChange={() => handleCheckboxChange(post.id)}
          />
          <div className="w-full shadow-lg rounded-t-lg lg:rounded-lg">
            {post.node.featuredImage && post.node.featuredImage.url ? (
              <img

                src={post.node.featuredImage.url}
                alt={post.node.title}
                className="h-32 w-32 border-gray-700 border-3"
              />
            ) : (
              <div className="bg-gray-300 h-full w-full" />
            )}
          </div>
          <div className='mt-4 inline-flex'>
            <h2 className='mb-2 font-bold hover:text-blue-600 cursor-pointer'>
              <Link to={`/posts/${post.node.slug}`}>{post.node.title}</Link>
            </h2>
            <p className='mb-2 text-gray-600'><FaUser className=' items-center mr-2' />{post.node.author.name}</p>
            <p className="text-center line-clamp-3 text-lg text-gray-700 font-normal mb-2">
              {post.node.excerpt}
            </p>
            <div>
              <p className='mb-2 text-gray-500'>{post.node.published_date
                ? `Published: ${post.node.published_date}`
                : 'Published: ____________'}</p>
            </div>
        
          </div>
        </div>
      ))}
    </div>
  
  );
};

export default BlogElements;
