import { getPosts, getCategories } from "../../services/dbquery";
import React, { useState, useEffect } from "react";
import BlogElements from "./BlogElements";

const PostList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState([]);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };
  useEffect(() => {
    async function fetchPosts() {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    async function fetchCategories() {
      try {
        const categories = await getCategories();
        setActiveCategory(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchPosts();
    fetchCategories();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category ? [category] : []);
    66;
  };

  return (
    <div className="mt-8 bg-blue-200 w-1/2 mx-auto">
      <h2 className="text-2xl font-bold border-b-black border-b-2">
        Tüm Postlar
      </h2>
      <div className="mt-5">
        <table className="table-fixed w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Seç</th>
              <th className="px-4 py-2">Fotoğraf</th>
              <th className="px-4 py-2">Başlık</th>
              <th className="px-4 py-2">Yazar</th>
              <th className="px-4 py-2">Özet</th>
              <th className="px-4 py-2">Yayın Tarihi</th>
              <th className="px-4 py-2">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <BlogElements
              posts={posts}
              currentPage={currentPage}
              selectedCategory={selectedCategory}
              pageSize={pageSize}
              handleDelete={handleDelete}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
