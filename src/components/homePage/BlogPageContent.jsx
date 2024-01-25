import React, { useState, useEffect } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import Category from "./Category";
import SideBar from "./SideBar";
import { getPosts, getCategories } from "../../services/dbquery";

const BlogPageContent = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState([]);

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
  };

  return (
    <div className="mb-8 mx-24 bg-gray-300">
      {/* Category section */}
      <div className="">
        <Category
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* blogCards section */}
      <div className="flex gap-10">
        {/* blogcards comp*/}
        <div className=" border-r-2 ">
          <BlogCards
            posts={posts}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
            pageSize={pageSize}
          />
        </div>

        {/* sidebar */}
        <div>
          <div>
            <SideBar />
          </div>
        </div>
      </div>

      {/* pagination section */}
      <div>
        <Pagination
          posts={posts}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPageContent;
